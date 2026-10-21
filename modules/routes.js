/**  ██╗██╗                                                                 ██╗██╗
 *   ██║╚═╝  ████████╗ ██████    ██████╗UOTES  ██████╗ ██████╗ ███╗   ███╗  ╚═╝██║
 *   ██║     ╚══██╔══╝ ██╔═██╗I ██╔═══██╗     ██╔════╝██╔═══██╗████╗ ████║     ██║
 *   ██║        ██║H   █████╔╝B ██║   ██║     ██║     ██║   ██║██╔████╔██║     ██║
 *   ██║        ██║E   ██║ ██╗L ██║  █ █║     ██║     ██║   ██║██║╚██╔╝██║     ██║
 *   ██║        ██║    ██████║E ╚█████ ██╗ ██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║     ██║
 *   ██║██╗     ╚═╝      ╚═══╝S  ╚═══════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ██╗██║
 *   ╚═╝╚═╝                                                                 ╚═╝╚═╝
 * TheBiblesQuotes Project
 * © 2025 BadNintendo - Routes Module
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
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');

const {
	chapters,
	metadata,
	formatOutput,
	logTimestamp,
	getDailyVerse,
	parseReference,
	formatVerseText,
	generateContent,
	checkTokenStorage,
	loadPrayerSession,
	getDailyVerseReference,
	readPrayers,
	submitPrayers,
	getRemainingBooks,
	addTokenStorage,
	returnTokenLogs,
	getBaseDomain,
	getVerseText,
	biblesArray,
	allVersions,
	htmlColors,
	keepSearch,
	checkLive,
	capsFirst,
	bibles
} = require('./misc');

const {
	requireSubdomain,
	validateKeyword,
	validateSearch,
	csrfValidation,
	validateParams,
	sanitizeInput,
	skipSubDomain,
	liveSessions,
	setupSession,
	limiterAPI,
	botSkipper,
	QPRx2025
} = require('./protection');

const {
	validation,
	rawSvgIcons,
	returnBuiltSessions,
	checkAllKeepSession
 } = require('./middleware');

const defined = new Set();

const routes = (app, dailyRef, lastLoadedDay = null) => {
	function getTodayKey() { return new Date().toISOString().slice(0, 10); }
	const indexingPath = path.join(__dirname, '../data', 'indexing.json');
	const jsonIndex = JSON.parse(fs.readFileSync(indexingPath, 'utf8'));
	const objBibles = Object.keys(bibles);

	const defineRoute = (paths) => {
		const routePaths = Array.isArray(paths) ? paths : [paths];
		routePaths.forEach(p => {
			if (!defined.has(p)) defined.add(p);
		});
	};

	const hasQueryKeys = (req) => {
		for (const k in req.query) if ({}.hasOwnProperty.call(req.query, k)) return true;
		return false;
	};

	const uniqueKeep = {
		css: [],
		images: [],
		javascript: []
	};

	for (const [type, arrayOf] of Object.entries(uniqueKeep)) {
		const dirPath = path.join(__dirname, '../public', type);
		if (!fs.existsSync(dirPath)) continue;
		fs.readdirSync(dirPath).forEach(file => {
			uniqueKeep[type].push(`/${type}/${file}`);
		});
	}

	defineRoute(['/chapters.xsl', '/style.xsl']);
	defineRoute(uniqueKeep.css);
	defineRoute(uniqueKeep.images);
	defineRoute(uniqueKeep.javascript);
	biblesArray.forEach(b => {
		defineRoute(`/fullbible/${b.toLowerCase()}/`);
		defineRoute(`/bible/${b.toLowerCase()}/`);
		defineRoute(`/fullbible/${b.toUpperCase()}/`);
		defineRoute(`/bible/${b.toUpperCase()}/`);
	});

	defineRoute('/');
	app.get('/', skipSubDomain('index'), validation.index, (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		let versions = 		bibles['kjv'],
			darkMode = 		false,
			zoomLevel = 	100,
			highLight = 	'DarkGray,White',
			references = 	[],
			langType = 		'en',
			token =  		false,
			isTokenValid = 	false,
			storedToken = 	false,
			defaultSize = 	'small';
		if (hasQueryKeys(req)) {
			versions = 		(req.query.bible ? req.query.bible.split(',').map(v => v.toLowerCase()) : objBibles);
			darkMode = 		(req.query.mode === 'dark');
			zoomLevel = 	(req.query.zoom || 100);
			highLight = 	(req.query.highlight || 'DarkGray,White');
			references = 	(req.query.reference ? req.query.reference.split(',').map(ref => ref.trim()) : []);
			langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
			token = 		(req.query.token || false);
			storedToken = 	(req.query.hash || false);
			defaultSize = 	(req.query.size == 'full' ? 'full' : 'small');
			if (token && storedToken) {
				isTokenValid = QPRx2025.customHash(token, process.env.HASHUSERSALT || '10', storedToken);
				if (isTokenValid != false && checkTokenStorage(isTokenValid)) token = isTokenValid;
			} else if (storedToken && checkTokenStorage(storedToken)) token = storedToken;
		}
		return res.render('index', { token, bibles: biblesArray, defaultSize, langType, dailyVerse: getDailyVerse(), chapters: allVersions, versions, darkMode, zoomLevel, references, highLight });
	});

	/** Handles /live route with optional session and host parameters,
	 * applies validation, security checks, and prepares data for response. */
	defineRoute(['/directory', '/live/directory']);
	app.get(['/directory', '/live/directory'], // need to compare host to db host when reset
		requireSubdomain('live'),
		validation.sessions, (req, res) => {
			if (!defined.has(req.path)) defined.add(req.path);
			if (!req.headers['user-agent'] && !hasQueryKeys(req)) {
				return res.status(403).send('Access denied');
			}
			let darkMode = 		false,
				langType = 		'en',
				hostedAlready = false,
				hostedData = 	false;
			if (hasQueryKeys(req)) {
				darkMode = 		(req.query.mode === 'dark');
				langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
			}
			const doubleDown = checkLive(req);
			if (doubleDown != false) {
					hostedAlready = true;
					hostedData = doubleDown;
			} else if (!hostedData) {
				const ifHosted = checkAllKeepSession();
				if (ifHosted) Object.keys(ifHosted).forEach((c) => {
					if (ifHosted[c]?.uuid && ifHosted[c]?.uuid == req.session?.uuid) {
						hostedAlready = true;
						hostedData = (!doubleDown) ? ifHosted[c] : doubleDown;
					}
				});
			}
			const blah = returnBuiltSessions(hostedData);
			return res.render('sessions', { langType, darkMode, pages: blah, hostedAlready });
		}
	);

	defineRoute('/live');
	app.get(['/', '/live', '/live/:session', '/live/:session/:host'],
		botSkipper,
		csrfValidation,
		liveSessions,
		setupSession,
		requireSubdomain('live'),
		validation.live,
		(req, res) => {
			if (!defined.has(req.path)) defined.add(req.path);
			if (!req.headers['user-agent'] && !hasQueryKeys(req)) {
				return res.status(403).send('Access denied');
			}
			QPRx2025.init(Math.floor(Math.random() * 9e4) + 1e4);
			const { uuid = false, sessionId, hasHostFlag, check } = req;
			let versions = 		objBibles,
				darkMode = 		false,
				highLight = 	'DarkGray,White',
				langType = 		'en',
				defaultSize = 	'small'
				queryParams = 	(!hasHostFlag && !check) ? '' : `?session=${sessionId}`,
				isHost = 		false;
			if (hasQueryKeys(req)) {
				versions = 		(req.query.bible ? req.query.bible.split(',').map(v => v.toLowerCase()) : objBibles); // objBibles as a replacement for false case
				darkMode = 		(req.query.mode === 'dark');
				highLight = 	(req.query.highlight || 'DarkGray,White');
				langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
				defaultSize = 	(req.query.size == 'full' ? 'full' : 'small');
			}
			if (req.session.hosting) {
				isHost = true;
				queryParams += '&host';
			}
			if (darkMode) queryParams += (!hasHostFlag && !check) ? '?mode=dark' : '&mode=dark';
			if (langType !== 'en') queryParams += (!hasHostFlag && !check) ? '' : '&lang';
			if (!hasHostFlag && !check) return res.redirect(`https://live.${getBaseDomain(req.hostname)}/directory${queryParams}`);
			const url = `https://${getBaseDomain(req.hostname)}/live${queryParams}`;
			console.log(`\x1b[31mRendered live with \x1b[36mversions: ${versions.join(', ')}, session: ${sessionId}, host: ${isHost}, UUID: ${uuid}\x1b[0m`);
			const objLoad = { rawSvgIcons, bibles: biblesArray, defaultSize, url, langType, highLight, darkMode, chapters: allVersions, versions, session: sessionId, host: isHost, uuid };
			//res.send('<center>Hosting Sessions being Repaired, Flat Tire!</center>');
			return res.render('live', objLoad);
		}
	);

	defineRoute(['/search', '/api']);
	app.get(['/search', '/api'], limiterAPI, validation.search, (req, res) => { // if same IP request slow by limitation with rateLimit 
		if (!hasQueryKeys(req)) return res.status(400).send('No query parameters supplied.');
		let ref = req.query.ref, token = req.query.token || null, control = (req.query.tooltip == 'false') ? false : true || false;
		if (!ref && !validateParams({ ref }, { ref: validateSearch })) return;
		else ref = sanitizeInput(ref);
		const format = req.query.format || 'json';
		const web = req.query.web === '' || false;
		const results = [];
		const versions = req.query.bible ? req.query.bible.split(',').map(v => v.toLowerCase()) : ['kjv'];
		if (/^[#$]/.test(ref)) {
			if (!validateParams({ ref }, { ref: validateKeyword })) return;
			const prefixType = ref.charAt(0);
			const searchTerm = ref.slice(1).toLowerCase();
			const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const trace = {
				type: prefixType === '$' ? 'keyword' : 'tag',
				query: searchTerm,
				bibleVersions: versions
			};
			let regex;
			if (prefixType === '$') regex = new RegExp(`\\b${escapeRegex(searchTerm)}\\b`, 'i');
			else if (prefixType === '#') regex = new RegExp(`${escapeRegex(searchTerm)}`, 'i');
			versions.forEach(version => {
				const bible = bibles[version];
				if (bible && bible.verses) {
					bible.verses.forEach(v => {
						if (regex.test(v.text.toLowerCase())) {
							results.push({
								version,
								book: v.book_name,
								chapter: v.chapter,
								verse: v.verse,
								text: formatVerseText(v.text, version, web, control),
								meta: trace,
								html: `<div class="result ${trace.type}-result">
									<div id="verse-${v.chapter}-${v.verse}" class="verse">
										<strong>${v.chapter}:${v.verse}</strong> ${formatVerseText(v.text, version, web, control)}
									</div>
								</div>`
							});
						}
					});
				}
			});
		} else {
			const references = parseReference(ref);
			versions.forEach(version => {
				references.forEach(({ book, chapter, verse }) => {
					const verseText = getVerseText(web, version, book, chapter, verse, format, control);
					if (verseText) {
						const text = (format === 'default') ? verseText : verseText[0].text;
						let additional = {
							version,
							book,
							chapter,
							verse,
							text: text,
							html: `<div class="result">${text}</div>`,

						};
						if (format !== 'default') additional = { ...additional, additional: verseText[0].buildarray };
						results.push(additional);
					}
				});
			});
		}
		if ((results.length >= 1 && token && token != null && token != "false") && checkTokenStorage(token)) keepSearch(token, ref);
		if (format === 'json' || format === 'default') {
			res.set('Content-Type', 'application/json');
			res.set('X-Requested-With', 'XMLHttpRequest');
			return res.json(results);
		} else {
			function decodeJSON(type, data) {
				let onlyOnce = new Set();
				let foolsGold = '';
				for (const key in data) {
					const parsed = data[key];
					for (const ever of Object.values(parsed)) {
						if (onlyOnce.has(ever.name)) continue;
						else onlyOnce.add(ever.name);
						if (type === 'txt' || type === 'html' || type === 'csv' || type === 'yaml') {
							foolsGold += control
								? `(name: ${ever.name}, strongs: ${ever.strongs}, vines: ${ever.vines}, type: strongvinestranslation) `
								: `(name: ${ever.name}, translatedEnglish: ${ever.translatedEnglish}, hebrewOriginal: ${ever.hebrewOriginal}, greekOriginal: ${ever.greekOriginal}, greekMeaning: ${ever.greekMeaning}, greekAdditional: ${ever.greekAdditional}, foundin: ${ever.foundin}, type: fulltranslation) `;
						} else if (type === 'xml') {
							foolsGold += control
								? `<name>${ever.name}</name><strongs>${ever.strongs}</strongs><vines>${ever.vines}</vines><type>strongvinestranslation</type>`
								: `<name>${ever.name}</name><translatedEnglish>${ever.translatedEnglish}</translatedEnglish><hebrewOriginal>${ever.hebrewOriginal}</hebrewOriginal><greekOriginal>${ever.greekOriginal}</greekOriginal><greekMeaning>${ever.greekMeaning}</greekMeaning><greekAdditional>${ever.greekAdditional}</greekAdditional><foundin>${ever.foundin}</foundin><type>fulltranslation</type>`;
						} else if (type === 'tsv') {
							foolsGold += control
								? `name: ${ever.name}, strongs: ${ever.strongs}, vines: ${ever.vines}, type: strongvinestranslation\n`
								: `name: ${ever.name}, translatedEnglish: ${ever.translatedEnglish}, hebrewOriginal: ${ever.hebrewOriginal}, greekOriginal: ${ever.greekOriginal}, greekMeaning: ${ever.greekMeaning}, greekAdditional: ${ever.greekAdditional}, foundin: ${ever.foundin}, type: fulltranslation\n`;
						}
					}
				}
				return foolsGold;
			}
			if (format === 'xml') {
				let xmlResponse = `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="style.xsl"?>\n<verses>\n`;
				results.forEach(r => {
					xmlResponse += `  <${r.version}>\n`;
					xmlResponse += `    <version>${r.version}</version>\n`;
					xmlResponse += `    <book>${r.book}</book>\n`;
					xmlResponse += `    <chapter>${r.chapter}</chapter>\n`;
					if (r.verse !== undefined) xmlResponse += `    <verse>${r.verse}</verse>\n`;
					xmlResponse += `    <text>${r.text}</text>\n`;
					if (r.additional !== undefined) {
						const additionalText = decodeJSON(format, r.additional);
						xmlResponse += `    <additional>${additionalText}</additional>\n`;
					}
					xmlResponse += `  </${r.version}>\n`;
				});
				xmlResponse += `</verses>`;
				res.set('Content-Type', 'application/xml');
				return res.send(xmlResponse);
			} else if (format === 'txt') {
				let txtResponse = '';
				results.map(r => {
					r.additional = (r.additional == undefined) ? '' : ` - ${decodeJSON(format, r.additional)}`;
					txtResponse += (r.verse != undefined) ?
						`${r.book} ${r.chapter}:${r.verse} - ${r.text}${r.additional}\n` :
						`${r.book} ${r.chapter} - ${r.text}${r.additional}\n`;
					
				}).join('\n');
				res.set('Content-Type', 'text/plain');
				return res.send(txtResponse);
			} else if (format === 'html') {
				let htmlResponse = `<html><body><h2>Search Results</h2><ul>`;
				results.forEach(r => {
					r.additional = (r.additional == undefined) ? '' : `	<li>${decodeJSON(format, r.additional)}</li>`;
					if (r.verse != undefined) htmlResponse += `<li>${r.book} ${r.chapter}:${r.verse} - ${r.text}</li>${r.additional}`;
					else htmlResponse += `	<li>${r.book} ${r.chapter} - ${r.text}</li>${r.additional}`;
				});
				htmlResponse += `</ul></body></html>`;
				res.set('Content-Type', 'text/html');
				return res.send(htmlResponse);
			} else if (format === 'csv') {
				let once = false, extra = '', csvResponse = '';
				results.forEach(r => {
					if (!once) {
						once = true;
						extra = (r.additional !== undefined) ? ',"Additional"' : '';
						csvResponse = (r.verse != undefined) ? 
							`"Version","Book","Chapter","Verse","Text"${extra}\n` : 
							`"Version","Book","Chapter","Text"${extra}\n`;
					}
					r.additional = (r.additional == undefined) ? '' : `,"${decodeJSON(format, r.additional)}"`;
					if (r.verse != undefined) csvResponse += `"${r.version}","${r.book}","${r.chapter}","${r.verse}","${r.text}"${r.additional}\n`;
					else csvResponse += `"${r.version}","${r.book}","${r.chapter}","${r.text}"${r.additional}\n`;
				});
				res.set('Content-Type', 'text/csv');
				return res.send(csvResponse);
			} else if (format === 'yaml') {
				let yamlResponse = `verses:\n`;
				results.map(r => {
					r.additional = (r.additional == undefined) ? '' : `		additional: "${decodeJSON(format, r.additional)}"\n`;
					yamlResponse += (r.verse != undefined) ? 
						`	version: ${r.version}\n		book: ${r.book}\n		chapter: ${r.chapter}\n		verse: ${r.verse}\n		text: "${r.text}"\n${r.additional}` :
						`	version: ${r.version}\n		book: ${r.book}\n		chapter: ${r.chapter}\n		text: "${r.text}"\n${r.additional}`;
				}).join('\n');
				res.set('Content-Type', 'text/yaml');
				return res.send(yamlResponse);
			} else if (format === 'tsv') {
				let once = false, extra = '', tsvResponse = '';
				results.map(r => { 
					if (!once) {
						once = true;
						extra = (r.additional !== undefined) ? '\tAdditional' : '';
						tsvResponse = (r.verse != undefined) ? `Version\tBook\tChapter\tVerse\tText${extra}\n` : `Version\tBook\tChapter\tText${extra}\n`;
					}
					r.verse = (r.verse != undefined) ? `\t${r.verse}` : '';
					r.additional = (r.additional == undefined) ? '' : `\t${decodeJSON(format, r.additional)}`;
					tsvResponse += `${r.version}\t${r.book}\t${r.chapter}${r.verse}\t${r.text}${r.additional}`;
				}).join('\n');
				res.set('Content-Type', 'text/tab-separated-values');
				return res.send(tsvResponse);
			} else {
				return res.status(400).json({ error: 'Invalid format requested' });
			}
		}
	});

	defineRoute(['/bible/', '/fullbible/']);
	app.get(['/bible/:version', '/fullbible/:version', '/bible/', '/fullbible/'], validation.bible, (req, res) => {
		let darkMode = 		false,
			highLight = 	'DarkGray,White',
			langType = 		'en'
			version = 		'kjv',
			startChapter =  1;
		if (hasQueryKeys(req)) {
			darkMode = 		(req.query.mode === 'dark');
			highLight = 	(req.query.highlight || 'DarkGray,White');
			langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
			version = 		((req.params.version) ? req.params.version.toLowerCase() : 'kjv');
			startChapter = 	(parseInt(req.query.chapter, 10) || 1);
		}
		const bible = bibles[version];
		if (!bible) return res.status(404).send('Bible version not found');
		const book = (hasQueryKeys(req) ? (req.query.book ? req.query.book.toLowerCase() : (bible.verses ? bible.verses?.[0].book_name.toLowerCase() : bible.books?.[0].name.toLowerCase())) : bible.books?.[0].name.toLowerCase()) || 'genesis';
		const { content, nextChapter } = generateContent(bible, book, startChapter, 1);
		logTimestamp(version.toUpperCase());
		return res.render('fullbible', {
			langType,
			version: version.toUpperCase(),
			content,
			book: capsFirst(book),
			startChapter,
			chapter: nextChapter,
			darkMode,
			highLight,
			chapters
		});
	});

	defineRoute('/loadMore');
	app.get('/loadMore', validation.loadmore, (req, res) => {
		const version = req.query.version?.toLowerCase();
		const bible = bibles[version];
		if (!bible) return res.status(404).send('Bible version not found');
		const requestedBook = req.query.book?.toLowerCase();
		if (!requestedBook) return res.status(400).send('Book name is required');
		let startChapter = parseInt(req.query.chapter, 10);
		if (isNaN(startChapter)) startChapter = 1;
		const maxChapters = 2;
		let content = '';
		let currentChapter = startChapter;
		let chapterCount = 0;
		let totalChaptersInBook = 0;
		const getChaptersArray = () => {
			if (bible.verses) {
				const grouped = bible.verses.reduce((acc, v) => {
					if (v.book_name.toLowerCase() === requestedBook) {
						acc[v.chapter] = acc[v.chapter] || [];
						acc[v.chapter].push(v);
					}
					return acc;
				}, {});
				totalChaptersInBook = Object.keys(grouped).length;
				return Object.keys(grouped).map(ch => ({
					chapter: parseInt(ch, 10),
					verses: grouped[ch],
				}));
			} else if (bible.books) {
				const bookData = bible.books.find(b => b.name.toLowerCase() === requestedBook);
				if (bookData && bookData.chapters) {
					totalChaptersInBook = bookData.chapters.length;
					return bookData.chapters;
				}
			}
			return [];
		};
		const chaptersArray = getChaptersArray();
		chaptersArray.forEach((c) => {
			if (c.chapter >= currentChapter && chapterCount < maxChapters) {
				if (c.chapter > currentChapter || chapterCount === 0) {
					currentChapter = c.chapter;
					chapterCount++;
					content += `<h2>${capsFirst(requestedBook)} : ${currentChapter}</h2>`;
				}
				c.verses.forEach((v) => {
					content += `<div class="verse"><strong>${currentChapter}:${v.verse}</strong> ${formatVerseText(v.text, version)}</div>`;
				});
			}
		});
		const hasMore = currentChapter < totalChaptersInBook;
		return res.send({
			content,
			book: requestedBook,
			chapter: currentChapter,
			nextChapter: hasMore ? currentChapter + 1 : currentChapter,
			hasMore,
			remainingBooks: getRemainingBooks(requestedBook)
		});
	});

	defineRoute('/help');
	app.get('/help', validation.help, (req, res) => {
		let darkMode = 		false,
			highLight = 	'DarkGray,White',
			langType = 		'en';
		if (hasQueryKeys(req)) {
			darkMode = 		(req.query.mode === 'dark');
			highLight = 	(req.query.highlight || 'DarkGray,White');
			langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
		}
		return res.render('help', { bibles: biblesArray, langType, darkMode, highLight });
	});
	
	defineRoute('/study');
	app.get('/study', validation.study, (req, res) => {
		let darkMode = 		false,
			highLight = 	'DarkGray,White',
			langType = 		'en';
		if (hasQueryKeys(req)) {
			darkMode = 		(req.query.mode === 'dark');
			highLight = 	(req.query.highlight || 'DarkGray,White');
			langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
		}
		const today = getTodayKey();
		if (!dailyRef || lastLoadedDay !== today) {
			dailyRef = getDailyVerseReference();
			lastLoadedDay = today;
		}
		const blah = (darkMode)?`dark-mode`:``;
		if ([`index`, `indexing`].some(key => key in req.query)) {
			try {
				const output = formatOutput(jsonIndex, req.query.format);
				if (output) return res.type(output.type).send(output.body);
				let metaheader = metadata({ where: 'study?index', title: 'The Bibles Quotes - KJV Bible Study Index'});
				let html = `<!DOCTYPE html><html lang="${langType}"><head>
								${metaheader}
								<link rel="stylesheet" href="../css/index.css">
								<title>KJV Bible Study Index</title>
								<link rel="stylesheet" href="../css/indexing.css">
								<script src="../javascript/indexing.js"></script>
							</head>
							<body class="${blah} fillbody">
							<div class="mainContent">
								<center><h2><b>KJV BIBLE STUDY – SUMMARY INDEX</b><svg class="svgfill" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="34px" height="34px" fill="#000000" stroke="#000000" stroke-width="3.072"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon class="svgfill1" points="282.765,87.546 282.765,0 248.49,0 225.735,374.601 282.765,374.601 282.765,118.175 321.926,129.553 356.199,129.553 356.199,76.169 321.926,76.169 "></polygon> <g> <polygon class="svgfill2" points="321.926,76.169 248.491,76.169 248.491,0 195.106,0 195.106,76.169 121.671,76.169 121.671,129.553 195.106,129.553 195.106,374.6 248.491,374.6 248.491,129.553 321.926,129.553 "></polygon> <rect x="321.925" y="351.846" class="svgfill2" width="45.648" height="53.386"></rect> </g> <rect x="367.629" y="405.231" class="svgfill3" width="57.025" height="53.385"></rect> <rect x="413.322" y="458.615" class="svgfill2" width="68.403" height="53.385"></rect> <rect x="121.676" y="351.846" class="svgfill4" width="200.249" height="53.386"></rect> <rect x="75.972" y="405.231" class="svgfill5" width="291.647" height="53.386"></rect> <rect x="30.275" y="458.615" class="svgfill4" width="383.044" height="53.385"></rect> </g></svg></h2></center>`;
				let lastTitle, huh = "";
				for (const book of jsonIndex) {
					const parts = book.chapter.split(' ');
					const bookTitle = /^\d+$/.test(parts[0]) && parts.length > 2 ? `${parts[0]} ${parts[1]}` : parts[0];
					if (bookTitle !== lastTitle) {
						html += `<hr><div id="${bookTitle.replace(" ","").toLowerCase()}" class="txtcenter"><b>${bookTitle.toUpperCase()}</b></div><hr>`;
					}
					if (bookTitle !== lastTitle && chapters[0].chapters.some(b => Object.keys(b)[0].toLowerCase() === bookTitle.toLowerCase()) && "new" in chapters[0]) {
						const newMatch = chapters[0].chapters.find(b => Object.keys(b)[0].toLowerCase() === bookTitle.toLowerCase());
						if (newMatch) {
							const verses = Object.values(newMatch)[0];
							huh += `<div class="button nt" data-verses="${verses}">${bookTitle}</div>`;
						}
					} else if (bookTitle !== lastTitle && chapters[1].chapters.some(b => Object.keys(b)[0].toLowerCase() === bookTitle.toLowerCase()) && "old" in chapters[1]) {
						const oldMatch = chapters[1].chapters.find(b => Object.keys(b)[0].toLowerCase() === bookTitle.toLowerCase());
						if (oldMatch) {
							const verses = Object.values(oldMatch)[0];
							huh += `<div class="button ot" data-verses="${verses}">${bookTitle}</div>`;
						}
					}
					html += `<div><b>${book.chapter}</b></div><br>`;
					for (const section of book.sections) {
						html += `<div class="svgfill6"><b>Verses ${section.verses}:</b> ${section.summary}</div><br>`;
					}
					lastTitle = bookTitle;
				}
				html += `</div>
					<div id="slidePanel" class="slide-panel hide">
						<div class="button-container">
							<!-- Header tabs -->
							<div class="header-tab">
							<div id="oldtestament">Old Testament</div>
							<div id="newtestament">New Testament</div>
							</div>
							${huh}
						</div>
					</div>
					<div id="slideTabs" class="slide-tabs">
						<div id="slideTabsClose" class="slide-tabs-close">x</div>
						Tabs
					</div>
				</body></html>`;
				return res.send(html);
			} catch (err) {
				res.status(500).render('error', {
					errorNum: 500,
					action: 'Return to Home Page',
					actionLink: '/',
					langType
				});
			}
		} else if (`daily` in req.query) {
			const output = formatOutput([dailyRef], req.query.format);
			if (output && output.body) return res.type(output.type).send(output.body);
			let metaheader = metadata({ where: 'study?daily', title: 'The Bibles Quotes - KJV Bible Study Daily'});
			let html = `<!DOCTYPE html><html lang="${langType}"><head>${metaheader}<title>Daily KJV Verse</title><link rel="stylesheet" href="../css/indexing.css"></head>
			<body class="${blah}" class="svgfill11"><center><h2><b>DAILY SCRIPTURE SUMMARY</b></h2>
			<svg class="svgfill7" height="34px" width="34px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="3.072"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path class="svgfill8" d="M84.073,409.621c-13.127,0-16.034,22.675-16.034,35.802v34.317c0,13.127,2.906,23.868,16.034,23.868 h343.852v-93.985H84.073V409.621z"></path> <path class="svgfill9" d="M439.86,0H100.85L78.467,204.81l22.383,204.81h350.944V11.934C451.794,5.371,446.424,0,439.86,0z"></path> <g> <path class="svgfill10" d="M84.073,0C70.946,0,60.206,10.74,60.206,23.868v421.555c0-13.127,10.74-29.463,23.868-29.463h16.777 V0H84.073z"></path> <polygon class="svgfill10" points="361.5,133.676 297.223,133.676 297.223,74.803 255.961,74.803 255.961,133.676 191.684,133.676 191.684,174.938 255.961,174.938 255.961,346.751 297.223,346.751 297.223,174.938 361.5,174.938 "></polygon> <path class="svgfill10" d="M443.401,495.213H92.467c-8.532,0-15.474-6.942-15.474-15.474v-42.71 c0-8.532,6.942-15.474,15.474-15.474h347.4c6.56-0.003,11.928-5.372,11.928-11.933v-4.854H92.467 c-17.79,0-32.261,14.473-32.261,32.261v42.71c0,17.79,14.473,32.261,32.261,32.261h350.934c4.637,0,8.393-3.758,8.393-8.393 C451.794,498.971,448.038,495.213,443.401,495.213z"></path> </g> </g></svg>`;
			html += `<div><b>${dailyRef.chapter}</b></div><br>`;
			for (const section of dailyRef.sections) {
				html += `<div class="svgfill6"><b>Verses ${section.verses}:</b> ${section.summary}</div><br>`;
			}
			html += `</center></body></html>`;
			return res.send(html);
		} else {
			res.render('study', { langType, darkMode, highLight });
		}
	});

	defineRoute('/prayers');
	app.get('/prayers', botSkipper, validation.prayers, (req, res) => {
		try {
			let langType = 'en', key = null;
			if (hasQueryKeys(req)) {
				langType = (req.query.lang && typeof req.query.lang !== 'undefined') ? req.query.lang : 'en';
				key = (req.query.key || typeof req.query.key !== 'undefined') ? req.query.key : null;
			}
			const darkMode = req.query.mode === 'dark';
			const themeColor = (darkMode) ? 'dark-mode': '';
			const getPrayers = readPrayers(key);
			if (!getPrayers) throw Error('Cannot Read Prayers');
			key = (key != null) ? `?key=${key}` : '';
			let metaheader = metadata({ where: 'prayers', title: 'Prayer Wall - The Bibles Quotes' });
			return res.render('prayers', { langType, key, darkMode, themeColor, getPrayers, metaheader });
		} catch (err) {
			res.status(500).render('error', {
				errorNum: 500,
				action: 'Return to Home Page',
				actionLink: '/',
				langType
			});
		}
	});

	router.post('/prayers/post', validation.prayerPost, async (req, res) => {
		const { name, context, type, terms, key} = req.body;
		try {
			let submit = false;
			if (context && terms === 'on') {
				if (key == false || key == 'false') submit = submitPrayers(req, context, name, type);
				else submit = submitPrayers(req, context, name, type, key);
			}
			if (submit === true) res.status(200).json({ success: true, message: 'Prayer successfully posted.' });
			else res.status(200).json({ success: false, message: submit || 'Prayer rejected! Try again.' });
		} catch (error) {
			res.status(500).json({ success: false, message: error.message });
		}
	});

	defineRoute('/prayers/post');
	app.get('/prayers/post', botSkipper, validation.prayers, (req, res) => {
		try {
			let langType = 'en', key = false, saved = false;
			if (hasQueryKeys(req)) {
				langType = (req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en';
				key = (req.query.key || typeof req.query.key !== 'undefined') ? req.query.key : false;
				if (key) saved = loadPrayerSession(req, key);
			}
			if (!saved) saved = loadPrayerSession(req);
			const darkMode = req.query.mode === 'dark';
			const themeColor = (darkMode) ? 'dark-mode': '';
			let metaheader = metadata({ where: 'prayers', title: 'Prayer Wall - The Bibles Quotes' });
			return res.render('prayersPost', { langType, key, saved, darkMode, themeColor, metaheader });
		} catch (err) {
			res.status(500).render('error', {
				errorNum: 500,
				action: 'Return to Prayer Page',
				actionLink: '/prayer',
				langType
			});
		}
	});

	defineRoute('/nextpost');
	app.get('/nextpost', botSkipper, validation.nextposts, (req, res) => {
		try {
			let langType = 'en', key = null;
			if (hasQueryKeys(req)) {
				langType = (req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en';
				key = (req.query.key || typeof req.query.key !== 'undefined') ? req.query.key : null;
			}
			const darkMode = req.query.mode === 'dark';
			key = (key != null) ? `?key=${key}` : '';
			const defaultSize = ((req.query.size) ? (req.query.size == 'small' ? 'small' : 'full') : 'small');
			const highLight = (req.query.highlight || `DarkGray,White`);
			QPRx2025.init(Math.floor(Math.random() * 9e4) + 1e4);
			req.uuid = req.session.uuid = req.session?.uuid || QPRx2025.generateUUID();
			req.sessionId = req.query.session ? Number(req.query.session) : Math.floor(100000 + QPRx2025.QuantumPollsRelay(900000));
			return res.render('personalStudy', { defaultSize, langType, key, darkMode, highLight, uuid: req.uuid, session: req.sessionId });
		} catch (err) {
			res.status(500).render('error', {
				errorNum: 500,
				action: 'Return to Home Page',
				actionLink: '/',
				langType
			});
		}
	});

	defineRoute('/logs');
	app.get('/logs', validation.token, (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		let hashed = 		false,
			isTokenValid = 	false,
			token = 		null,
			storedToken = 	false
			darkMode = 		false,
			langType = 		'en';
		if (hasQueryKeys(req)) {
			token = (req.query.token || null);
			storedToken = (req.query.hash || false);
			darkMode = 		(req.query.mode === 'dark');
			langType = 		((req.query.lang || typeof req.query.lang !== 'undefined') ? req.query.lang : 'en');
		}
		if (token != null && storedToken) {
			isTokenValid = QPRx2025.customHash(token, process.env.HASHUSERSALT || '10', storedToken);
			if (isTokenValid && checkTokenStorage(isTokenValid)) hashed = isTokenValid;
			else hashed = false;
		} else if (storedToken && checkTokenStorage(storedToken)) hashed = storedToken;
		if (!isTokenValid && !hashed) {
			hashed = QPRx2025.customHash(token, process.env.HASHUSERSALT || 10);
			if (!addTokenStorage(hashed)) hashed = false;
		}
		const blah = (darkMode)?`dark-mode`:``;
		let metaheader = metadata({ where: 'logs', title: 'The Bibles Quotes - Personal Logs'});
		let html = `<!DOCTYPE html><html lang="${langType}">
							<head>
								${metaheader}
								<link rel="stylesheet" href="../css/index.css">
								<title>Personal Logs</title>
							</head>
							<body class="${blah} fillbody">
								<div class="mainContent">
									<center><h2><b>Personal Logs</b>
										<svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M493.918,314.291c-1.77-4.017-6.464-5.838-10.481-4.068c-4.019,1.771-5.84,6.464-4.068,10.483l10.84,24.591l-69.288,30.54 l37.849-101.866l5.648,12.812c1.839,4.172,6.986,5.953,11.016,3.809c3.626-1.929,5.19-6.467,3.534-10.223l-12.25-27.79 l35.488-95.513c1.53-4.116-0.567-8.692-4.683-10.222l-34.971-12.994l15.732-24.121c2.594,0.883,5.292,1.329,7.988,1.329 c6.394,0,12.762-2.467,17.616-7.322c9.713-9.713,9.713-25.516,0-35.229L443.924,8.545c-9.713-9.712-25.515-9.711-35.229,0 c-6.902,6.902-8.96,16.856-5.985,25.599l-25.068,16.349L357.468,4.726c-1.746-3.958-6.514-5.814-10.481-4.068L235.882,49.632 l-88.124-32.743c-4.063-1.508-8.714,0.629-10.222,4.683l-31.729,85.394L5.557,151.155c-3.958,1.745-5.816,6.516-4.068,10.483 l45.583,103.413L7.58,371.336c-1.51,4.062,0.629,8.715,4.683,10.222l38.749,14.397c4.231,1.573,9.027-0.807,10.364-5.106 c1.237-3.975-0.927-8.351-4.825-9.799l-31.297-11.628L149.673,34.563l160.791,59.744l-19.748,12.879l-2.698-2.698 c-9.713-9.712-25.516-9.711-35.229,0l-11.993,11.992c-3.061,3.062-3.061,8.182,0,11.244l54.342,54.342l-84.323,84.324 c-0.523,0.523-0.97,1.115-1.328,1.761l-29.982,53.968c-1.621,2.917-1.213,6.635,1,9.132c2.443,2.757,6.587,3.471,9.81,1.679 l53.968-29.982c0.646-0.359,1.238-0.807,1.761-1.328l36.687-36.686l86.59,32.173c4.231,1.573,9.027-0.807,10.364-5.106 c1.237-3.975-0.927-8.351-4.825-9.799l-79.76-29.635l35.27-35.27l54.342,54.342c3.06,3.06,8.183,3.061,11.243-0.001l11.993-11.992 c9.713-9.713,9.713-25.516,
											0-35.229l-2.698-2.697l48.399-74.212l30.885,11.476L360.113,493.84L90.474,393.655 c-4.117-1.532-8.692,0.567-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222l30.364,11.283l36.685,83.227 c1.745,3.958,6.515,5.815,10.482,4.068l85.888-37.858l113.674,42.235c4.063,1.51,8.713-0.623,10.222-4.683l40.951-110.214 l90.696-39.977c3.958-1.745,5.816-6.516,4.068-10.483L493.918,314.291z M55.019,243.661l-35.775-81.161l78.843-34.753 L55.019,243.661z M419.939,19.789c3.512-3.512,9.23-3.514,12.742,0l59.964,59.963c3.513,3.512,3.513,9.229,0,12.742 c-3.273,3.274-8.446,3.548-12.033,0.637c-0.253-0.206-61.102-61.055-61.309-61.309C416.391,28.236,416.664,23.063,419.939,19.789z M257.274,57.579l88.852-39.166l18.019,40.883l-37.111,24.203L257.274,57.579z M275.094,250.08l-39.507,39.508l-28.67,15.928 l15.928-28.671l83.537-83.536l12.742,12.742L275.094,250.08z M393.757,210.229l-12.107-12.107c-3.105-3.104-8.139-3.104-11.243,0 c-3.105,3.106-3.105,8.139,0,11.244l26.294,26.294c3.514,3.511,3.514,9.227,0.001,12.74l-6.372,6.372l-132.669-132.67l6.371-6.371 c3.513-3.513,9.23-3.513,12.742,0l68.192,68.192c3.233,3.232,8.693,3.016,11.666-0.456c2.665-3.112,2.472-7.893-0.423-10.788 l-54.005-54.005l109.788-71.601l53.366,53.366L393.757,210.229z M163.328,489.38l-27.248-61.817l90.883,33.768L163.328,489.38z"></path> </g> </g> <g> <g> <path d="M277.032,173.479l-101.123-37.571c-4.116-1.531-8.692,0.568-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222 l101.123,37.571c4.231,1.573,9.027-0.807,10.364-5.106C283.094,179.303,280.93,174.927,277.032,173.479z"></path> </g> </g> <g> <g> <path d="M207.926,220.175L152.281,199.5c-4.117-1.53-8.692,0.568-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222 l55.645,20.675c4.231,1.573,9.027-0.807,10.364-5.106C213.988,225.999,211.824,221.623,207.926,220.175z"></path> </g> </g> <g> <g> <path d="M183.757,283.569l-55.104-20.473c-4.117-1.532-8.692,
											0.568-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222 l55.104,20.473c4.231,1.573,9.027-0.807,10.364-5.106C189.819,289.392,187.654,285.017,183.757,283.569z"></path> </g> </g> <g> <g> <path d="M327.601,409.389l-222.578-82.701c-4.117-1.531-8.692,0.567-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222 l222.578,82.701c4.231,1.573,9.027-0.807,10.364-5.106C333.664,415.212,331.499,410.837,327.601,409.389z"></path> </g> </g> <g> <g> <path d="M295.586,325.119l-23.848-8.861c-4.117-1.532-8.692,0.567-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222 l23.848,8.861c4.231,1.573,9.027-0.807,10.364-5.106C301.648,330.943,299.483,326.567,295.586,325.119z"></path> </g> </g> <g> <g> <path d="M351.23,345.794l-31.797-11.815c-4.118-1.531-8.692,0.567-10.222,4.683c-1.53,4.116,0.567,8.692,4.683,10.222 l31.797,11.815c4.231,1.573,9.027-0.807,10.364-5.106C357.292,351.618,355.128,347.242,351.23,345.794z"></path> </g> </g> </g></svg></h2>`;
			let typeOfInput = 		`<input type="text" name="token" class="token" value="" placeholder="Enter a personal key" pattern="[a-zA-Z0-9]{1,32}" required />`;
		if  (!storedToken) {
			const whatever = (hashed) ? hashed : '';
			typeOfInput = 			`<!--<input type="hidden" name="token" class="token" value="${token}" placeholder="Enter a personal key" pattern="[a-zA-Z0-9]{1,32}" required />-->
									<input type="text" name="hash" class="hash" value="${whatever}" placeholder="Enter your hashed key" pattern="[a-zA-Z0-9]{1,32}" required />`;
		}
		const form = 				`<br><br>
									<form action="/logs" method="GET">
									  ${typeOfInput}
									  <button type="submit">Submit</button>
									</form>`;
		if (hashed || token != null) {
			const hashForm = (!storedToken) ? `<h3><b>Add hash=${hashed} to URL or use Sumbit again</b></h3>${form}` : '';
			let message =		  	`<h2><b>Hash: ${hashed}</b></h2>${hashForm}`;
			if (hashed && storedToken) message += `<h3> ⚠️ Don't lose access: Save the URL with <code>hash</code> to retrieve your logs.<br><br>Logs</h3><br>${returnTokenLogs(hashed)}`;
			else if (!hashed && token != null) message = 	`<h2><b>Token: ${token} not Accepted!</b></h2>${form}`;
			html += 				  `${message}`;
		} else html += 				`<h3><b>To generate a usable hash code, include the URL parameters token=password and hash= on the index page.<br>Both parameters are required to log and preserve searched sessions.
										You can also submit a custom token via the form to receive a personalized hash.</h3>
										</b>${form}`;
		html += 					`</center></div>
									<script src="../javascript/custom.js"></script>
									<script src="../javascript/logs.js"></script>
								</body></html>`;
		return res.send(html);
	});

	defineRoute('/robots.txt');
	app.get('/robots.txt', (req, res) => {
		const domain = getBaseDomain(req.hostname);
		const robotsTxtContent = `
			User-agent: *
			Allow: /			# Allow root access
			Disallow: /live/
			Disallow: /directory
			Disallow: /study
			Disallow: /loadMore
			Disallow: /fullbible/
			Disallow: /bible/
			Disallow: /prayers/
			Disallow: /search
			Disallow: /logs
			Crawl-delay: 10

			Sitemap: https://${domain}/help
		`;
		res.header('Content-Type', 'text/plain');
		return res.send(robotsTxtContent);
	});

	defineRoute('/css/highlight.css');
	app.get('/css/highlight.css', (req, res) => {
		const raw = req.query.highlight || '';
		const [bgColorInput, textColorInput] = raw
			.split(',')
			.map(c => c.trim().toLowerCase())
			.filter(Boolean);
		const isValidColor = (color) => {
			const isHex = /^#[0-9a-f]{3}$|^#[0-9a-f]{6}$/i.test(color);
			return isHex || htmlColors.map(c => c.toLowerCase()).includes(color);
		};
		const bgColor = isValidColor(bgColorInput) ? bgColorInput : 'DarkGray';
		const textColor = isValidColor(textColorInput) ? textColorInput : 'White';
		const css = `
			::selection {
				background-color: ${bgColor};
				color: ${textColor};
			}
			::-moz-selection {
				background-color: ${bgColor};
				color: ${textColor};
			}
			.dark-mode ::selection {
				background-color: ${bgColor};
				color: ${textColor};
			}
			.dark-mode ::-moz-selection {
				background-color: ${bgColor};
				color: ${textColor};
			}
			.highlighted {
				background-color: ${bgColor};
				color: ${textColor};
			}
			.dark-mode .highlighted {
				background-color: ${bgColor};
				color: ${textColor};
			}
			`.trim();
		return res.type('text/css').send(css);
	});

	return app;
};

module.exports = {
	routes,
	defined
};

/**⠀___⠀⠀TBQ⠀Project⠀⠀⠀⠀           ⣴⠚⢳⣦⠀⠀⠀⠀⠀⠀⠀
 *⠀⠀‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⠀  ⠀⠀       ⣼⣷⠾⠛⢻⣷⡄⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      ⢰⣿⣇⣠⣤⣸⣿⣧⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀⠀  ⠀⠀⠀⠀⢠⡿⠋⠁_ _⠈⠙⣿⣆⠀⠀⠀© 2025 BadNintendo⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠀⠀  ⠀⠀⠀ ⠀⢾⡆⠀        ⣸⡿⠀⠀‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠀ ⠀⢠⣿⣷⠀ ____  ⢸⣿⣿⡄⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀  ⠀⠀⠀⠀⣾⠿⢿⡇⣿KJV|⢰⡿⠿⣷⡄⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀  ⠀⠀⠀⠸⣿⣶⣾⠃⣿⣀⣀|⠘⣷⣶⣿⠇⠀⠀ 
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀ ⠀ ⠀⠀⠀⠉⢹⣷⠀⠀⠀⠀⣾⡏⠉⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀ ⠀ ⠀⠀⠀⠀⢸⣿⣧⣀⣀⣼⣿⡇⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀  ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀  ⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀    ⠀ ⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⠇
 *⠀⠀⠀⠀⠀⠀⠀⠀			⠀⠀All rights⠀ ⠹⣿⣿⡿⠃ reserved */