/**  ██╗██╗                                                                 ██╗██╗
 *   ██║╚═╝  ████████╗ ██████    ██████╗UOTES  ██████╗ ██████╗ ███╗   ███╗  ╚═╝██║
 *   ██║     ╚══██╔══╝ ██╔═██╗I ██╔═══██╗     ██╔════╝██╔═══██╗████╗ ████║     ██║
 *   ██║        ██║H   █████╔╝B ██║   ██║     ██║     ██║   ██║██╔████╔██║     ██║
 *   ██║        ██║E   ██║ ██╗L ██║  █ █║     ██║     ██║   ██║██║╚██╔╝██║     ██║
 *   ██║        ██║    ██████║E ╚█████ ██╗ ██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║     ██║
 *   ██║██╗     ╚═╝      ╚═══╝S  ╚═══════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ██╗██║
 *   ╚═╝╚═╝                                                                 ╚═╝╚═╝
 * TheBiblesQuotes Project
 * © 2025 BadNintendo - MISC Module
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
const os = require('os');
const fs = require('fs');
const path = require('path');
const QPRx2025 = require('./QPRx2025');

const {
	dailyVerses,
	wordReplacements,
	htmlColorswCaps,
	htmlColors,
	alternativeVerses,
	chapters,
	chaptersNickname,
	nicknameMap,
	chaptersMap,
	badWords,
	urlExtensions,
	prayerTypes,
	mistranslatedWordsArray,
	mistranslatedWordsArray2
} = require('./objects.js');
const {
	translatedIndexArray,
	translatedIndexArray2
} = require('./object2.js');

const timestampDir = path.join(__dirname, '../timestamp');

if (!fs.existsSync(timestampDir)) fs.mkdirSync(timestampDir);

let highlightedVerses = [];
const allVersions = [];
const biblesArray = [];
let bibles = {};

fs.readdirSync(path.join(__dirname, '../data')).forEach(file => {
	if (file.endsWith('.json')) {
		const version = path.basename(file, '.json').toLowerCase();
		const data = fs.readFileSync(path.join(__dirname, `../data/${file}`));
		bibles[version] = JSON.parse(data);
		const uniqueBookNames = new Set();
		if (bibles[version]) {
			if (bibles[version].verses) bibles[version].verses.forEach(v => uniqueBookNames.add(v.book_name));
			else if (bibles[version].books) bibles[version].books.forEach(v => uniqueBookNames.add(v.name));
			allVersions.push({ version: version, chapters: Array.from(uniqueBookNames) });
			if (/^[a-z]+$/.test(version)) biblesArray.push(version.toUpperCase());
		}
	}
});

function getLocalIPv4() {
	const interfaces = os.networkInterfaces();
	for (const name in interfaces) {
		for (const iface of interfaces[name]) {
			if (iface.family === 'IPv4' && !iface.internal) {
				return iface.address;
			}
		}
	}
	return 'IP not found';
}

const totalMemMB = os.totalmem() / 1024 / 1024;
const safeMemMB = totalMemMB * 0.5; // Use 50% as a safe cap

console.log(`
\x1b[36m██╗██╗                                                             ██╗██╗
\x1b[36m██║╚═╝\x1b[36m████████╗ \x1b[36m██████    \x1b[36m██████╗\x1b[31mUOTES  \x1b[36m██████╗ \x1b[36m██████╗ \x1b[36m███╗   ███╗╚═╝██║
\x1b[36m██║   \x1b[36m╚══██╔══╝ \x1b[36m██╔═██╗\x1b[31mI \x1b[36m██╔═══██╗     \x1b[36m██╔════╝\x1b[36m██╔═══██╗\x1b[36m████╗ ████║   ██║
\x1b[36m██║      \x1b[36m██║\x1b[31mH   \x1b[36m█████╔╝\x1b[31mB \x1b[36m██║   ██║     \x1b[36m██║     \x1b[36m██║   ██║\x1b[36m██╔████╔██║   ██║
\x1b[36m██║      \x1b[36m██║\x1b[31mE   \x1b[36m██║ ██╗\x1b[31mL \x1b[36m██║  █ █║     \x1b[36m██║     \x1b[36m██║   ██║\x1b[36m██║╚██╔╝██║   ██║
\x1b[36m██║      \x1b[36m██║    \x1b[36m██████║\x1b[31mE \x1b[36m╚█████ ██╗ ██╗\x1b[36m╚██████╗\x1b[36m╚██████╔╝\x1b[36m██║ ╚═╝ ██║   ██║
\x1b[36m██║██╗   \x1b[36m╚═╝      ╚═══╝\x1b[31mS  \x1b[36m╚═══════╝ ╚═╝ \x1b[36m╚═════╝ \x1b[36m╚═════╝ \x1b[36m╚═╝     ╚═╝██╗██║
\x1b[36m╚═╝╚═╝                                                             ╚═╝╚═╝
Loaded: ${biblesArray}
\x1b[31mSafe Heap Cap: \x1b[36m${safeMemMB.toFixed(0)} \x1b[31mMB
\x1b[31mTotal Memory: \x1b[36m${totalMemMB.toFixed(0)} \x1b[31mMB
\x1b[31mLocal IP:, \x1b[36m${getLocalIPv4()}
\x1b[0m`);

/** Path to the database file */
const dbFilePath = path.join(__dirname, '../json/database.json');

/** Read and parse the database JSON file.
 * @returns {Object} - Parsed JSON object from the database file. */
const readDatabase = () => {
	if (fs.existsSync(dbFilePath)) {
		const data = fs.readFileSync(dbFilePath);
		return JSON.parse(data);
	}
};

/** Write data to the database JSON file.
 * @param {Object} data - Data to be written to the database file. */
const writeDatabase = (data) => fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));

/** Core Principle: Axis-Separated Entropy 
 * Each signal should represent a distinct axis of variability.
 * @returns */
function headerData(req) {
	return [
	  req.headers['sec-ch-ua'],                  // Browser brand/version
	  req.headers['sec-ch-ua-platform'] || req.headers['sec-ch-ua-mobile'],         // OS platform || Mobile flag
	  req.headers['x-forwarded-for'] || req.ip,  // IP address
	  req.headers['user-agent'],                 // Full UA string
	  req.headers['content-length'] || '',       // Request size (can vary subtly)
	  req.headers['upgrade-insecure-requests'] || '', // Security preference
	].join('|');
}

/** * Returns an array of book names that come after the given book name.
 * @param {string} currentBookName - The name of the current book, e.g. "Genesis".
 * @returns {Array} - Array of book names that come after the current book. */
const getRemainingBooks = (currentBookName) => {
	const allBooks = [...chaptersMap[1].chapters, ...chaptersMap[0].chapters];
	const allNames = allBooks.map(b => Object.keys(b)[0].toLowerCase());
	const index = allNames.indexOf(currentBookName);
	return index >= 0 ? allNames.slice(index + 1) : [];
};

/** Logs a timestamped entry to a file named after the Bible version.
 * @param {string} version - Bible version key (e.g. 'KJV', 'ESV') */
const logTimestamp = (version) => {
	const timestamp = new Date().toISOString();
	const logPath = path.join(timestampDir, `${version.toLowerCase()}.log`);
	fs.appendFileSync(logPath, `${timestamp} - ${version} rendered\n`);
};

// Takes a string and returns a lowercase, trimmed version.
const normalizeKey = (str) => str.trim().toLowerCase();

// Checks if a string matches a chapter or chapter:verse format.
const isChapterToken = (str) => /^\d+(:\d+)?$/.test(str);

/** Parses a Bible reference string into normalized book names,
 * adding default chapters if missing. Handles 1- and 2-word aliases.
 * @param {string} input - e.g. "2Jn 1:3 Phm" */
const parseReference2 = (input) => {
	const tokens = input.trim().split(/\s+/); const output = [];
	for (let i = 0; i < tokens.length; i++) {
		const current = tokens[i], next = tokens[i + 1] || "";
		const twoWordKey = normalizeKey(`${current} ${next}`);
		const oneWordKey = normalizeKey(current); let bookName = "";
		if (nicknameMap[twoWordKey]) {
			bookName = nicknameMap[twoWordKey];
			const hasChapter = isChapterToken(tokens[i + 2] || "");
			output.push(`${bookName}${hasChapter ? "" : " 1"}`); i += 1; continue;
		}
		if (nicknameMap[oneWordKey]) {
			bookName = nicknameMap[oneWordKey];
			const hasChapter = isChapterToken(next);
			output.push(`${bookName}${hasChapter ? "" : " 1"}`); continue;
		}
		output.push(current);
		}
	return output.join(" ");
};

const checkLive = (req) => {
	const db = readDatabase();
	db.livesessions ??= {};
	const check = Object.keys(db.livesessions);
	let ishost = false;
	if (check.length >= 1) check.forEach((sessionId) => {
		const sessionValue = db.livesessions[sessionId];
		if (QPRx2025.customHash(headerData(req), process.env.HASHUSERSALT || 10, sessionValue.hashed)) {
			ishost = {
				session: sessionValue.session,
				uuid: sessionValue.uuid,
				results: false,
				hostInactive: false,
				expires: sessionValue.date,
				count: 1
			};
		}
	});
	return ishost;
};

/** Parses a Bible reference string into structured book/chapter/verse objects.
 * @param {string} ref - Reference input (e.g. 'Rom 1:1, John 3:16')
 * @returns {Array} - Array of reference objects { book, chapter, verse } */
const parseReference = (ref) => {
	if (ref.length >= 2) ref = parseReference2(ref);
	const bookChapterVerseRegex = /(\d?\s?\w+)\s+(\d+(?:-\d+)?)(?::(\d+(?:-\d+)?))?/gi;
	return [...ref.matchAll(bookChapterVerseRegex)].map(match => {
		const rawBookKey = normalizeKey(match[1]).replace(/\s+/g, '');
		const bookMatchObj = chaptersNickname.flatMap(section => section.chapters).find(obj => {
			const key = Object.keys(obj)[0];
			return key.toLowerCase().replace(/\s+/g, '') === rawBookKey;
		});
		const bookName = bookMatchObj?.[Object.keys(bookMatchObj)[0]] ?? match[1].trim();
		return { book: bookName, chapter: match[2], verse: match[3] };
	});
};

/** Filters and formats entries from source arrays based on their presence in the text.
 * @param {string} text - Input text to search within
 * @param {Array} array - Array of source objects to check
 * @param {string|null} version - Optional Bible version to filter translations
 * @returns {Array} - Array of [key, value] pairs found in the text */
const formatFinds = (text, array, version) => {
	return array.flatMap(sourceArray =>
		Object.entries(sourceArray).filter(([key, value]) => {
			const keyLower = key.toLowerCase();
			return text.includes(keyLower) && (!version || value[version.toLowerCase()]);
		})
	);
};

/** Extracts KJV-specific segments from text, replacing them with HTML tooltips.
 * @param {string} text - Input text containing KJV words
 * @param {string|null} version - Optional Bible version to filter translations
 * @param {boolean} web - true for web HTML output, false for JSON output
 * @param {boolean} control true/false if should use basic strongs/vines tooltip hint
 * @returns {string} - Text with KJV words replaced by HTML spans */
const extractKJVSegments = (text, version = null, web = false, control = false) => {
	const lowerText = text.toLowerCase();
	let entriesWithText, mixed = new Array(), mixed2 = new Array();
	if (control) {
		mixed = formatFinds(lowerText, translatedIndexArray, version);
		mixed2 = formatFinds(lowerText, translatedIndexArray2, version);
	} else {
		mixed = formatFinds(lowerText, mistranslatedWordsArray, version);
		mixed2 = formatFinds(lowerText, mistranslatedWordsArray2, version);
	}
	entriesWithText = mixed.concat(mixed, mixed2);
	let placeholderMap = {}, placeholderIndex = 0, workingText = text, buildarray = [];
	entriesWithText.forEach(([key, value]) => {
		const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`\\b${escapedKey}\\b`, 'gi');
		workingText = workingText.replace(regex, match => {
			const placeholder = `__KJV_PLACEHOLDER_${placeholderIndex}__`;
			let entry, temp = '', separator = web ? ' <br>' : '';
			if (web) {
				placeholderMap[placeholder] = (control)
					? `<span class="tooltip" data-tooltip="Strong’s + Vine’s" data-kjv="${match}" data-strongs="${value.strongs}" data-vines="${value.vines}">${match}</span>`
					: (() => {
						value.greekAdditional.forEach(additional => temp += `- ${additional}${separator}`);
						if (value?.foundin) {
							const result = value.foundin.replaceAll(';', '<br>- ');
							temp += `- ${result}${separator}`;
						}
						return `<span class="tooltip" data-kjv="${value.kjv}" data-tooltip="English: ${value.translatedEnglish}" data-hebrew="${value.hebrewOriginal}" data-greek="${value.greekOriginal}" data-meaning="${value.greekMeaning}" data-additional="${temp}">${match}</span>`;
					})();
			} else {
				if (value?.foundin) {
					const result = value?.foundin?.replaceAll(';', ' - ');
					temp += `- ${result}${separator}`;
				}
				if (!control) {
					value.greekAdditional.forEach((additional) => temp += `- ${additional}${separator}`);
					entry = { match: { 'name': match, 'kjv': value.kjv, 'translatedEnglish': value.translatedEnglish, 'hebrewOriginal': value.hebrewOriginal, 'greekOriginal': value.greekOriginal, 'greekMeaning': value.greekMeaning, 'greekAdditional': temp, 'foundin': value.foundin, 'type': 'fulltranslation' } };
				} else entry = { match: { 'name': match, 'strongs': value.strongs, 'vines': value.vines, 'type': 'strongvinestranslation' } };
				buildarray.push(entry);
				placeholderMap[placeholder] = match;
			}
			placeholderIndex++;
			return placeholder;
		});
	});
	Object.entries(placeholderMap).forEach(([placeholder, replacement]) => {
		workingText = workingText.replace(placeholder, replacement);
	});
	return web ? workingText : { text: workingText, buildarray };
};

/**
 const extractKJVSegments = (text, version = null, web = false, control = false) => {
	const lowerText = text.toLowerCase();
	let entriesWithText, mixed = new Array(), mixed2 = new Array();
	if (control) {
		mixed = translatedIndexArray.flatMap(sourceArray =>
			Object.entries(sourceArray).filter(([key, value]) => {
				const keyLower = key.toLowerCase();
				return lowerText.includes(keyLower) && (!version || value[version.toLowerCase()]);
			})
		);
		mixed2 = translatedIndexArray2.flatMap(sourceArray =>
			Object.entries(sourceArray).filter(([key, value]) => {
				const keyLower = key.toLowerCase();
				return lowerText.includes(keyLower) && (!version || value[version.toLowerCase()]);
			})
		);
		entriesWithText = mixed.concat(mixed, mixed2);
	} else {
		mixed = mistranslatedWordsArray.flatMap(sourceArray =>
			Object.entries(sourceArray).filter(([key, value]) => {
				const keyLower = key.toLowerCase();
				return lowerText.includes(keyLower) && (!version || value[version.toLowerCase()]);
			})
		);

		mixed2 = mistranslatedWordsArray2.flatMap(sourceArray =>
			Object.entries(sourceArray).filter(([key, value]) => {
				const keyLower = key.toLowerCase();
				return lowerText.includes(keyLower) && (!version || value[version.toLowerCase()]);
			})
		);
		entriesWithText = mixed.concat(mixed, mixed2);
	}
	let placeholderMap = {}, placeholderIndex = 0, workingText = text, buildarray = [];
	entriesWithText.forEach(([key, value]) => {
		const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`\\b${escapedKey}\\b`, 'gi');
		workingText = workingText.replace(regex, match => {
			const placeholder = `__KJV_PLACEHOLDER_${placeholderIndex}__`;
			let entry, temp = '', separator = web ? ' <br>' : '';
			if (web) {
				placeholderMap[placeholder] = (control)
					? `<span class="tooltip" data-tooltip="Strong’s + Vine’s" data-kjv="${match}" data-strongs="${value.strongs}" data-vines="${value.vines}">${match}</span>`
					: (() => {
						value.greekAdditional.forEach(additional => temp += `- ${additional}${separator}`);
						if (value?.foundin) {
							const result = value.foundin.replaceAll(';', '<br>- ');
							temp += `- ${result}${separator}`;
						}
						return `<span class="tooltip" data-kjv="${value.kjv}" data-tooltip="English: ${value.translatedEnglish}" data-hebrew="${value.hebrewOriginal}" data-greek="${value.greekOriginal}" data-meaning="${value.greekMeaning}" data-additional="${temp}">${match}</span>`;
					})();
			} else {
				if (value?.foundin) {
					const result = value?.foundin?.replaceAll(';', ' - ');
					temp += `- ${result}${separator}`;
				}
				if (!control) {
					value.greekAdditional.forEach((additional) => temp += `- ${additional}${separator}`);
					entry = { match: { 'name': match, 'kjv': value.kjv, 'translatedEnglish': value.translatedEnglish, 'hebrewOriginal': value.hebrewOriginal, 'greekOriginal': value.greekOriginal, 'greekMeaning': value.greekMeaning, 'greekAdditional': temp, 'foundin': value.foundin, 'type': 'fulltranslation' } };
				} else entry = { match: { 'name': match, 'strongs': value.strongs, 'vines': value.vines, 'type': 'strongvinestranslation' } };
				buildarray.push(entry);
				placeholderMap[placeholder] = match;
			}
			placeholderIndex++;
			return placeholder;
		});
	});
	Object.entries(placeholderMap).forEach(([placeholder, replacement]) => {
		workingText = workingText.replace(placeholder, replacement);
	});
	return web ? workingText : { text: workingText, buildarray };
};
 */

/** Formats verse text by replacing symbolic markers with styled HTML spans.
 * @param {string} text - Raw verse text
 * @param {string|null} version - Optional Bible version to filter translations
 * @param {boolean} control true/false if should use basic strongs/vines tooltip hint
 * @returns {string} - HTML-formatted verse string */
const formatVerseText = (text, version, web, control = false) => {
	if (!text && typeof text !== 'string') return;;
	text = text.replace(/‹([^›]+)›/g, '<span class="red">$1</span>')
		.replace(/\[([^]]+)\]/g, '<span class="black">$1</span>');
	text = replaceStrongs(text.replace(/[‹›\[\]¶]/g, ''));
	if (web == true || web == false) text = extractKJVSegments(text, version, web, control);
	return (text);
};

/** Capitalizes the first character of a string.
 * @param {string} str - Text input
 * @returns {string} - Text with first letter capitalized */
const capsFirst = (blah) => {
	if (typeof blah === 'string' && blah.length > 0) return blah.charAt(0).toUpperCase() + blah.slice(1);
	return blah;
};

/** Replaces Strong's dictionary tags with corresponding Greek word translations.
 * @param {string} text - Verse text with {G1234} tags
 * @param {Array} matchedStrongWords - Array to store matched Strong's words
 * @param {RegExp} match - Current regex match object
 * @param {number} index - Current index in matchedStrongWords
 * @returns {string} - HTML-formatted text with Strong's words included */
const replaceStrongs = (text, matchedStrongWords = [], match, index = 0) => ((strongsDict, regex) => {
	while ((match = regex.exec(text)) !== null) {
		const number = match[1];
		const word = strongsDict[`G${number}`] || `{G${number}}`;
		matchedStrongWords.push(word);
	}
	return text.replace(/\{G(\d+)\}/g, () => {
		const word = matchedStrongWords[index];
		index++;
		return `<strong class="strongs">${word}</strong>`;
	}).replace(/\{\(\G\d+\)\}/g, "");
})({
	G1722: "in",
	G746: "the beginning",
	G2258: "was",
	G5713: "",
	G3056: "the Word",
	G2532: "and",
	G4314: "with",
	G2316: "God"
},
/\{G(\d+)\}/g);

/** Retrieves and formats verse(s) from the selected Bible version source.
 * @param {string} version - Bible version key
 * @param {string} book - Book name
 * @param {string|number} chapter - Chapter number
 * @param {string|null} verse - Specific verse or range (e.g. '1', '1-3')
 * @param {string} format - Output style ('default' or others)
 * @returns {string|null} - HTML content or null if not found */
const getVerseText = (web, version, book, chapter, verse, format, control = false, results = []) => {
	const bible = bibles[version.toLowerCase()];
	if (!bible) return null;
	const lowerCaseBook = book.toLowerCase();
	const lowerCaseChapter = parseInt(chapter);
	const lowerCaseVerse = verse ? verse.toLowerCase() : null;
	const addVerse = (chapter, verseNumber, text) => {
		if (format === 'default') {
			const verseId = `verse-${chapter}-${verseNumber}`;
			const highlightClass = isHighlighted(verseId) ? 'highlighted' : '';
			results.push(`<div id="${verseId}" class="verse ${highlightClass}">
				<strong>${chapter}:${verseNumber}</strong> ${formatVerseText(text, version, web, control)}
			</div>`);
		} else /*if (format === 'jsonextend')*/ results.push(extractKJVSegments(text, version, false, control));
		//else results.push(text);
	};
	const matchVerse = (verseNumber) => lowerCaseVerse == null || 
		(lowerCaseVerse.includes('-') ? verseNumber >= parseInt(lowerCaseVerse.split('-')[0]) && verseNumber <= parseInt(lowerCaseVerse.split('-')[1]) : verseNumber === parseInt(lowerCaseVerse));
	const processVerses = (verses, chapter) => {
		verses.forEach(v => {
			if (matchVerse(v.verse)) addVerse(chapter, v.verse, v.text);
		});
	};
	if (bible.verses) processVerses( bible.verses.filter(v => v.book_name.toLowerCase() === lowerCaseBook && v.chapter === lowerCaseChapter), lowerCaseChapter);
	else if (bible.books) {
		const bookData = bible.books.find(b => b.name.toLowerCase() === lowerCaseBook);
		const chapterData = bookData?.chapters?.find(c => c.chapter === lowerCaseChapter);
		if (chapterData?.verses) processVerses(chapterData.verses, lowerCaseChapter);
	} else {
		const bookData = bible[lowerCaseBook];
		const chapterData = bookData?.[lowerCaseChapter];
		if (chapterData) {
			Object.entries(chapterData).forEach(([key, text]) => {
				const verseNumber = parseInt(key);
				if (matchVerse(verseNumber)) addVerse(lowerCaseChapter, verseNumber, text);
			});
		}
	}
	if (results.length === 0) return null;
	if (format == 'default') {
		if (results.length >= 5) results.push(`<br><hr>`);
		else results.push(`<br><br>`);
		return results.join(' ');
	}
	return results;
};

/** Determines if a verse is highlighted in the UI state.
 * @param {string} verseId - DOM verse ID to check
 * @returns {boolean} */
const isHighlighted = (verseId) => {
	return highlightedVerses.includes(verseId);
};

/** Generates HTML content for a series of chapters from the Bible data.
 * @param {object} bible - Bible version object
 * @param {string} book - Book name
 * @param {number} startChapter - Starting chapter number
 * @param {number} maxChapterCount - Number of chapters to generate
 * @returns {object} - { content: HTML, nextChapter: number } */
const generateContent = (bible, book, startChapter, maxChapterCount, content = '', chapterCount = 0) => {
	let currentChapter = startChapter;
	const addContentForChapters = (chapters) => {
		chapters.forEach((c) => {
			if (c.chapter >= currentChapter && chapterCount < maxChapterCount) {
				if (c.chapter !== currentChapter) {
					currentChapter = c.chapter;
					chapterCount++;
					content += `<h2>${capsFirst(book)} : ${currentChapter}</h2>`;
				}
				c.verses.forEach((v) => {
					if (v.text) content += `<div class="verse"><strong>${currentChapter}:${v.verse}</strong> ${formatVerseText(v.text, null, 'generateContent')}</div>`; //may change
				});
			}
		});
	};
	if (bible.verses) {
		const versesGroupedByChapter = bible.verses.reduce((acc, v) => {
			if (v.book_name.toLowerCase() === book) {
				acc[v.chapter] = acc[v.chapter] || [];
				acc[v.chapter].push(v);
			}
			return acc;
		}, {});
		const chaptersArray = Object.keys(versesGroupedByChapter).map((chapter) => ({ chapter: parseInt(chapter, 10), verses: versesGroupedByChapter[chapter] }));
		addContentForChapters(chaptersArray);
	} else if (bible.books) {
		const bookData = bible.books.find((b) => b.name.toLowerCase() === book);
		if (bookData) addContentForChapters(bookData.chapters);
	}
	return { content, nextChapter: currentChapter + 1 };
};

/** Retrieves the current date/time in Central Time (America/Chicago).
 * @returns {Date} - Current date/time in Central Time (America/Chicago) */
/** Retrieves the current date/time in Central Time (America/Chicago).
 * @returns {Date} - Accurate Central Time Date object */
function getCentralDate() {
	const now = new Date();
	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: 'America/Chicago',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	});
	const parts = formatter.formatToParts(now);
	const dateParts = {};

	for (const part of parts) {
		if (part.type !== 'literal') {
			dateParts[part.type] = part.value;
		}
	}
	return new Date(
		Date.UTC(
			parseInt(dateParts.year),
			parseInt(dateParts.month) - 1,
			parseInt(dateParts.day),
			parseInt(dateParts.hour),
			parseInt(dateParts.minute),
			parseInt(dateParts.second)
		)
	);
}

/** Retrieves today's predefined daily Bible verse based on MM-DD.
 * Uses `dailyVerses` if the year is ≤ 2025, else falls back to `getAlternativeVerse`.
 * @returns {string} - Bible verse reference */
let storeToday = null, dailyVerse = null;
function getDailyVerse() {
	const today = getCentralDate();
	if (storeToday != today) {
		storeToday = today
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		const key = `${month}-${day}`;
		dailyVerse = (today.getFullYear() <= 2025) ? dailyVerses[key].join(",") || "Psalm 119:105" : getAlternativeVerse();
		return dailyVerse;
	} else return dailyVerse
}


/** Selects a Bible verse from `alternativeVerses` using month and day lookup.
 * Falls back to "Psalm 119:105" if no match is found.
 * @returns {string} - Bible verse reference */
function getAlternativeVerse() {
	const today = getCentralDate();
	const monthName = today.toLocaleString('en-US', { month: 'long' });
	const dayOfMonth = today.getDate();
	if (alternativeVerses[monthName] && alternativeVerses[monthName][dayOfMonth]) {
		const possibleVerses = alternativeVerses[monthName][dayOfMonth];
		return possibleVerses[Math.floor(Math.random() * possibleVerses.length)];
	}
	return "Psalm 119:105";
}

/** Retrieves a structured reference from indexing.json using a date-based seed.
 * Picks one chapter + summary combination pseudo-randomly.
 * @returns {object|null} - Reference object with chapter and section details */
let storeSeed = null, referenceDaily = null;
function getDailyVerseReference(all) {
	let today = getCentralDate();
	today = today.toISOString().slice(0, 10);
	const seed = parseInt(today.replace(/-/g, ''), 10);
	if (storeSeed != seed || referenceDaily == null) {
		const dataPath = path.join(process.cwd(), 'data', 'indexing.json');
		const raw = fs.readFileSync(dataPath, 'utf8');
		all = JSON.parse(raw) || null;
		const flatList = all.flatMap(ch => ch.sections.map(sec => ({ chapter: ch.chapter, sections: [{verses: sec.verses, summary: sec.summary }]})) );
		const index = Math.floor((Math.sin(seed) * 10000 % 1 + 1) % 1 * flatList.length);
		referenceDaily = flatList[index];
		all = null, storeSeed = seed;
	}
	return referenceDaily;
}

/** Formats structured chapter/verse data into various output types.
 * Supported formats: json, xml, yaml, txt, csv, tsv
 * @param {Array} data - Parsed chapter and section array
 * @param {string} format - Output format keyword
 * @returns {object|null} - Object with MIME type and formatted body */
function formatOutput(data, format) {
	const indent = (level) => '  '.repeat(level);
	if (format === 'json') return { type: 'application/json', body: JSON.stringify(data, null, 2) };
	if (format === 'xml') {
		let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/chapters.xsl"?>\n<chapters>`;
		for (const chapter of data) {
			xml += `\n${indent(1)}<chapter title="${chapter.chapter}">`;
			for (const section of chapter.sections) {
				xml += `\n${indent(2)}<section>`;
				xml += `\n${indent(3)}<verses>${section.verses}</verses>`;
				xml += `\n${indent(3)}<summary>${section.summary}</summary>`;
				xml += `\n${indent(2)}</section>`;
			}
			xml += `\n${indent(1)}</chapter>`;
		}
		xml += '\n</chapters>';
		return { type: 'application/xml', body: xml };
	} else if (format === 'yaml') {
		let yaml = '';
		for (const chapter of data) {
			yaml += `- chapter: "${chapter.chapter}"\n  sections:\n`;
			for (const section of chapter.sections) {
				yaml += `    - verses: "${section.verses}"\n      summary: "${section.summary.replace(/"/g, '\\"')}"\n`;
			}
		}
		return { type: 'text/yaml', body: yaml };
	} else if (format === 'txt') return { type: 'text/plain', body: data.map(b => `${b.chapter}\n` + b.sections.map(s => `Verses ${s.verses}: ${s.summary}`).join('\n')).join('\n\n') };
	else if (format === 'csv') return { type: 'text/csv', body: 'Chapter,Verses,Summary\n' + data.flatMap(b => b.sections.map(s => `"${b.chapter}","${s.verses}","${s.summary.replace(/"/g, '""')}"`)).join('\n') };
	else if (format === 'tsv') return { type: 'text/tab-separated-values', body: 'Chapter\tVerses\tSummary\n' + data.flatMap(b => b.sections.map(s => `${b.chapter}\t${s.verses}\t${s.summary}`)).join('\n') };
	else return null;
}

/** Extract the base domain from the hostname.
 * @param {string} hostname - The hostname from the request.
 * @param {boolean} sub - If true, return the subdomain part.
 * @returns {string} - The base domain or subdomain (e.g., 'chathobby.com' or 'profile'). */
const getBaseDomain = (hostName, sub = false) => {
	const splitName = hostName.split(':')[0];
	const parts = splitName.split('.');
	const len = parts.length;
	if (sub) {
		if (len > 2) return parts.slice(0, len - 2).join('.');
		return '';
	}
	else if (len >= 2) return parts.slice(len - 2).join('.');
	else return hostName;
};

/* Header data shared with EJS pages to speed up generated Meta Data */
const metadata = (data) => {
	return `<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Dive deeper into God's Word with The Bibles Quotes, a platform for exploring scriptures, verses, and chapters from diverse Bible translations. Empower your faith journey with insights into God and Jesus's teachings.">
	<meta name="author" content="BadNintendo">
	<meta name="keywords" content="Bible, scriptures, verses, chapters, live search, God, Jesus, faith, Christianity, study, prayer, devotion, worship, religious resources, Gospel, Bible study tools, KJV, NKJV, WEB, ESV, NIV, NLT, NET, NLV, TYNDALE, GENEVA, COVERDALE, BISHOPS, ASV">
	<meta name="robots" content="index, follow">
	<meta property="og:url" content="https://thebiblesquotes.com/${data.where}">
	<meta property="og:title" content="${data.title}">
	<meta property="og:description" content="Dive deeper into God's teachings with The Bibles Quotes. Search and study chapters and verses from various Bible translations simultaneously, enhancing your connection with faith.">
	<meta property="og:image" content="https://thebiblesquotes.com/images/tbqlogo.png">
	<meta property="og:type" content="website">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://thebiblesquotes.com/${data.where}">
	<meta name="twitter:title" content="${data.title}">
	<meta name="twitter:description" content="Empower your faith with The Bibles Quotes - your resource for live searches and study of Bible scriptures across multiple versions.">
	<meta name="twitter:image" content="https://thebiblesquotes.com/images/tbqlogo.png">
	<meta name="twitter:site" content="@TheBiblesQuote">
	<meta name="theme-color" content="#ffffff">
	<link rel="icon" href="https://thebiblesquotes.com/images/tbq.ico" type="image/x-icon">
	<link rel="shortcut icon" href="https://thebiblesquotes.com/images/tbq.ico" type="image/x-icon">
	<link rel="apple-touch-icon" sizes="120x120" href="https://thebiblesquotes.com/images/tbq.png">
	<link rel="apple-touch-icon" sizes="152x152" href="https://thebiblesquotes.com/images/tbq.png">
	<link rel="canonical" href="https://thebiblesquotes.com/${data.where}"></link>
	<title>${data.title}</title>`;
};

/** Function to detect obfuscated mentions of restricted TLDs in a user input string.
 * @param {string} input - The user-provided string to validate against known spam indicators.
 * @returns a string indicating whether the input is clean or contains suspicious content. */
const sanitizeAndCheckTLD = (input) => {
	for (const ext of urlExtensions) {
		const tldPattern = new RegExp(`(?:\\b|_)dot[\\s_-]*${ext}\\b`, 'i');
		const periodPattern = new RegExp(`[\\s_-]*\\.[\\s_-]*${ext}\\b`, 'i');
		if (tldPattern.test(input) || periodPattern.test(input)) return true;
	}
	return false; // Input is clean
};


/** Generates a unique prayer ID and attaches it to the session if it doesn't already exist in either prayer list.
 * @param {object} req - Express request object containing session data
 * @param {object} db - The parsed prayer database containing `prayers` and `personalPrayers`
 * @param {string} where - Optional override for prayer ID; usually regenerated internally
 * @returns {string} where - Final prayer ID (new or existing) */
const validatePrayerId = (req, db, where) => {
	QPRx2025.init(Date.now());
	where = `prayer_${QPRx2025.lcg().toString(36).substr(2)}`;
	if (!db.prayers[where] && !db.personalPrayers[where]) {
		req.session.prayerId = where;
		req.session.save();
	} else validatePrayerId(req, where);
	return where;
};

/** Used to load session data to allow editing same prayer submitted in 7 day period
 * @param {object} req - Express request object containing session data
 * @param {string} key Personal prayer wall key
 * @param {null} info not meant to be used
 * @param {undefined} prayerId not meant to be used
 * @returns {boolean} info = submiited prayer context or false */
const loadPrayerSession = (req, key = null, info = null, prayerId) => {
	const db = readDatabase() || { prayers: {}, personalPrayers: {} };
	if (req.session?.prayerId && db?.prayers && db?.personalPrayers) {
		prayerId = req.session.prayerId;
		if (key == null) db.prayers[prayerId] = info;
		else if (key != null) db.personalPrayers[prayerId] = info;
		else if (info != null) return info;
		else return false;
	} else return false;
};

/** Validates and stores a prayer in either the general or personal collection based on `key`.
 * @param {object} req - Express request object used for session access
 * @param {string} input - Prayer message text submitted by user
 * @param {string} [name='Anonymous'] - Optional author name (defaults to 'Anonymous')
 * @param {string|null} [type=null] - Optional category or descriptor for the prayer
 * @param {boolean|null} [key=null] - Determines whether to store under personal or general prayers
 * @returns {true|string} - Returns true on success or a string with validation error */
const submitPrayers = (req, input, name = 'Anonymous', type = null, key =  null, where) => {
	if (typeof input !== 'string') return ('Is not context try again.');
	else if (input.length <= 1 && input.length >= 1500) return ('Context must be over 1 and under 1500 in length.');
	else if (name.length <= 1 && name.length >= 32) return ('Name must be over 1 and under 32 in length.');
	else if (badWords.includes(name.toLowerCase()) || sanitizeAndCheckTLD(name.toLowerCase())) return ('Name contains restricted or inappropriate context.');
	else if (badWords.includes(input.toLowerCase()) || sanitizeAndCheckTLD(input.toLowerCase())) return ('Context contains restricted or inappropriate context.'); 
	// urlExtensions.includes(input.toLowerCase()))
	else if (type !== null && !prayerTypes.includes(type.toLowerCase())) return ('Invalid type must contain the list of options.');
	else if (!input.match(/\b[a-z]\b|\b[a-z]{2,}\b/i)) return ('Does not contain enough context.');
	else if (input.match(/([^\w\s])(?:\s*([^\w\s])){2,}/)) return ('Contains to many spam symbols.');
	else if (key !== null && !key.match(/^[a-zA-Z0-9]{1,32}$/))  return ('Key must contain only letters and numbers.');
	const db = readDatabase() || { prayers: {}, personalPrayers: {} };
	const info = { name, context: input, date: new Date(Date.now() + 60 * 60 * 1000), type };
	if (req.session?.prayerId) where = req.session.prayerId;
	else where = validatePrayerId(req, db, where); // creates first time after 7 days
	if (key == null) db.prayers[where] = info;
	else db.personalPrayers[where] = info;
	writeDatabase(db);
	return true;
};

/** Returns an HTML string of formatted prayer cards using either general or personal prayers. 
 * @param {boolean|null} key - Indicates whether to read personal or general prayers
 * @returns {string} - HTML markup containing styled prayer cards */
const readPrayers = (key, inside) => {
	if (key && !key?.match(/^[a-zA-Z0-9]{1,32}$/)) return; // added 08/17/25
	const db = readDatabase();
	inside = (key == null) ? db.prayers : db.personalPrayers;
	const getDb = Object.entries(inside);
	let buildPrayers = '<div class="contained">';
	getDb.forEach(([key, value]) => {
		if (key.includes('prayer')) {
			const monthName = new Date(value.date).toLocaleString('default', { month: 'long' }).toLowerCase();
			const customDate = `${new Date(value.date).toLocaleString('en-US', { month: 'short' })} ${(d=new Date(value.date),`${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}/${String(d.getFullYear()).slice(-2)}`)}`;
			const shortContext = value.context.length > 220 ? value.context.substring(0, 220) + '...' : value.context;
			buildPrayers += `
				<div class="prayerCard ${monthName}" data-full='${JSON.stringify(value)}'>
					<strong>${value.name}</strong> (${customDate})<br>
					<span class="context">${shortContext}</span>
				</div>`;
		}
	});
	buildPrayers += '</div>';
	return buildPrayers;
};

/** Stores a search string associated with an optional token in the database.
 * @param {string|null} token - Optional token to categorize the search
 * @param {string} str - The search string to be stored
 * @returns {boolean} - True if the search was stored successfully, false on validation failure */
const keepSearch = (token = null, str) => {
	if (!token?.match(/^[a-zA-Z0-9]{1,32}$/) || typeof str !== 'string') return false;
	str = str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	const db = readDatabase();
	db.searchToken ??= {};
	if ((token in db.tokens)) {
		if ((token in db.searchToken)) db.searchToken[token].push({ date: Date.now(), search: str });
		else db.searchToken[token] = [{ date: Date.now(), search: str }];
		writeDatabase(db);
		return true;
	} else return false;
};

/** Adds token generated by unique pass/token to databae.json
 * @param {string} token input of hashed value storing to database
 * @returns {boolean} true/false returns true if stored, false if found*/
const addTokenStorage = (token) => {
	if (!token?.match(/^[a-zA-Z0-9]{1,32}$/)) return false;
	const db = readDatabase();
	db.tokens ??= {};
	if (!(token in db.tokens)) {
		db.tokens[token] = Date.now();
		writeDatabase(db);
		return true;
	}
	return false;
};

/** Check token unique pass/token to databae.json
 * @param {string} token input of hashed value storing to database
 * @returns {boolean} true/false returns true if stored, false if found */
const checkTokenStorage = (token) => {
	if (!token?.match(/^[a-zA-Z0-9]{1,32}$/)) return false;
	const db = readDatabase();
	db.tokens ??= {};
	if ((token in db.tokens)) return true;
	return false;
};

/** Checks hashed token and returns logs
 * @param {string} isTokenValid hashed token
 * @returns logs or text */
const returnTokenLogs = (isTokenValid, build = '') => {
	if (!isTokenValid?.match(/^[a-zA-Z0-9]{1,32}$/)) return false;
	const db = readDatabase();
	db.searchToken ??= {};
	if ((isTokenValid in db.searchToken)) {
		db.searchToken[isTokenValid].forEach((data, num) => Object.entries(data).forEach(([name, value]) =>  build += `<b> #${num} -  ${name}: ${value}</b> <br>`));
		return build;
	}
	else return '<b>Nothing Logged Yet!</b>';
};

/** Deletes token pass/token from databae.json after 30 days */
const deleteTokenStorage = () => {
	const db = readDatabase();
	if (!db?.tokens) return false;
	const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
	const now = Date.now();
	let deleted = 0;
	Object.entries(db.tokens).forEach(([key, storedDate]) => {
		const storedTime = new Date(storedDate).getTime();
		if (isNaN(storedTime)) {
			console.warn(`\x1b[31mInvalid date for \x1b[36mtoken ${key}:`, storedDate, `\x1b[0m`);
			return;
		}
		const expiryTime = storedTime + THIRTY_DAYS_MS;
		if (expiryTime <= now) {
			deleted++;
			delete db.tokens[key];
		}
	});
	if (deleted >= 1) writeDatabase(db);
	setInterval(() => deleteTokenStorage(), 24 * 60000);
};
deleteTokenStorage();

 /** Use to delete dups of object array by key comparasion
  * @param {array} keepArray leave empty its for building keys */
/*const deleteDups = (keepArray = []) => {
	// Step 1: Remove keys from mistranslatedWords that are in keepArray
	Object.entries(mistranslatedWords).forEach(([key, value]) => {
		if (keepArray.includes(key)) {
			delete mistranslatedWords[key];
		} else {
			keepArray[key] = new Date(); // This line seems to misuse keepArray as an object
		}
	});
	// Step 2: Sort the remaining keys alphabetically
	const sortedKeys = Object.keys(mistranslatedWords).sort((a, b) => a.localeCompare(b));
	// Step 3: Reconstruct a new object in sorted order
	const sortedObject = {};
	sortedKeys.forEach(key => {
		sortedObject[key] = mistranslatedWords[key];
	});
	// Step 4: Log the sorted object
	console.log(JSON.stringify(sortedObject, null, "\t"));
};
//deleteDups();*/

module.exports = {
	chapters,
	metadata,
	keepSearch,
	prayerTypes,
	readPrayers,
	biblesArray,
	formatOutput,
	logTimestamp,
	readDatabase,
	writeDatabase,
	submitPrayers,
	getDailyVerse,
	parseReference,
	formatVerseText,
	addTokenStorage,
	returnTokenLogs,
	generateContent,
	checkTokenStorage,
	highlightedVerses,
	loadPrayerSession,
	getDailyVerseReference,
	getRemainingBooks,
	chaptersNickname,
	replaceStrongs,
	isHighlighted,
	getBaseDomain,
	timestampDir,
	getVerseText,
	allVersions,
	htmlColors,
	headerData,
	checkLive,
	capsFirst,
	bibles
};