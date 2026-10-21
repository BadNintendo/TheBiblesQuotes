/**  ██╗██╗                                                                 ██╗██╗
 *   ██║╚═╝  ████████╗ ██████    ██████╗UOTES  ██████╗ ██████╗ ███╗   ███╗  ╚═╝██║
 *   ██║     ╚══██╔══╝ ██╔═██╗I ██╔═══██╗     ██╔════╝██╔═══██╗████╗ ████║     ██║
 *   ██║        ██║H   █████╔╝B ██║   ██║     ██║     ██║   ██║██╔████╔██║     ██║
 *   ██║        ██║E   ██║ ██╗L ██║  █ █║     ██║     ██║   ██║██║╚██╔╝██║     ██║
 *   ██║        ██║    ██████║E ╚█████ ██╗ ██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║     ██║
 *   ██║██╗     ╚═╝      ╚═══╝S  ╚═══════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ██╗██║
 *   ╚═╝╚═╝                                                                 ╚═╝╚═╝
 * TheBiblesQuotes Project
 * © 2025 BadNintendo - Sockets Module
 * All rights reserved.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 * 
 * USAGE:
 * This software is provided 'as-is', without express or implied warranty. The authors are
 * not liable for damages arising from its use.
 * 
 * You may use this software for personal and commercial purposes under the following conditions:
 * 1. Do not misrepresent the origin of the software; do not claim it as your own.
 * 2. Altered versions must be marked as such and not misrepresented as the original.
 * 3. This notice must remain intact in all source distributions. */
const QPRx2025 = require('./QPRx2025');
const WebRTC = require('wrtc');

const {
	parseReference,
	formatVerseText,
	replaceStrongs,
	getVerseText,
	capsFirst,
	bibles,
} = require('./misc');

const {
	isHostWithStoredResults,
	validateAlphanumeric,
	validateParamsCSS,
	validateKeyword,
	isValidCSSValue,
	validateVersion,
	validateParams,
	validateSearch,
	sanitizeInput,
	validateUUID,
	isDigit,
} = require('./protection');

const {
	keepSessions,
	updateSession,
	createdEvents,
	deleteSession,
	rateLimitation,
	checKeepSession,
	returnBuiltAlert,
	checkAllKeepSession,
} = require('./middleware');

const timeouts = {}

/** Setup WebSocket connections for the provided namespace.
 * @param {Object} io - Socket.io instance.
 * @param {*} sharedsession 
 * @param {*} sessionMiddleware */
const setupWebSocket = (io, sharedsession, sessionMiddleware) => {
	const namespaces = {
		live: io.of('/live'),
		study: io.of('/study')
	 };
	const setupNamespace = (namespace) => {
		namespace.use((socket, next) => {
			if (socket.handshake.session) {
				next();
			} else {
				console.error('No session found in the handshake.');
				next(new Error('Authentication error: No session'));
			}
		});
		namespace.on('connection', (socket) => {
			if (!socket.handshake.session) {
				console.error('Session is missing in the handshake.');
				return;
			}
			socket.session = {
				connected: 0,
				sessions: {}
			};
			socket.session.connected++;
			socket.on('error', (err) => {
				console.error(`Socket error on ${socket.id}:`, err);
				socket.disconnect(true);
			});
			socket.on('clientError', (err) => {
				console.error(`Client error on ${socket.id}:`, err);
				socket.disconnect(true);
			});
			if (namespace.name === '/live') setupLiveHandlers(socket, io);
			else if (namespace.name === '/study') setupStudyHandlers(socket);
		});
	};

	const seupConnection = namespaces.live;
	seupConnection.use(sharedsession(sessionMiddleware, { autoSave: true }));
	seupConnection.use((socket, next) => {
		const sess = socket.handshake.session;
		if (!sess?.csrfToken) {
			console.warn('Rejected socket: missing CSRF token');
			return next(new Error('Missing CSRF token'));
		}
		next();
	});
	setupNamespace(seupConnection);
};


/** Setup additional live chat handlers for the connected socket.
 * @param {Object} socket - Socket.io instance representing a single connection */
const setupStudyHandlers = (socket) => {
	/** Initialize CSRF and UUID from session for socket.
	 * @param {string} key - expected to be 'uuid'; otherwise returns CSRF token
	 * @returns {string|boolean} - UUID or CSRF token from session */
	const hmm = (key) => (
		Object.assign(socket, {
			csrfToken: socket.handshake.session?.csrfToken || false,
			uuid: socket.handshake.session?.uuid || false,
			hosting: socket.handshake.session?.hosting || false,
			isHosted: socket.handshake.session?.isHosted || false
		}),
		key === 'uuid' ? socket.uuid : socket.csrfToken
	);

	/**  Checks whether the given socket is the host and matches the session ID.
	 * @param {Object} socket - Current socket instance containing ID and hosting flag
	 * @param {string} sessionId - Unique session identifier to verify against socket */
	const checkSession = (socket, sessionId) => {
		return Array.from(socket.nsp.sockets.values()).find(s => {
			return (socket.hosting && s?.id == socket.id && s?.sessionId == sessionId) ? true: false;
		});
	};

	/** Socket.IO listener for session join event.
	 * @param {Object} data - Payload from client containing session info
	 * @property {string} session - ID of the session client wants to join
	 * @callback hmm - Host validation function (e.g. token or UUID check)
	 * @callback validateParams - Generic validator for input format
	 * @callback checkAllKeepSession - Retrieves the entire session map
	 * @callback keepSession - Persists or updates a session entry
	 * @callback clearTimeouts - Cancels any pending timeouts for a session
	 * @callback isHostWithStoredResults - Checks if reconnecting host matches stored session
	 * @callback createdEvents.timed - Event scheduler for session events
	 * @callback returnBuiltAlert - Generates alert HTML for disconnection
	 * @callback rateLimitation.createDatabase - Initializes rate tracking for event type
	 * @callback rateLimitation.checkRateLimit - Verifies event frequency per session
	 *
	 * @property {string} socket.uuid - Unique identifier for the connecting socket
	 * @property {boolean} socket.hosting - Indicates if socket is acting as session host
	 * @property {boolean} socket.isHosted - Indicates if host role has already been claimed
	 * @property {string} socket.sessionId - Bound session ID for this socket connection*/
	socket.on('joinSession', (data) => {
		if (!hmm('uuid')) return;
		const sessionId = data.session;
		if (!sessionId || !validateParams({ sessionId }, { sessionId: isDigit })) {
			console.log(`Invalid Session ID: ${sessionId}`);
			return;
		}
		const uuid = socket.uuid;
		socket.sessionId = sessionId;
		const session = checKeepSession(sessionId, 2);
		const userPayload = {
			count: (session.count || 0) + 1
		};
		if (session == false) {
			userPayload.expires = new Date(Date.now() + 60 * 60 * 1000);
			socket.hostin = true;
			userPayload.owner = uuid;
		}
		else if (session?.slide[0]) userPayload.slide = session?.slide;
		updateSession(sessionId, userPayload, 2);
		socket.join(sessionId);
		socket.emit('usersConnected', userPayload);
		socket.to(sessionId).emit('usersConnected', userPayload);
	});

	socket.on('slide', ({ slide = {}, content = {}, store = {} }) => {
		if (!socket.hostin && !socket.uuid) return;
		if (Object.keys(slide).length !== 0) {
			store.slide = updateSession(socket.sessionId, userPayload, 2);
		}
		if (Object.keys(content).length !== 0) {
			store.content .updateSession(socket.sessionId, content, 2);
			/*content.slide.forEach((div) => {
				content.slide[div].containers.forEach((cont => {
					content.slide[div].containers[cont].height;
					content.slide[div].containers[cont].width;
					content.slide[div].containers[cont].positionOfx; // positon on page
					content.slide[div].containers[cont].positionOfy; // positon on page
					content.slide[div].containers[cont].BGcolor;
					content.slide[div].containers[cont].color;
					content.slide[div].containers[cont].padding;
					content.slide[div].containers[cont].textPosition; // left, right, center
					content.slide[div].containers[cont].textFont; // selection limited fonts
					content.slide[div].containers[cont].text;
				});
			});*/
		}
		if (Object.keys(store).length !== 0) {
			socket.emit('slide', store);
			socket.to(sessionId).emit('slide', store);
		}
	});

	socket.on('disconnect', () => {
		const sessionId = socket.sessionId;
		const session = checKeepSession(sessionId, 2);
		if (!sessionId || !session) return;
		session.count = Math.max(0, (session.count || 1) - 1);
		const connectedCount = session.count;
		socket.to(sessionId).emit('usersConnected', { connectedCount });
	});
};


/** Setup additional live chat handlers for the connected socket.
 * @param {Object} socket - Socket.io instance representing a single connection */
const setupLiveHandlers = (socket, io) => {
	/** Initialize CSRF and UUID from session for socket.
	 * @param {string} key - expected to be 'uuid'; otherwise returns CSRF token
	 * @returns {string|boolean} - UUID or CSRF token from session */
	const hmm = (key) => (
		Object.assign(socket, {
			csrfToken: socket.handshake.session?.csrfToken || false,
			uuid: socket.handshake.session?.uuid || false,
			hosting: socket.handshake.session?.hosting || false,
			isHosted: socket.handshake.session?.isHosted || false,
			hashed: socket.handshake.session?.hashed || false
		}),
		key === 'uuid' ? socket.uuid : socket.csrfToken
	);
	
	// Heartbeat rate limiter: max 60 per minute per socket (per user)
	if (!socket.heartbeatLimit) {
		socket.heartbeatLimit = { count: 0, start: Date.now() };
	}
	const MAX_HEARTBEATS_PER_MIN = 1000;

	// Helper for per-event rate limiting (60 per minute per event per socket)
	const eventRateLimits = {};
	const MAX_EVENTS_PER_MIN = 60;
	function checkEventRateLimit(eventName) {
		const now = Date.now();
		if (!eventRateLimits[eventName]) {
			eventRateLimits[eventName] = { count: 1, start: now };
			return true;
		}
		const limit = eventRateLimits[eventName];
		if (now - limit.start < 60000) {
			limit.count++;
			if (limit.count > MAX_EVENTS_PER_MIN) return false;
		} else {
			limit.count = 1;
			limit.start = now;
		}
		return true;
	}

	// Wrap listener with rate limiting
	function rateLimitedOn(eventName, handler) {
		socket.on(eventName, (...args) => {
			if (!checkEventRateLimit(eventName)) return;
			handler(...args);
		});
	}

	/**  Checks whether the given socket is the host and matches the session ID.
	 * @param {Object} socket - Current socket instance containing ID and hosting flag
	 * @param {string} sessionId - Unique session identifier to verify against socket */
	const checkSession = (socket, sessionId) => {
		return Array.from(socket.nsp.sockets.values()).find(s => {
			return (socket.hosting && s?.id == socket.id && s?.sessionId == sessionId) ? true: false;
		});
	};

	/** Clears any active timeouts linked to a session.
	 * @param {string} sessionId - Key used to locate and clear timeout references from keepSessions */
	const clearTimeouts = (sessionId) => {
		if (timeouts[sessionId]) {
			clearTimeout(timeouts[sessionId]);
			delete deleteSession(sessionId, 'hostTimedout');
		}
	};

	/** Use to count sessionId connections
	 * @param {*} sessionId 
	 * @returns */
	function countClientsInRoom(sessionId) {
		//const room = io.sockets.adapter.rooms.get(sessionId);
		//return room ? room.size : 0;
		const activeSockets = Array.from(socket.nsp.sockets.values()).filter(s => s.sessionId === sessionId);
		return activeSockets.length;
	}

	/** Socket.IO listener for session join event.
	 * @param {Object} data - Payload from client containing session info
	 * @property {string} session - ID of the session client wants to join
	 * @callback hmm - Host validation function (e.g. token or UUID check)
	 * @callback validateParams - Generic validator for input format
	 * @callback checkAllKeepSession - Retrieves the entire session map
	 * @callback keepSession - Persists or updates a session entry
	 * @callback clearTimeouts - Cancels any pending timeouts for a session
	 * @callback isHostWithStoredResults - Checks if reconnecting host matches stored session
	 * @callback createdEvents.timed - Event scheduler for session events
	 * @callback returnBuiltAlert - Generates alert HTML for disconnection
	 * @callback rateLimitation.createDatabase - Initializes rate tracking for event type
	 * @callback rateLimitation.checkRateLimit - Verifies event frequency per session
	 * @property {string} socket.uuid - Unique identifier for the connecting socket
	 * @property {boolean} socket.hosting - Indicates if socket is acting as session host
	 * @property {boolean} socket.isHosted - Indicates if host role has already been claimed
	 * @property {string} socket.sessionId - Bound session ID for this socket connection*/
	socket.on('joinSession', (data) => {
		if (!hmm('uuid')) return;
		const sessionId = data.session;
		if (!sessionId || !validateParams({ sessionId }, { sessionId: isDigit })) {
			console.log(`Invalid Session ID: ${sessionId}`);
			return;
		}
		const uuid = socket.uuid;
		socket.sessionId = sessionId;
		const session = checKeepSession(sessionId);
		let skipJoin = true;
		if (socket.hosting) {
			if (!validateParams({ uuid }, { uuid: validateUUID })) {
				console.log(`Invalid UUID: ${uuid}`);
				return;
			}
			const isReconnectHost = isHostWithStoredResults(session, socket);
			if ((uuid && isReconnectHost) || (uuid && session && session?.uuid === uuid)) {
				clearTimeouts(sessionId);
				session.hostInactive = false;
				session.expires = new Date(Date.now() + 60 * 60 * 1000);
				session.count = (countClientsInRoom(sessionId) || (session.count || 0 + 1));
				createdEvents.timed(sessionId, 'alerts', 'clear');
				updateSession(sessionId, session);
				skipJoin = false;
			}
		} else if (session) {
			session.count = (countClientsInRoom(sessionId) || (session.count || 0 + 1));
			skipJoin = false;
			updateSession(sessionId, session)
		}
		if (!skipJoin) {
			socket.join(sessionId);
			console.log('connected clients: ', countClientsInRoom(sessionId));
			if (session?.results) socket.emit('searchResults', session.results);
			const connectedCount = session?.count || 1;
			const connectionType = socket.hosting && !socket.isHosted ? 'Host' : 'Guest';
			console.log(`#${connectedCount} ${connectionType} Connected: ${uuid} to Session: ${sessionId}`);
			const isItTime = createdEvents.timed(sessionId, 'alerts', 'check');
			const userPayload = {
				connectedCount,
				scrollEnabled: session?.scrollEnabled,
				changeLayout: session?.changeLayout,
				hostInactive: session?.hostInactive && isItTime,
				html: returnBuiltAlert({
					id: `hostExited-${sessionId}`,
					title: 'Host Disconnected',
					message: 'Host Disconnected, Stay & Wait or Find a new Session!',
					icon: 'OldPreacher'
				})
			};
			rateLimitation.createDatabase('joinSession');
			rateLimitation.checkRateLimit(sessionId, 'joinSession', 100);
			socket.emit('usersConnected', userPayload);
			if (session?.hearts && session?.hearts >= 0) socket.emit('heartbeat', { heartbeat: session.hearts });
			socket.to(sessionId).emit('usersConnected', userPayload);
		}
	});

	/** Socket.IO disconnect event handler for session cleanup and host timeout logic.
	 * @property {string} socket.sessionId - Active session ID tied to the socket
	 * @property {boolean} socket.hosting - Indicates whether this socket was acting as host
	 * @property {string} socket.uuid - Unique identifier for the socket
	 * @constant {number} timeoutTotal - Duration (in ms) after which to purge hostless sessions (60 min)
	 * @constant {number} timeoutTotalHost - Duration (in ms) after which to alert others of host exit (5 min)
	 * @callback checKeepSession - Retrieves a persistent session reference, if available
	 * @callback keepSession - Updates or stores session data safely
	 * @callback checkAllKeepSession - Returns entire session state collection
	 * @callback createdEvents.timed - Time-driven event system used for 'alerts' creation or removal
	 * @callback returnBuiltAlert - Alert HTML generator for UI notifications */
	socket.on('disconnect', () => {
		const sessionId = socket.sessionId;
		const session = checKeepSession(sessionId);
		if (!sessionId || !session) return;
		session.count = Math.max(0, (countClientsInRoom(sessionId) || (session.count || 1) - 1));
		const connectedCount = session.count;
		socket.to(sessionId).emit('usersConnected', { connectedCount });
		if (socket.hosting && session.uuid === socket.uuid) {
			const timeoutTotalHost = 5 * 60000;
			const isItTime = createdEvents.timed(sessionId, 'alerts', 'create');
			if (!isItTime) {
				clearTimeout(timeouts[sessionId]);
				timeouts[sessionId] = setTimeout(() => {
					socket.to(sessionId).emit('alert', {
						html: returnBuiltAlert({
							id: `hostExited-${sessionId}`,
							title: 'Host Disconnected',
							message: 'Host Disconnected, Stay & Wait or Find a new Session!',
							icon: 'OldPreacher'
						})
					});
					session.hostInactive = true;
				},
				timeoutTotalHost);
			}
		}
		updateSession(socket.sessionId, session);
	});

	rateLimitedOn('selectedIcon', (selected) => {
		if (!selected || !validateParams({ selected }, { selected: validateAlphanumeric })) return;
		if (selected && socket.hosting && checkSession(socket, socket.sessionId)) {
			const sessionId = socket.sessionId;
			updateSession(sessionId, { selectedSvg: selected });
		}
	});

	rateLimitedOn('clearResults', (session) => {
		if (!session && validateParams({ session } , { session: isDigit }) && !checkSession(socket, socket.sessionId)) return;
		rateLimitation.createDatabase('clearResults');
		rateLimitation.checkRateLimit(session, 'clearResults', 100);
		deleteSession(session, 'results');
		socket.emit('clearResultsClient', true);
		socket.to(session).emit('clearResultsClient', true);
	});

	rateLimitedOn('highlighted', (data) => {
		if (!checkSession(socket, socket.sessionId)) return;
		if (validateParams(data, { session: isDigit, id: validateSearch }) || validateParamsCSS(data, { bg: isValidCSSValue, txt: isValidCSSValue })) {
			if (socket.hosting) {
				rateLimitation.createDatabase('highlighted');
				rateLimitation.checkRateLimit(socket.sessionId, 'highlighted', 250);
				if (data.session && data.id) {
					socket.emit('highlightMessage', data);
					socket.to(data.session).emit('highlightMessage', data);
				} else if (data.bg && data.txt) {
					socket.emit('highlightCSS', data);
					socket.to(data.session).emit('highlightCSS', data);
				}
			}
		}
	});

	rateLimitedOn('scrolling', (data) => {
		if (!checkSession(socket, socket.sessionId)) return;
		if (data && socket.hosting) {
			rateLimitation.createDatabase('scrolling');
			rateLimitation.checkRateLimit(socket.sessionId, 'scrolling', 850);
			if (socket.sessionId) {
				if (typeof data.scrollRatio === 'number' || typeof data.scrollTop === 'number') {
					data.scrollRatio = Math.max(0, Math.min(1, data.scrollRatio));
					socket.to(socket.sessionId).emit('scrolling', data);
				} else {
					socket.emit('scrolling', data);
					socket.to(socket.sessionId).emit('scrolling', data);
				}
				updateSession(socket.sessionId, { scrollEnabled: data.scrollEnabled, scrollData: data });
			}
		}
	});
	
	rateLimitedOn('ping', () => {
		if (socket.hosting) {
			socket.newDate = socket.newDate + 1 || 0;
			if (socket.newDate >= 5) {
				socket.newDate = 0;
				updateSession(socket.sessionId, { expires: new Date(Date.now() + 60 * 60 * 1000) });
			}
		}
		socket.emit('pong');
	});

	rateLimitedOn('searchBible', data => {
		let { ref, session, versions, changeLayout, control = false } = data;
		if (!data || !ref || !session || !validateParams({ session, ref, versions }, { session: isDigit, ref: validateSearch, versions: validateVersion }) || !checkSession(socket, socket.sessionId) || changeLayout && !['small', 'full'].includes(changeLayout) || typeof control !== 'boolean' || !socket.csrfToken || !socket.hosting) return;
		const sess = checKeepSession(session);
		sess.changeLayout = changeLayout;
		ref = sanitizeInput(ref);
		rateLimitation.createDatabase('searchBible');
		rateLimitation.checkRateLimit(socket.sessionId, 'searchBible', 2000);
		socket.emit('typing', ref.length);
		socket.to(session).emit('typing', ref.length);
		const results = [];
		const versionsArr = versions.split(',').map(v => v.toLowerCase());
		const pushResult = (parser, version, book, chapter, verse, text, meta = null) => {
			const isMeta = (meta?.type) ? `<strong>${chapter}:${verse}</strong>` : '';
			const ifBuilt = (parser) ? text : `<div id="verse-${chapter}-${verse}" class="verse"> ${isMeta} ${text} </div>`;
			results.push({version, book, chapter, verse, text, meta,
				html: `<div class="result ${meta?.type || 'verse'}-result">
					<div class="bible-version"><center>${version.toUpperCase()} ${capsFirst(book)} ${chapter}</center></div>
					${ifBuilt}
				</div>`});
		};
		const foundResults = result => {
			if (result.length > 0) {
				sess.results = result;
				updateSession(session, sess);
				socket.emit('searchResults', result);
				socket.to(session).emit('searchResults', result, changeLayout);
			}
		};
		if (/^[#$]/.test(ref)) {
			if (!validateParams({ ref }, { ref: validateKeyword })) return;
			const prefixType = ref.charAt(0);
			const searchTerm = ref.slice(1).toLowerCase();
			const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const escapedTerm = escapeRegex(searchTerm);
			const trace = {
				type: prefixType === '$' ? 'keyword' : 'tag',
				query: searchTerm,
				bibleVersions: versionsArr
			};
			let regex;
			if (prefixType === '$') regex = new RegExp(`\\b${escapedTerm}\\b`, 'i');
			else regex = new RegExp(`${escapedTerm}`, 'i');
			versionsArr.forEach(version => {
				const bible = bibles[version];
				if (bible?.verses) bible.verses.forEach(v => {
					if (regex.test(v.text.toLowerCase())) pushResult(false, version.toUpperCase(), capsFirst(v.book_name), v.chapter, v.verse, formatVerseText(v.text, version, true, control), trace);
				});
			});
			foundResults(results);
		} else {
			const references = parseReference(ref);
			versionsArr.forEach(version =>
				references.forEach(({ book, chapter, verse }) => {
					const content = getVerseText(true, version, book, chapter, verse, 'default', control);
					if (content) pushResult(true, version.toUpperCase(), book, chapter, verse, content);
				}));
			foundResults(results);
		}
	});

	socket.on('heartbeat', (data) => {
		const { session } = data;
		if (!session || !validateParams({ session }, { session: isDigit })) return;
		const now = Date.now();
		if (now - socket.heartbeatLimit.start < 60000) {
			socket.heartbeatLimit.count++;
			if (socket.heartbeatLimit.count > MAX_HEARTBEATS_PER_MIN) return;
		} else {
			socket.heartbeatLimit.count = 1;
			socket.heartbeatLimit.start = now;
		}
		const sess = checKeepSession(session);
		if (!sess) return;
		sess.hearts = sess?.hearts || 0;
		sess.hearts = Math.min(sess.hearts + 1, 9999999);
		updateSession(session, sess);
		socket.emit('heartbeat', { heartbeat: sess.hearts });
		socket.to(session).emit('heartbeat', { heartbeat: sess.hearts });
	});
};

const setupAudioSocket = (data, socket) => {
	/** Handle the 'push to talk' event.
	 * @param {Object} data - The data for the push to talk. */
	socket.on('push to talk', ({ status }) => {
		try {
			if (!validateParams({ status }, { status: validateAlphanumeric })) throw new Error('Permission denied');
			handlePushToTalk(socket, status);
		} catch (error) {
			streamManagement.logError(error);
		}
	});
};

/** Handle push-to-talk event.
 * @param {Object} socket - The socket instance.
 * @param {string} status - The push-to-talk status ('start' or 'stop'). */
const handlePushToTalk = async (socket, status) => {
	try {
		if (typeof status !== 'string') throw new TypeError('Input must be a string.');
		const { roomId, uuid, nsp } = socket;
		console.log(`handlePushToTalk used by ${uuid} in room ${roomId}`);
		const room = streamManagement.checkRoom(roomId.toLowerCase());
		if (!room) throw new Error('Room not found');
		if (room.mutedUsers.includes(uuid)) throw new Error('You are muted and cannot use push-to-talk');
		const user = streamManagement.checkUsers().find(u => u.id === uuid);
		const speakers = keepSessions.activeSpeakers;
		const isSpeaker = speakers.get(roomId) === uuid;
		const isAdditionalSpeaker = speakers.get(`${roomId}_additional`) === uuid;
		const emitPushToTalk = (status) => nsp.to(roomId).emit('push to talk', { speaker: uuid, status });
		if (status === 'start') {
			if (!speakers.has(roomId)) {
				speakers.set(roomId, uuid);
				emitPushToTalk('start');
			} else if (isPrivileged && !isSpeaker) {
				if (!speakers.has(`${roomId}_additional`)) {
					speakers.set(`${roomId}_additional`, uuid);
					emitPushToTalk('start');
				} else throw new Error('Another privileged user is already speaking');
			} else throw new Error('Another user is already speaking');
		} else if (status === 'stop') {
			if (isSpeaker) {
				speakers.delete(roomId);
				emitPushToTalk('stop');
			} else if (isAdditionalSpeaker) {
				speakers.delete(`${roomId}_additional`);
				emitPushToTalk('stop');
			}
		}
	} catch (error) {
		streamManagement.logError(error);
		socket.emit('error', { message: error.message, timestamp: Date.now() });
	}
};

/** Stream Management Functions
 * Grouping all functions related to stream management. */
const streamManagement = {
	/** @param {Error} error - The error object.
	 * @param {Object} [additionalContext={}] - Additional context to include in the log. */
	logError: (error, additionalContext = {}) => {
		const { message, stack } = error;
		const timestamp = new Date().toISOString();
		const errorLocation = stack.split('\n')[1] || '';
		const formattedStack = stack.replace(/\n/g, '\n\t');
		const logDetails = {
			timestamp,
			message,
			errorLocation: errorLocation.trim(),
			...additionalContext,
			stack: formattedStack
		};
		console.error(JSON.stringify(logDetails, null, 4));
	},

	/** Retrieve the list of all users in the keepSessions.
	 * @returns {Array} - An array of user objects present in the keepSessions, or an empty array if none exist. */
	checkUsers: () => keepSessions.users || [],
	
	/** Check the existence and details of a room by its ID.
	 * @param {string} roomId - The ID of the room to check.
	 * @returns {Object|false} - The room object if found, or false if the room does not exist. */
	checkRoom: roomId => keepSessions.rooms[roomId] || false,

	/** Updates the room data in the keepSessions with the specified room details.
	* @param {string} roomId - The ID of the room to update.
	* @param {Object} room - The room object containing updated data to be merged with the existing room data.
	* @returns {void}
	*/
	updateRoomData: (roomId, room) => {
		if (!keepSessions.rooms[roomId]) return;
		keepSessions.rooms[roomId] = { ...keepSessions.rooms[roomId], ...room };
	},

	/** Create a new room.
	 * @param {string} roomName - Name of the new room.
	 * @param {Object} settings - Settings for the new room.
	 * @param {string} ownerId - ID of the owner of the new room.
	 * @returns {string} - ID of the created room.
	 * 
	 * (roomName, settings, req.session.user.id) */
	createRoom: async (roomName, settings, ownerId) => {
		if (!roomName || !ownerId) throw new Error('Field is empty and required!');
		const roomId = QPRx2025.generateUUID();
		const existingRoom = Object.values(keepSessions.rooms).find(room => room.name.toLowerCase() === roomName.toLowerCase());
		if (existingRoom) throw new Error('Room name already exists!');
		const ownerRooms = Object.values(keepSessions.rooms).filter(room => room.owner === ownerId);
		if (ownerRooms.length >= 3) throw new Error('You have reached the limit of 3 rooms.');
		userManagement.updateUserProfile(ownerId, { allowedRooms: { [roomName]: true } });
		keepSessions.rooms[roomName.toLowerCase()] = {
			id: roomId,
			name: roomName,
			owner: ownerId,
			topic: '',
			users: [],
			locked: false,
			allowGuests: false,
			createdOn: new Date(),
		};
		return roomId;
	},
};

module.exports = {
	setupWebSocket,
	checKeepSession,
	setupLiveHandlers,
	parseReference,
	formatVerseText,
};