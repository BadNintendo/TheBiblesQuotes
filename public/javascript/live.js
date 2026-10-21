document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('theme-toggle');
	const params = new URLSearchParams(window.location.search);
	const shareLive = 		document.getElementById('shareLive');
	const shareBox = 		document.getElementById('shareBox');
	const container = 		document.getElementById('alerts');
	const typing = 			document.getElementById('loading');
	const dataContainer = 	document.getElementById("data-container");
	const bibles = 			JSON.parse(dataContainer.getAttribute("data-bibles") || "{}");
	const chapters = 		JSON.parse(dataContainer.getAttribute("data-chapters") || "{}");
	const initialSelectedBibles = params.get('bible') ? params.get('bible').split(',') : ['KJV'];

	const controls = {
		scrolling: false, //add checked on click event to allow host to scroll for viewers who are watching
		tooltip: false
	};
	
	let timeoutHighlight = [], selectedVersions = [], debounceTimeout = null, hideTimeout = null,missedPongs = 0, disconnected = false, lastEmit = 0, layoutEnabled = false;
	let UUID = 		dataContainer.dataset?.UUID;
	let session = 	dataContainer.dataset.session;
	let versions = 	dataContainer.dataset.version || ['kjv'];
	let isHost = 	(dataContainer.dataset?.ishost === 'true') ? true : false;

	const applyHostAndSession = (sessionId, queryParts = []) => ((url, params) => {
		for (const [key, value] of params.entries()) {
			queryParts.push(value === '' ? encodeURIComponent(key) : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		}
		if (!params.has('session')) queryParts.push(`session=${encodeURIComponent(sessionId)}`);
		if (isHost && ![...params.keys()].includes('host')) queryParts.push('host');
		const finalQuery = queryParts.length ? `?${queryParts.join('&')}` : '';
		const newUrl = `${url.pathname}${finalQuery}`;
		window.history.replaceState({}, '', newUrl);
	})(new URL(window.location.href), new URLSearchParams(new URL(window.location.href).search));

	applyHostAndSession(session);

	shareLive.addEventListener('click', () => {
		const isVisible = shareBox.style.display === 'flex';
		shareBox.style.display = isVisible ? 'none' : 'flex';
	});

	shareBox.addEventListener('mouseenter', () => clearTimeout(hideTimeout));

	shareBox.addEventListener('mouseleave', () => {
		hideTimeout = setTimeout(() => {
		shareBox.style.display = 'none';
		}, 3000);
	});

	document.querySelectorAll('.socials').forEach(social => {
		social.addEventListener('click', () => {
		const classList = social.classList;
		const loc = (location.href).replace(/host=?/g, '').replace(/[?&]mode=dark/g, '');
		if (classList.contains('x')) window.open('https://x.com/share?url=' + encodeURIComponent(loc), '_blank');
		else if (classList.contains('fb')) window.open('https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(loc), '_blank');
		else if (classList.contains('re')) window.open('https://reddit.com/submit?url=' + encodeURIComponent(loc), '_blank');
		else if (classList.contains('copy')) navigator.clipboard.writeText(loc);
		});
	});

	const updateUrlParam = (key, value, queryParts = []) => ((url, params) => {
		for (const [k, v] of params.entries()) {
			if (k === key) continue;
			if (v === '') queryParts.push(encodeURIComponent(k));
			else queryParts.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
		}
		if (key === 'host') { if (isHost) { queryParts.push('host'); }
		} else if (value !== null && value !== '') queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		const finalQuery = queryParts.length ? `?${queryParts.join('&')}` : '';
		const newUrl = `${url.pathname}${finalQuery}`;
		window.history.replaceState({}, '', newUrl);
	})(new URL(window.location.href), new URLSearchParams(window.location.search));

	const theBiblesQuotes = {
		setupDataChannel: (dataChannel) => {
			dataChannel.onopen = (data) => theBiblesQuotes.startPing(dataChannel);
			dataChannel.onclose = () => clearInterval(this.pingInterval);
			dataChannel.onmessage = (event) => {
				const message = event.data;
				if (message === 'pong') {};
			};
		},
		startDataPing: (dataChannel) => {
			this.pingInterval = setInterval(() => {
				if (dataChannel.readyState === 'open') dataChannel.send('ping');
			}, 15000);
		},
		keepAlive: () => {
			console.log(
				`%cWelcome to The Bibles Quotes! %cPing/Pong status checks are used to maintain active connectivity. They’re purely technical—like heartbeat pulses—not messages or signs.`,
				'color: green; font-weight: bold;',
				'color: gray; font-style: italic;'
			);
			const getTimestamp = () =>
				new Date().toLocaleTimeString('en-US', { hour12: false }) + '.' + String(new Date().getMilliseconds()).padStart(3, '0');
			const ping = () => {
				socket.emit('ping');
				console.log(`%cPing! %c${getTimestamp()}`, 'color: green;', 'color: gray;');
				missedPongs++;
				if (missedPongs >= 3 && !disconnected) {
					disconnected = true;
					const inner = `<div href="" class="typeOf" id="hostExited-${session}}" title="Cannot Connect">No Connection. Unable to reach Server.</div>
						<div class="svgIcons" title="No Connection"><svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <title></title> <g data-name="Layer 8" id="Layer_8"> <path class="cls-6" d="M62,62H2V54H9.34a4,4,0,0,1,2.83,1.17L15,58l2.89-5.79A4,4,0,0,1,21.47,50H42.53a4,4,0,0,1,3.58,2.21L49,58l2.83-2.83A4,4,0,0,1,54.66,54H62Z"></path> <polyline class="cls-7" points="6 54 6 46 2 46 2 42 6 42 6 38 10 38 10 42 14 42 14 46 10 46 10 54"></polyline> <polyline class="cls-7" points="54 54 54 46 50 46 50 42 54 42 54 38 58 38 58 42 62 42 62 46 58 46 58 54"></polyline> <polygon class="cls-7" points="21 50 27 32 23 13 32 27 32 16 46 2 38 17 39 32 42 50 21 50"></polygon> <path class="cls-8" d="M62,62H2V54H9.34a4,4,0,0,1,2.83,1.17L15,58l2.89-5.79A4,4,0,0,1,21.47,50H42.53a4,4,0,0,1,3.58,2.21L49,58l2.83-2.83A4,4,0,0,1,54.66,54H62Z"></path> <polyline class="cls-8" points="21 50 27 32 23 13 32 27 32 16 46 2 38 17 39 32 42 50"></polyline> <polyline class="cls-8" points="38 24 49 24 56 17 51 12"></polyline> <polyline class="cls-8" points="54 15 60 9 60 2"></polyline> <polyline class="cls-8" points="49 24 53 28 58 28 62 24"></polyline> <polyline class="cls-8" points="43 24 43 20 47 16"></polyline> <polyline class="cls-8" points="47 24 47 29 44 32"></polyline> <polyline class="cls-8" points="37 11 33 7 33 2"></polyline> <polyline class="cls-8" points="33 6 24 6 21 9"></polyline> <polyline class="cls-8" points="27 31 15 19 7 19 2 14"></polyline> <polyline class="cls-8" points="20 24 16 28 11 28"></polyline> <polyline class="cls-8" points="11 19 11 14 14 11"></polyline> <polyline class="cls-8" points="6 54 6 46 2 46 2 42 6 42 6 38 10 38 10 42 14 42 14 46 10 46 10 54"></polyline> <polyline class="cls-8" points="54 54 54 46 50 46 50 42 54 42 54 38 58 38 58 42 62 42 62 46 58 46 58 54"></polyline> </g> </g></svg></div>`;
					showClientAlert(inner, 60000);
					console.warn(`%cNo response to Server!`, 'color: red;');
				}
			};
			ping();
		 	setInterval(ping, 30000);
			socket.on('pong', () => {
				console.log(`%cPong! %c${getTimestamp()}`, 'color: green;', 'color: gray;');
				missedPongs = 0;
			});
		},
	};

	((url) => {
		if (UUID) {
			if (typeof uuid !== 'undefined') {
				url.searchParams.set('uuid', UUID);
				window.history.replaceState({}, '', url);
			}
		}
	})(new URL(window.location.href));
	
	const socket = io('/live', {
		reconnectionAttempts: 3, 
		reconnectionDelay: 5000,
		transports: ['websocket'],
		withCredentials: true
	});

	theBiblesQuotes.keepAlive();
	
	document.addEventListener('dblclick', event => {
		const target = event.target;
		if (target.classList.contains('verse')) socket.emit('highlighted', { session: session, id: target.id });
	});

	socket.emit('joinSession', { session, uuid: UUID });

	socket.on('usersConnected', (data) => {
		const container = document.getElementById('alerts');
		if (data?.scrollEnabled) {
			const enabledScrolling = document.getElementById('scrollBox');
			enabledScrolling.style.display = (data.scrollEnabled) ? 'inline-block' : 'none';
		}
		if (data?.hostInactive) {
			if (data?.html && container) showClientAlert(data.html);
			//clearTimeout(alertsTimeout);
			//alertsTimeout = null;
		} else if (container) {
			container.style.display = 'none';
			container.innerHTML = '';
		}
		if (data.changeLayout && !layoutEnabled) {
			layoutEnabled = true;
			formatBibleSections();
		}
		document.getElementById('userCount').innerText = data.connectedCount;
	});

	socket.on('highlightMessage', (data) => {
		const messageElement = document.getElementById(data.id);
		if (messageElement) {
			if(timeoutHighlight.length !== 0) {
				timeoutHighlight.forEach(timeout => {
					clearTimeout(timeout);
					delete timeoutHighlight[timeout];
				});
			}
			if (!messageElement.classList.contains('highlighted')) {
				messageElement.classList.add('highlighted');
				messageElement?.scrollIntoView({ behavior: 'smooth' });
				timeoutHighlight[data.id] = setTimeout(() => messageElement.classList.remove('highlighted'), 20000);
			} else {
				messageElement.classList.remove('highlighted');
				clearTimeout(timeoutHighlight[data.id]);
				delete timeoutHighlight[data.id];
			}
		}
	});

	socket.on('highlightCSS', (data) => {
		const cssLink = document.getElementById('custom');
		if (cssLink) cssLink.remove();
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.id = 'custom';
		link.href = `../css/highlight.css?highlight=${data.bg},${data.txt}`;
		document.head.appendChild(link);
		document.getElementById('highlightExample').style.borderColor = 'green';
		document.getElementById('toggleBg').classList.remove('active');
		document.getElementById('toggleTxt').classList.remove('active');
		document.getElementById('coloredDot').style.color = 'green';
	});

	const showClientAlert = (htmlContent, timeout = 120000) => {
		const container = document.getElementById('alerts');
		if (!container) return;
		else if (container.style.display == 'block') {
			container.style.display = 'none';
			container.innerHTML = '';
			return;
		}
		container.innerHTML = htmlContent;
		const exitButton = document.createElement('div');
		Object.assign(exitButton.style, {
			position: 'absolute',
			top: '5px',
			right: '5px',
			width: '14px',
			height: '14px',
			lineHeight: '14px',
			textAlign: 'center',
			border: '1px solid #000',
			cursor: 'pointer'
		});
		exitButton.textContent = '✕';
		exitButton.onclick = () => {
			container.style.display = 'none';
			container.innerHTML = '';
			alertsTimeout = null;
		};
		container.appendChild(exitButton);
		container.style.display = 'block';
	};
	
	socket.on('alert', ({ html }) => {
		if (html) showClientAlert(html);
	});

	let toggleTTS = null, langTTS = 'en-US';

	const TTS = (type='play', lang='en-US') => {
		const currentText = document.getElementById('results').innerText;
		const utterance = new SpeechSynthesisUtterance(currentText);
	  		utterance.lang = lang;
	 	if (type == 'play') speechSynthesis.speak(utterance);
		else if (type == 'stop') speechSynthesis.cancel();
	};
	TTS('stop');

	const resultsTTS = document.getElementById('resultsTTS');
	resultsTTS.addEventListener('click', (e) => {
		const what = e.target;
		resultsTTS.classList.remove('englishTTS', 'germanTTS', 'frenchTTS', 'spanishTTS');
		resultsTTS.classList.add(what.id);
		if (what.id == 'englishTTS') langTTS = 'en-US';
		else if (what.id == 'germanTTS') langTTS = 'de-DE';
		else if (what.id == 'frenchTTS') langTTS = 'fr-FR';
		else if (what.id == 'spanishTTS') langTTS = 'es-ES';
		if (toggleTTS == what.id) resultsTTS.classList.remove(what.id);
		if (toggleTTS != what.id) {
			if (toggleTTS != null) TTS('stop');
			toggleTTS = what.id;
			TTS('play', langTTS);
		} else {
			TTS('stop');
			toggleTTS = null;
		}
	});

	socket.on('searchResults', (results, changeLayout = false) => {
		if (!results) return;
		document.getElementById('loading').style.display = 'none';
		const containerResults = document.getElementById('results');
		containerResults.style.display = 'block';
		containerResults.innerHTML = results.map(r => r.html).join('');
		containerResults.scrollTop = 0;
		if (layoutEnabled || changeLayout) {
			layoutEnabled = true;
			formatBibleSections();
		}
		if (toggleTTS) {
			TTS('stop');
			TTS('play', langTTS);
		}
	});

	socket.on('typing', (data) => {
		if (data >= 1 && typing.style.display == 'block') typing.style.display = 'block';
		else typing.style.display = 'none';
	});

	let keepHearts = 0, keepHeartsTimeout = null;

	document.getElementById('heart').addEventListener('click', () => socket.emit('heartbeat', { session }));

	socket.on(('heartbeat'), (data) => {
		if (data?.heartbeat >= 0 && data?.heartbeat <= 9999999) {
			if (keepHearts != data.heartbeat) {
				keepHearts = data.heartbeat;
				const liked = document.getElementById('heart');
				if (!liked.classList.contains('liked')) {
					clearTimeout(keepHeartsTimeout);
					keepHeartsTimeout = setTimeout(() => liked.classList.remove('liked'), 250);
					liked.classList.add('liked');
				} else {
					clearTimeout(keepHeartsTimeout);
					keepHeartsTimeout = setTimeout(() => liked.classList.remove('liked'), 250);
				}
			}
			document.getElementById('likeCount').innerText = data.heartbeat;
		}
	});
	
	socket.on('clearResultsClient', (data) => {
		if (!data) return;
		TTS('stop');
		document.getElementById('results').style.display = 'none';
		document.getElementById('results').innerHTML = '';
	});
	
	const applyTheme = (requestedTheme = null) => ((params) => {
		const currentTheme = localStorage.getItem('theme');
		const paramTheme = params.get('mode');
		let themeToApply = null;
		if (requestedTheme === 'dark') themeToApply = 'dark';
		else if (requestedTheme) themeToApply = null;
		else if (paramTheme === 'dark') themeToApply = 'dark';
		else if (!paramTheme && !requestedTheme && currentTheme === 'dark') themeToApply = 'dark';
		const isDark = themeToApply === 'dark';
		document.body.classList.toggle('dark-mode', isDark);
		if (themeToggle) themeToggle.checked = isDark;
		if (isDark) localStorage.setItem('theme', 'dark');
		else localStorage.removeItem('theme');
		updateUrlParam('mode', themeToApply);
	})(new URLSearchParams(window.location.search));

	themeToggle.addEventListener('change', () => {
		if (themeToggle.checked) {
			applyTheme('dark');
			editPageMode('dark');
		}
		else {
			applyTheme('light');
			editPageMode('light');
		}
	});

	const themeControl = (data) => {
		if (data == 'width') {
			const fullsizeSVG = `M21.434 11.975l8.602-8.549-0.028 4.846c-0.009 0.404 0.311 0.755 0.716 0.746l0.513-0.001c0.404-0.009 0.739-0.25 0.748-0.654l0.021-7.219c0-0.007-0.027-0.012-0.027-0.019l0.040-0.366c0.004-0.203-0.044-0.384-0.174-0.513-0.13-0.131-0.311-0.21-0.512-0.204l-0.366 0.009c-0.007 0-0.012 0.003-0.020 0.004l-7.172-0.032c-0.404 0.009-0.738 0.343-0.747 0.748l-0.001 0.513c0.061 0.476 0.436 0.755 0.84 0.746l4.726 0.013-8.572 8.52c-0.39 0.39-0.39 1.024 0 1.415s1.023 0.39 1.414 0zM10.597 20.025l-8.602 8.523 0.027-4.82c0.010-0.404-0.312-0.756-0.716-0.747l-0.544 0.001c-0.405 0.010-0.739 0.25-0.748 0.654l-0.021 7.219c0 0.007 0.028 0.011 0.028 0.019l-0.040 0.365c-0.005 0.203 0.043 0.385 0.174 0.514 0.129 0.131 0.311 0.21 0.512 0.205l0.366-0.009c0.007 0 0.012-0.003 0.020-0.003l7.203 0.032c0.404-0.010 0.738-0.344 0.748-0.748l0.001-0.514c-0.062-0.476-0.436-0.755-0.84-0.746l-4.726-0.012 8.571-8.518c0.39-0.39 0.39-1.023 0-1.414s-1.023-0.391-1.413-0zM32.007 30.855l-0.021-7.219c-0.009-0.404-0.343-0.645-0.747-0.654l-0.513-0.001c-0.404-0.009-0.725 0.343-0.716 0.747l0.028 4.846-8.602-8.549c-0.39-0.39-1.023-0.39-1.414 0s-0.39 1.023 0 1.414l8.571 8.518-4.726 0.012c-0.404-0.009-0.779 0.27-0.84 0.746l0.001 0.514c0.009 0.404 0.344 0.739 0.747 0.748l7.172-0.032c0.008 0 0.013 0.003 0.020 0.003l0.366 0.009c0.201 0.005 0.384-0.074 0.512-0.205 0.131-0.129 0.178-0.311 0.174-0.514l-0.040-0.365c0-0.008 0.027-0.012 0.027-0.019zM3.439 2.041l4.727-0.012c0.404 0.009 0.778-0.27 0.84-0.746l-0.001-0.513c-0.010-0.405-0.344-0.739-0.748-0.748l-7.204 0.031c-0.008-0.001-0.013-0.004-0.020-0.004l-0.366-0.009c-0.201-0.005-0.383 0.074-0.512 0.204-0.132 0.13-0.179 0.31-0.174 0.514l0.040 0.366c0 0.007-0.028 0.012-0.028 0.020l0.021 7.219c0.009 0.404 0.343 0.645 0.748 0.654l0.545 0.001c0.404 0.009 0.724-0.342 0.715-0.746l-0.028-4.819 8.602 8.523c0.39 0.39 1.024 0.39 1.414 0s0.39-1.024 0-1.415z`;
			const smallsizeSVG = `M11.975 10.838l-0.021-7.219c-0.009-0.404-0.344-0.644-0.748-0.654l-0.513-0.001c-0.405-0.009-0.725 0.343-0.716 0.747l0.028 4.851-8.321-8.242c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.285 8.207-4.721 0.012c-0.404-0.009-0.779 0.27-0.84 0.746l0.001 0.513c0.010 0.405 0.344 0.739 0.748 0.748l7.172-0.031c0.008 0.001 0.013 0.003 0.020 0.003l0.366 0.008c0.201 0.005 0.383-0.074 0.512-0.205 0.132-0.13 0.178-0.311 0.175-0.514l-0.040-0.366c0.001-0.007 0.027-0.012 0.027-0.019zM20.187 11.736c0.129 0.13 0.311 0.21 0.512 0.205l0.366-0.008c0.007 0 0.012-0.002 0.020-0.004l7.172 0.031c0.404-0.009 0.738-0.344 0.747-0.748l0.001-0.513c-0.061-0.476-0.436-0.755-0.84-0.746l-4.721-0.012 8.285-8.207c0.391-0.391 0.391-1.024 0-1.414s-1.023-0.391-1.414 0l-8.32 8.241 0.027-4.851c0.009-0.404-0.311-0.756-0.715-0.747l-0.513 0.001c-0.405 0.010-0.739 0.25-0.748 0.654l-0.021 7.219c0 0.007 0.027 0.012 0.027 0.020l-0.040 0.366c-0.005 0.203 0.043 0.384 0.174 0.514zM11.813 20.232c-0.13-0.131-0.311-0.21-0.512-0.205l-0.366 0.009c-0.007 0-0.012 0.003-0.020 0.003l-7.173-0.032c-0.404 0.009-0.738 0.343-0.748 0.747l-0.001 0.514c0.062 0.476 0.436 0.755 0.84 0.745l4.727 0.012-8.29 8.238c-0.391 0.39-0.391 1.023 0 1.414s1.024 0.39 1.414 0l8.321-8.268-0.028 4.878c-0.009 0.404 0.312 0.756 0.716 0.747l0.513-0.001c0.405-0.010 0.739-0.25 0.748-0.654l0.021-7.219c0-0.007-0.027-0.011-0.027-0.019l0.040-0.397c0.005-0.203-0.043-0.384-0.174-0.514zM23.439 22.028l4.727-0.012c0.404 0.009 0.779-0.27 0.84-0.745l-0.001-0.514c-0.010-0.404-0.344-0.739-0.748-0.748h-7.172c-0.008-0-0.013-0.003-0.020-0.003l-0.428-0.009c-0.201-0.006-0.384 0.136-0.512 0.267-0.131 0.13-0.178 0.311-0.174 0.514l0.040 0.366c0 0.008-0.027 0.012-0.027 0.019l0.021 7.219c0.009 0.404 0.343 0.644 0.748 0.654l0.544 0.001c0.404 0.009 0.725-0.343 0.715-0.747l-0.027-4.829 8.352 8.22c0.39 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414z`;
			const container = document.getElementById('content');
				container.classList.toggle('narrow');
			const changePath = document.getElementById('changeICOsize');
				changePath.setAttribute("d", (container.classList.contains('narrow')) ?  fullsizeSVG : smallsizeSVG);
		} else if (data == 'underline') {
			const containerA = document.getElementById('results');
			const verseElementsA = containerA.querySelectorAll('[id*="verse"]');
				verseElementsA.forEach(contained => {
					contained.classList.toggle('verse');
				});
			document.getElementById('changeUnderline').classList.toggle('textUnderline');
		} else if (data == 'icons') {
			const cont = document.getElementById('rawSvgIcons');
			cont.classList.toggle('hide');
		} else if (data == 'tooltip') {
			controls.tooltip = (controls.tooltip == false) ? true : false;
			const changeTooltip = document.getElementById('changeTooltipSVG');
			changeTooltip.className = (controls.tooltip) ? 'iconSVG bookSVG2' : 'iconSVG bookSVG1' ;
			submitSearch();
		}
	};

	const formatLayout = (resultsContainer, containers, grouped = {}) => {
		let count = 0;
		const check = resultsContainer.querySelector('[id^="gridLayout"]');
		if (!check) {
			containers.forEach(container => {
				const versionEl = container.querySelector('.bible-version');
				const versionText = versionEl?.innerText?.toLowerCase() || '';
				const foundVersion = bibles.find(b => new RegExp(`\\b${b.toLowerCase()}\\b`).test(versionText));
				if (foundVersion) {
					if (!grouped[foundVersion]) grouped[foundVersion] = [];
					grouped[foundVersion].push(container);
				}
			});
			const output = document.createElement('div');
			output.id = `gridLayout-${count}`;
			output.className = 'layoutGrid';
			Object.keys(grouped).forEach(v => {
				const group = grouped[v];
				if (group.length === 1) {
					const block = document.createElement('div');
					block.id = `griddedLayout-${count}`;
					block.className = 'layoutGridded';
					block.appendChild(group[0]);
					output.appendChild(block);
				} else {
					const row = document.createElement('div');
					row.id = `layoutRows-${count}`;
					group.forEach(c => row.appendChild(c));
					output.appendChild(row);
				}
				count++;
			});
			resultsContainer.innerHTML = '';
			resultsContainer.appendChild(output);
		} else if (!layoutEnabled) {
			const removing = resultsContainer.querySelectorAll('[id^="gridLayout"], [id^="layoutRows"], [id^="griddedLayout"]');
			removing.forEach(c => c.remove());
			containers.forEach(c => resultsContainer.appendChild(c));
		}
	};

	const formatBibleSections = () => {
		const resultsContainer = document.getElementById('results');
		const containers = [...resultsContainer.querySelectorAll('.verse-result')];
		formatLayout(resultsContainer, containers);
	}

	document.getElementById('changeLayout').addEventListener('click', () => {
		layoutEnabled = (layoutEnabled == false) ? true : false;
		formatBibleSections();
	});

	document.getElementById('selectableGrid').addEventListener('click', (e) => {
		const target = e.target.closest('.svgIcon');
		if (target) {
			const removeSelected = document.getElementById('selectableGrid').querySelectorAll('.selected');
			removeSelected.forEach((sel) => sel.classList.remove('selected'));
			const iconName = target.title.replace('Icon: ', '');
			target.classList.add('selected');
			socket.emit('selectedIcon', iconName);
		}
	});
	
	document.getElementById('rawSvgIcons').addEventListener('mouseleave', () => themeControl('icons'));

	document.getElementById('changeTheme').addEventListener('click', () => themeControl('width'));

	document.getElementById('changeUnderline').addEventListener('click', () => themeControl('underline'));

	const scrollToVerseTop = (scrollRatio) => {
		const results = document.getElementById('results');
		if (!results) return;
		const maxScroll = results.scrollHeight - results.clientHeight;
		const targetScroll = Math.round(scrollRatio * maxScroll);
		results.scrollTo({ top: targetScroll, behavior: 'instant' });
	};

	socket.on('scrolling', ({ scrollRatio, scrollEnabled=true }) => {
		const enabledScrolling = document.getElementById('scrollBox');
		if (enabledScrolling) {
			const checkBoxInput = document.getElementById('checkBoxInput');
			controls.scrolling = scrollEnabled;
			if (checkBoxInput) checkBoxInput.checked = scrollEnabled;
			enabledScrolling.style.display = scrollEnabled ? 'inline-block' : 'none';
		}
		if (typeof scrollRatio === 'number') scrollToVerseTop(scrollRatio);
	});

	applyTheme();

	if (isHost) {
		document.getElementById('changeIcon').addEventListener('click', () => themeControl('icons'));
		const dropdownContent = document.getElementById('dropdown-content');
		const bibleReferenceInput = document.getElementById('searchInput');
		const checkBoxInput = document.getElementById('checkBoxInput');
		const results = document.getElementById('results');
		const checkBox = document.getElementById('checkBox');

		document.getElementById('changeTooltip').addEventListener('click', () => themeControl('tooltip'));

		bibleReferenceInput?.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputRef = document.getElementById('searchInput').value.trim();
			if (!inputRef) return;
			const selected = Array.isArray(selectedVersions) && selectedVersions.length ? selectedVersions : null;
			const fallback = Array.isArray(versions) && versions.length ? versions : null;
			let useVersions;
			if (selected && (selected[0].toUpperCase() !== 'KJV' || selected.length > 1)) useVersions = selected;
			else if (fallback) useVersions = fallback;
			else {
				console.warn('No valid versions available');
				return;
			}
			socket.emit('searchBible', {
				ref: inputRef,
				session,
				version: useVersions.join(','),
				control: controls.tooltip
			});
		});

		const getMatches = (inputText, matches = []) => ((selectedVersion) => {
			chapters.forEach(v => {
				if (v.version.toUpperCase() === selectedVersion.toUpperCase()) {
					v.chapters.forEach(chap => {
						if (chap.toLowerCase().includes(inputText.toLowerCase())) matches.push({ version: v.version, chapter: chap });
					});
				}
			});
			return matches;
		})(selectedVersions[0]);

		const displaySuggestions = (matches, container) => {
		container.innerHTML = '';
		matches.forEach(match => {
			const suggestion = document.createElement('div');
			suggestion.className = 'suggestion';
			suggestion.textContent = match.chapter;
			suggestion.addEventListener('click', function () {
				document.getElementById('searchInput').value = `${this.textContent} `;
				document.getElementById('searchInput').focus();
				container.innerHTML = '';
			});
			container.appendChild(suggestion);
		});

		let countPress = -1;
		const suggestions = Array.from(document.getElementsByClassName('suggestion'));
		let count = matches.length;
		bibleReferenceInput.addEventListener('keydown', (event) => {
				if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && count > 0) {
					if (event.key === 'ArrowDown') countPress = (countPress + 1) % count;
					if (event.key === 'ArrowUp') countPress = (countPress - 1 + count) % count;
					suggestions.forEach((element, index) => {
						element.classList.remove('selected');
						if (index === countPress)  element.classList.add('selected');
					});
				}
				if (event.key === 'Enter' && countPress < count) suggestions[countPress].click();
			});
		};

		const menu = 			document.querySelector('.dropDownMenu');
		const target = 			document.getElementById('toggleHighlight');
		const container = 		document.getElementById('highlightExample');
		const toggleContainer = document.getElementById('toggleHighlightContainer');
		const toggleBgBtn = 	document.getElementById('toggleBg');
		const toggleTxtBtn = 	document.getElementById('toggleTxt');
		const grid = 			document.getElementById('colorGrid');
		const colorModeBtns = 	document.querySelectorAll('#colorModeToggle button');

		let currentIndex = 		0;
		let currentMode = 		'bg';

		menu?.addEventListener('touchstart', () => menu.classList.add('touchActive'), { passive: false });
		menu?.addEventListener('touchend', () => setTimeout(() => menu.classList.remove('touchActive'), 300), { passive: false });

		['mouseleave', 'touchend'].forEach(evt => 
			target?.addEventListener(evt, () => target.classList.add('hide'))
		);

		const htmlColors = [
			"Aqua", "Aquamarine", "Beige", "Bisque", "Black", "BlanchedAlmond",
			"Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
			"Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
			"DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
			"DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick",
			"ForestGreen", "Fuchsia", "Gainsboro", "Gold", "GoldenRod", "Gray", "Green",
			"GreenYellow", "HotPink", "IndianRed", "Indigo", "Khaki", "Lavender",
			"LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray",
			"LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
			"LightYellow", "Lime", "LimeGreen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue",
			"MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
			"MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace",
			"Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
			"PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown",
			"RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "Sienna", "Silver", "SkyBlue",
			"SlateBlue", "SlateGray", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
			"Violet", "Wheat", "Yellow", "YellowGreen"
		];
		const darkTheme = [
			"AliceBlue", "AntiqueWhite",  "Azure", "White", "WhiteSmoke", "FloralWhite", "GhostWhite", "HoneyDew", "Snow", 
			"LavenderBlush", "SeaShell", "Ivory", "Linen"
		];

		const renderColorGrid = () => {
			grid.innerHTML = '';
			const isDark = document.body.classList.contains('dark-mode');
			const newColors = isDark ? [...htmlColors, ...darkTheme] : htmlColors;
			const visibleColors = newColors.slice(currentIndex, currentIndex + 9);

			visibleColors.forEach(color => {
				const square = document.createElement('div');
				square.className = 'colorSquare';
				square.style.backgroundColor = color;
				square.title = color;
				square.addEventListener('click', () => applyHighlight(color));
				grid.appendChild(square);
			});
		};

		toggleContainer?.addEventListener('click', () => {
			target.classList.toggle('hide');
			renderColorGrid();
		});

		const grabHighlighting = ({ bg, txt, send }) => {
			if (send) socket.emit('highlighted', { bg, txt, send });
		};

		const applyHighlight = (color) => {
			if (currentMode === 'bg') container.style.backgroundColor = color;
			else container.style.color = color;
			container.style.borderColor = 'red';
			document.getElementById('coloredDot').style.color = 'red';

			grabHighlighting({
				bg: currentMode === 'bg' ? color : container.style.backgroundColor,
				txt: currentMode === 'txt' ? color : container.style.color,
				send: true //may change to a button or enter event
			});
		};

		[toggleBgBtn, toggleTxtBtn].forEach(btn => {
			btn?.addEventListener('click', () => {
				currentMode = btn.id === 'toggleBg' ? 'bg' : 'txt';
				setActiveToggle(btn.id);
			});
		});

		const setActiveToggle = (activeId) => {
			colorModeBtns.forEach(btn => btn.classList.remove('active'));
			document.getElementById(activeId)?.classList.add('active');
		};

		const handleScrolling = (skip = null) => {
			const now = Date.now();
			if (now - lastEmit < 50) return;
			lastEmit = now;
			if (skip !== null) {
				socket.emit('scrolling', { scrollEnabled: skip });
				return;
			}
			if (!controls.scrolling) return;
			const scrollTop = results.scrollTop;
			const scrollHeight = results.scrollHeight;
			const clientHeight = results.clientHeight;
			const scrollRatio = scrollTop / (scrollHeight - clientHeight);
			socket.emit('scrolling', {
				scrollTop,
				scrollRatio,
				maxScroll: scrollHeight - clientHeight,
				scrollEnabled: controls.scrolling
			});
		};

		checkBox.addEventListener('click', () => {
			const isChecked = checkBoxInput.checked;
			controls.scrolling = isChecked;
			handleScrolling(isChecked);
		});

		results.addEventListener('scroll', () => handleScrolling());
		results.addEventListener('wheel', () => handleScrolling());

		window.addEventListener('keydown', (e) => {
			const whatIf = document.getElementById('toggleHighlight').classList;
			if (e.key === 'ArrowDown' || e.key === 'ArrowUp') handleScrolling();
			if (!whatIf.contains('hide') && e.key === 'Tab') {
				e.preventDefault();
				currentIndex = (currentIndex + 9) % htmlColors.length;
				renderColorGrid();
			}
		});

		document.getElementById('smalldesc').addEventListener('click', () => {
			currentIndex = (currentIndex + 9) % htmlColors.length;
			renderColorGrid();
		});

		const handleInput = (event) => ((input) => {
			if (debounceTimeout != null) {
				clearTimeout(debounceTimeout);
				debounceTimeout = null;
			}
			if ((input.startsWith('#') || input.startsWith('$')) && input.trim() !== '') debounceTimeout = setTimeout(() => submitSearch(input), 2000);
			else if (input.trim() !== '') {
				const suggestionsContainer = document.getElementById('suggestions');
				if (suggestionsContainer.innerHTML != '') suggestionsContainer.innerHTML = '';
				if (input.length >= 3) {
					const matches = getMatches(input);
					displaySuggestions(matches, suggestionsContainer);
				}
				submitSearch(input);
			} else {
				socket.emit('clearResults', session);
				return;
			}
		})(event.target.value);

		const handleEnter = (event) => (event.key === 'Enter') && ((input) => {
			event.preventDefault();;
			if (debounceTimeout != null) {
				clearTimeout(debounceTimeout);
				debounceTimeout = null;
			}
			if (input.trim() !== '') submitSearch(input);
		})(event.target.value);

		function submitSearch(data) {
			const inputRef = document.getElementById('searchInput').value.trim();
			if (!inputRef || inputRef.length <= 0) return;
			const selected = Array.isArray(selectedVersions) && selectedVersions.length ? selectedVersions : null;
			const fallback = Array.isArray(versions) && versions.length ? versions : null;
			let useVersions;
			if (selected && (selected[0].toUpperCase() !== 'KJV' || selected.length > 1)) useVersions = selected;
			else if (fallback) useVersions = fallback;
			else {
				console.warn('No valid versions available');
				return; 
			}
			if (inputRef.length >= 1) socket.emit('searchBible', { ref: inputRef || data, session, versions: useVersions.join(','), changeLayout: layoutEnabled, control: controls.tooltip });
		}

		const updateURL = () => ((url) => {
			url.searchParams.set('bible', selectedVersions.join(','));
			window.history.pushState({}, '', url);
			submitSearch();
		})(new URL(window.location));

		bibles.forEach(version => {
			const a = document.createElement('a');
			const fullName = getFullName(version);
			if (!fullName) return;
			a.textContent = fullName;
			a.dataset.version = version;
			if (initialSelectedBibles.includes(version)) {
				a.classList.add('selected');
				a.title = fullName;
				a.dataset.fullname = fullName;
				selectedVersions.push(version);
			}
			a.addEventListener('click', (event) => {
				if (selectedVersions.includes(version)) {
					selectedVersions = selectedVersions.filter(v => v !== version);
					a.classList.remove('selected');
				} else {
					selectedVersions.push(version);
					a.classList.add('selected');
				}
				updateURL();
				handleInput();
			});
			dropdownContent.appendChild(a);
		});

		bibleReferenceInput.addEventListener('input', handleInput);
		bibleReferenceInput.addEventListener('keypress', handleEnter);
	}

	const contain = document.getElementById('results');

	/*
	contain.addEventListener('mouseover', e => {
		const target = e.target.closest('[data-tooltip]');
		if (target) showTooltip(target);
	});
	contain.addEventListener('mouseleave', hideTooltip);

	contain.addEventListener('touchstart', e => {
		const target = e.target.closest('[data-tooltip]');
		if (target) showTooltip(target);
	}, { passive: true });

	contain.addEventListener('touchmove', e => {
		const target = e.target.closest('[data-tooltip]');
		if (target) {
			e.preventDefault();
			showTooltip(target);
		}
	}, { passive: true });

	contain.addEventListener('touchend', hideTooltip, { passive: true });
	contain.addEventListener('touchcancel', hideTooltip, { passive: true });
	*/

	let activeTooltipTarget = null;
	let touchTimeout;

	// Desktop hover
	contain.addEventListener('mouseover', e => {
		const target = e.target.closest('[data-tooltip]');
		if (target) showTooltip(target);
	});
	contain.addEventListener('mouseleave', hideTooltip);

	// Mobile touch
	contain.addEventListener('touchstart', e => {
		const target = e.target.closest('[data-tooltip]');
		if (target) {
			activeTooltipTarget = target;
			clearTimeout(touchTimeout);
			showTooltip(target);
		}
	}, { passive: true });

	contain.addEventListener('touchend', e => {
		// Delay hiding to allow interaction
		touchTimeout = setTimeout(() => {
			hideTooltip();
			activeTooltipTarget = null;
		}, 3000); // Tooltip stays visible for 3 seconds
	}, { passive: true });

	contain.addEventListener('touchcancel', () => {
		hideTooltip();
		activeTooltipTarget = null;
	}, { passive: true });

	// Prevent scroll-triggered tooltips
	contain.addEventListener('touchmove', e => {
		if (activeTooltipTarget) {
			hideTooltip();
			activeTooltipTarget = null;
		}
	}, { passive: true });

	/*
	let mainMute = false;
	let pushToTalkStream;
	let pushToTalkStatus = false;
	const pushToTalk = document.getElementById('push-to-talk');
	
	const initializePushToTalk = () => {
			let audioTrack;
			let isTalking = false;
			let isKeyHeld = false;
			const startTalking = () => {
				if (!isTalking && audioTrack && !elements.pushToTalk.classList.contains('hidden')) {
					audioTrack.enabled = true;
					elements.pushToTalk.classList.add('active');
					elements.pushToTalk.textContent = "Talking...";
					socket.emit('push to talk', { status: 'start' });
					isTalking = true;
				}
			};
			const stopTalking = () => {
				if (isTalking && audioTrack && !elements.pushToTalk.classList.contains('hidden')) {
					audioTrack.enabled = false;
					elements.pushToTalk.classList.remove('active');
					elements.pushToTalk.textContent = "Push to Talk";
					socket.emit('push to talk', { status: 'stop' });
					isTalking = false;
				}
			};
			const handleKeyDown = (event) => {
				if ((event.key === 'CapsLock' || event.key === 'Alt') && !isKeyHeld) {
					startTalking();
					isKeyHeld = true;
				}
			};
			const handleKeyUp = (event) => {
				if ((event.key === 'CapsLock' || event.key === 'Alt') && isKeyHeld) {
					stopTalking();
					isKeyHeld = false;
				}
			};
			if (localStream) {
				audioTrack = localStream.getAudioTracks()[0];
				audioTrack.enabled = false;
				elements.pushToTalk.classList.remove('hidden');
				elements.pushToTalk.addEventListener('mousedown', startTalking);
				elements.pushToTalk.addEventListener('mouseup', stopTalking);
				elements.pushToTalk.addEventListener('touchstart', startTalking);
				elements.pushToTalk.addEventListener('touchend', stopTalking);
				document.addEventListener('keydown', handleKeyDown);
				document.addEventListener('keyup', handleKeyUp);
			}
	};
		
		const handlePushToTalkMessage = (data) => {
			const videoElement = document.querySelector(`video[data-uuid="${data.speaker}"]`);
			if (videoElement) {
				const videoHighlight = document.querySelector(`[data-id="streamer-${data.speaker}"]`);
				const muteButton = document.querySelector(`[data-id="mute-${data.speaker}"]`);
				const audioTracks = videoElement.srcObject.getAudioTracks();
				if (data.status === 'start') {
					if (mainMute) {
						audioTracks.forEach(track => track.enabled = true);
						videoElement.muted = false;
					}
					if (muteButton && !muteButton.classList.contains('speaker2waves')) {
						muteButton.classList.remove('nospeaker');
						muteButton.classList.add('speaker2waves');
					}
					if (videoHighlight) elements.mainVolumeButton.style.backgroundColor = '#e67e00';
					steamHighlight(audioTracks, videoHighlight); // possibly correct or incorrect with videoHighlight needing to be replaced with videoElement
				} else if (data.status === 'stop') {
					if (mainMute) {
						audioTracks.forEach(track => track.enabled = false);
						videoElement.muted = true;
					}
					if (muteButton && !muteButton.classList.contains('nospeaker')) {
						muteButton.classList.remove('speaker2waves');
						muteButton.classList.add('nospeaker');
					}
					elements.mainVolumeButton.style.backgroundColor = '#ff8c00';
					if (videoHighlight) videoHighlight.classList.remove('innerOutterShadowsVol0', 'innerOutterShadowsVol2', 'innerOutterShadowsVol4');
				}
			}
	};
		
	const steamHighlight = (audioTracks, videoHighlight) => {
			if (audioTracks.length > 0 && videoHighlight) {
				const audioContext = new AudioContext();
				const mediaStreamSource = audioContext.createMediaStreamSource(new MediaStream(audioTracks));
				const analyser = audioContext.createAnalyser();
				analyser.fftSize = 256;
				mediaStreamSource.connect(analyser);
				const dataArray = new Uint8Array(analyser.frequencyBinCount);
				function updateVolume() {
					analyser.getByteFrequencyData(dataArray);
					let sum = 0;
					for (let i = 0; i < dataArray.length; i++) sum += dataArray[i] * dataArray[i];
					const rms = Math.sqrt(sum / dataArray.length);
					const threshold = 10;
					videoHighlight.classList.remove('innerOutterShadowsVol0', 'innerOutterShadowsVol2', 'innerOutterShadowsVol4');
					if (rms > threshold) {
						if (rms > threshold * 2) videoHighlight.classList.add('innerOutterShadowsVol4');
						else videoHighlight.classList.add('innerOutterShadowsVol2');
					} else videoHighlight.classList.add('innerOutterShadowsVol0');
					requestAnimationFrame(updateVolume);
				}
				updateVolume();
			}
	};	

	socket.on('push to talk', (data) => handlePushToTalkMessage(data));

	
	socket.on('muted', (data) => {
				if (data.muted && (data.userId === socket.id)) {
					dataHandling.displayNotification(`You were muted by ${data.username}.`);
					const audioTrack = localStream.getAudioTracks()[0];
					if (audioTrack) {
						audioTrack.enabled = false;
						elements.pushToTalk.classList.remove('active');
						elements.pushToTalk.textContent = "Push to Talk";
						socket.emit('push to talk', { status: 'stop' });
					}
				}
				else dataHandling.displayNotification(`${data.userTarget} was muted by ${data.username}.`);
	});
	*/
});