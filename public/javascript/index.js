const fullText = 'TheBiblesQuotes';
const tbq = document.getElementById('tbq');
const helpTip = document.getElementById('helpTip');
const biblesDiv = document.getElementById('bibles');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const dailyVerse = document.getElementById('dailyVerse');
const socialMedia = document.getElementById('socialMedia');
const themeToggle = document.getElementById('theme-toggle');
const containerBibles = document.getElementById('fullBibles');
const bibleReferenceInput = document.getElementById('bibleReference');
const dropdownContent = document.getElementById('dropdown-content');
const params = new URLSearchParams(window.location.search);
const initialSelectedBibles = params.get('bible') ? params.get('bible').split(',') : ['KJV'];
const dataContainer = document.getElementById("data-container");

const rememberContainers = [];
const timeoutHighlight = [];
let layoutEnabled = false, token, dailyVerses, bibles, chapters, zoomLevel, highlightData, animationTimeout, selectedVersions = [];
	token = dataContainer.getAttribute("data-token") || null;
	dailyVerses = dataContainer.getAttribute("data-daily");
	bibles = JSON.parse(dataContainer.getAttribute("data-bibles") || "{}");
	chapters = JSON.parse(dataContainer.getAttribute("data-chapters") || "{}");
	zoomLevel = parseInt(dataContainer.getAttribute("data-zoom-level"), 10) || 1;
	highlightData = dataContainer.getAttribute("data-highlight");

const controls = { tooltip: false};

const isDarkMode = () => {
	return (new URLSearchParams(window.location.search).get('mode') == 'dark') ? true : false;
};

const parseReference = (input) => ((referenceRegex)=> {
	const match = input.match(referenceRegex);
	return match ? {
		book: match[1],
		chapter: match[2] || 1,
		verse: match[3] || 1,
		endVerse: match[4] || null
	} : { book: null, chapter: null, verse: null, endVerse: null };
})(/(\w+)\s*(\d+)?:(\d+)?-?(\d+)?/);

const clickWhatever = (yep, event) => {
	const inputText = document.getElementById('bibleReference').value;
	const { book, chapter, verse, endVerse } = parseReference(inputText);
	const currentBook = book || 'Genesis';
	const currentChapter = chapter || 1;
	const currentVerse = verse || 1;
	const version = yep.version || event.target.dataset.version;
	const darkMode = (isDarkMode()) ? '&mode=dark' : '';
	const url = `/fullbible/${version}/?book=${currentBook}&chapter=${currentChapter}&verse=${currentVerse}${darkMode}`;
	window.location.href = endVerse ? `${url}-${endVerse}` : url;
};

const createSpan = ({ text, className, id, title, styles = {}, onClick }) => {
  const span = document.createElement('span');
  if (text) span.textContent = text;
  if (className) span.className = className;
  if (id) span.id = id;
  if (title) span.title = title;
  Object.assign(span.style, styles);
  if (onClick) span.addEventListener('click', onClick);
  return span;
};

const createCloseButton = (version) => {
  const arrow = document.createElement('div');
  arrow.className = 'arrow';
  arrow.title = 'Close Settings';
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.title = 'Close Settings';
  circle.appendChild(arrow);
  const container = document.createElement('div');
  container.className = 'button-container close-settings';
  container.appendChild(circle);
  container.onclick = () => {
    const panel = document.getElementById(`${version}Chapters`);
    panel.style.display = 'none';
  };
  return container;
};

const buildChapterPanel = (version, chapterList, darkMode) => {
  const panel = document.createElement('div');
  panel.id = `${version}Chapters`;
  panel.className = 'chaptersHover innerOutterShadows round3';
  chapterList.forEach(c => {
    const chapterSpan = createSpan({
      text: c,
      title: `${version} - ${c}`,
      styles: {
        border: 'solid #000 thin',
        borderTop: 'none',
        borderBottom: 'none',
        padding: '0 2px',
      },
      onClick: (event) => {
        event.stopPropagation();
        window.location.href = `/bible/${version}/?book=${c.toLowerCase()}&chapter=1${darkMode}`;
      }
    });
    panel.appendChild(chapterSpan);
  });
  panel.appendChild(createCloseButton(version));
  panel.onmouseover = () => {
	clearTimeout(timeoutChapters);
  };
  panel.onmouseleave = () => {
    panel.style.display = 'none';
    rememberContainers.length = 0;
  };
  return panel;
};

let timeoutChapters = null;

const whatever = (version) => ((darkModeParam) => {
  const fullName = getFullName(version);
  if (!fullName) return;
  const versionSpan = createSpan({ text: version, className: 'pages' });
  const containerSpan = createSpan({
    id: version,
    className: `book ${version} span-container`,
    title: fullName,
    styles: {
      border: 'solid #000 thin',
      borderTop: 'none',
      borderBottom: 'none',
      padding: '0 2px',
    }
  });
  containerSpan.addEventListener('mouseleave', () => {
	const targetPanel = document.getElementById(`${version}Chapters`);
    rememberContainers.forEach(id => {
      if (id !== version) {
        const otherPanel = document.getElementById(`${id}Chapters`);
        if (otherPanel) otherPanel.style.display = 'none';
      }
    });
	timeoutChapters = setTimeout(() => {
	    targetPanel.style.display = 'none';
	    rememberContainers.length = 0;
	    rememberContainers.push(version);
	}, 500);
  });
  containerSpan.appendChild(versionSpan);
  containerSpan.dataset.fullname = fullName;
  if (initialSelectedBibles.includes(version)) containerSpan.classList.add('selected');
  containerSpan.onmouseover = () => {
    const targetPanel = document.getElementById(`${version}Chapters`);
    rememberContainers.forEach(id => {
      if (id !== version) {
        const otherPanel = document.getElementById(`${id}Chapters`);
        if (otherPanel) otherPanel.style.display = 'none';
      }
    });
    targetPanel.style.display = 'block';
    rememberContainers.length = 0;
    rememberContainers.push(version);
  };
  containerSpan.addEventListener('click', (event) => {
	event.stopPropagation();
	clickWhatever({ version }, event);
  });
  const chapterData = chapters.find(v => v.version.toUpperCase() === version.toUpperCase());
  const panel = buildChapterPanel(version, chapterData?.chapters || [], darkModeParam);
  biblesDiv.appendChild(containerSpan);
  document.getElementById('chaptersContainer').appendChild(panel);
})(
	isDarkMode() ? '&mode=dark' : ''
);

const updateURL = () => ((url) => {
	url.searchParams.set('bible', selectedVersions.join(','));
	window.history.pushState({}, '', url);
	updateResults();
})(new URL(window.location));

const updateUrlParam = (key, value) => ((params) => {
	if (value) params.set(key, value);
	else params.delete(key);
	window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
	updateResults();
})(new URLSearchParams(window.location.search));

const capsFirst = (blah) => (typeof blah === 'string') && ((ha) => {
	if (ha) return blah.charAt(0).toUpperCase() + blah.slice(1);
	return blah;
})(blah.length > 0);

const goToHelp = () => {
	const darkMode = (isDarkMode()) ? '?mode=dark' : '';
	window.location.href = `/help${darkMode}`;
};

let debounceTimeout = null;
const handleInput = (event) => ((input) => {
	if (!/^[#$]/.test(input)) {
		const suggestionsContainer = document.getElementById('suggestions');
		if (suggestionsContainer.innerHTML != '') suggestionsContainer.innerHTML = '';
		if (input.length >= 3) {
			const matches = getMatches(input);
			displaySuggestions(matches, suggestionsContainer);
		}
	}
	if (input.trim() === '') {
		document.getElementById('results').style.display = 'none';
		dailyVerse.style.display = 'block';
		containerBibles.style.display = 'flex';
		helpTip.classList.remove('hidden');
		socialMedia.classList.remove('hidden');
		TTS('stop');
	} else {
		document.getElementById('results').style.display = 'block';
		containerBibles.style.display = 'none';
		dailyVerse.style.display = 'none';
		helpTip.classList.add('hidden');
		socialMedia.classList.add('hidden');
	}
	if (debounceTimeout != null) {
		clearTimeout(debounceTimeout);
		debounceTimeout = null;
	}
	if ((input.startsWith('#') || input.startsWith('$')) && input.trim() !== '') debounceTimeout = setTimeout(updateResults, 1000);
	else if (input.trim() !== '') debounceTimeout = setTimeout(updateResults, 1000);
})(event.target.value);

const handleEnter = (event) => (event.key === 'Enter') && ((input) => {
    event.preventDefault();
	if (debounceTimeout != null) {
		clearTimeout(debounceTimeout);
		debounceTimeout = null;
	}
	if (input.trim() !== '') updateResults();
 })(event.target.value);

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
	const containers = [...resultsContainer.querySelectorAll('.result-container')];
	formatLayout(resultsContainer, containers);
	const resultsContainer2 = document.getElementById('dailyVerse');
	const containers2 = [...resultsContainer2.querySelectorAll('.result-container')];
	formatLayout(resultsContainer2, containers2);
}

document.getElementById('changeLayout').addEventListener('click', () => {
	layoutEnabled = (layoutEnabled == false) ? true : false;
	formatBibleSections();
});

const addOrReplaceLangParam = (url, lang='en') => {
	const hasQuery = url.includes('?');
	const [base, query = ''] = url.split('?');
	const params = new URLSearchParams(query);
	params.set('lang', lang); // Add or replace 'lang'
	const newQuery = params.toString();
	return hasQuery || newQuery ? `${base}?${newQuery}` : base;
};
//window.location.href = (addOrReplaceLangParam('/'));

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

let keepTime = null, formattedTime = null;

const autoRefresh = () => {
	const centralDateString = new Date().toLocaleString('en-US', {
		timeZone: 'America/Chicago'
	});
	const centralTime = new Date(centralDateString);
	const hours = centralTime.getHours().toString().padStart(2, '0');
	const minutes = centralTime.getMinutes().toString().padStart(2, '0');
	formattedTime = `${hours}:${minutes}`;
	const clockElement = document.getElementsByClassName('bible-version')[0];
	if (clockElement) clockElement.title = `Time : ${formattedTime}`;
	const clockElement2 = document.getElementById('time');
	if (clockElement2) {
		clockElement2.title = "Server Time (Central)";
		clockElement2.textContent = `-Time : ${formattedTime}-`;
	}
	if (keepTime !== hours) {
		keepTime = hours;
		const bibleRefInput = document.getElementById('bibleReference');
		if (!bibleRefInput || bibleRefInput.value == null || bibleRefInput.value.trim() === '') updateDaily();
	}
};

const fetchAndRenderVerses = ({ ref, targetId, isDaily = false }) => {
	const results = document.getElementById(targetId);
	const maybeToken = (!isDaily && token) ? `&token=${token}` : '';
	const darkMode = isDarkMode() ? '&mode=dark' : '';
	const refEncoded = encodeURIComponent(ref);
	const url = `/search?ref=${refEncoded}&bible=${selectedVersions.join(',')}&format=default&web${maybeToken}&tooltip=${controls.tooltip}`;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			results.innerHTML = '';
			if (!isDaily) document.getElementById('dailyVerse').style.display = 'none';
			if (data.length > 0) {
				results.style.display = 'block';
				let label = isDaily ? 'Daily ' : '';
				data.forEach(item => {
					let containerId = `container-${item.version}-${item.book}-${item.chapter}`;
					let container = document.getElementById(containerId);
					if (!container) {
						const versionElement = document.getElementById(item.version);
						if (versionElement) {
							versionElement.addEventListener('click', () => {
								const refText = isDaily ? dailyVerses : document.getElementById('bibleReference').value;
								const { book, chapter, verse } = parseReference(refText);
								const currentBook = book || 'Genesis';
								const currentChapter = chapter || 1;
								const currentVerse = verse || 1;
								window.location.href = `/bible/${item.version}/?book=${currentBook}&chapter=${currentChapter}&verse=${currentVerse}${darkMode}`;
							});
						}
						container = document.createElement('div');
						container.id = containerId;
						container.className = 'result-container';
						const bibleVersionDiv = document.createElement('div');
						bibleVersionDiv.className = 'bible-version';
						let verseText = 'Verse - ';
						if (isDaily) {
							const temp = dailyVerses.split(',').map(v => v.trim());
							verseText = (item.book.includes('-') || item.chapter.includes('-') || temp[1]) ? (label ? 'Verses - ' : '') : 'Verse - ';
						}
						bibleVersionDiv.innerHTML = `<center>${label}${verseText}${item.version.toUpperCase()} ${capsFirst(item.book)} ${item.chapter}</center>`;
						bibleVersionDiv.addEventListener('click', () => {
							window.location.href = `/bible/${item.version}/?book=${item.book}&chapter=${item.chapter}${darkMode}`;
						});
						label = ''; // reset for daily
						container.appendChild(bibleVersionDiv);
						const verseElement = document.createElement('div');
						verseElement.innerHTML = item.html;
						container.appendChild(verseElement);
						results.appendChild(container);
					}
				});
				if (!isDaily) {
					results.scrollTop = 0;
					if (layoutEnabled) formatBibleSections();
				} else {
					const clockElement = document.getElementsByClassName('bible-version')[0];
					if (clockElement) clockElement.title = `Time : ${formattedTime}`;
				}
				if (toggleTTS) {
					TTS('stop');
					TTS('play', langTTS);
				}
			} else {
				results.style.display = 'none';
				containerBibles.style.display = 'flex';
				TTS('stop');
			}
		})
		.catch(err => console.error('Error:', err));
};

const updateResults = () => {
	const input = document.getElementById('bibleReference').value;
	if (input) {
		fetchAndRenderVerses({ ref: input, targetId: 'results' });
		containerBibles.style.display = 'none';
	} else {
		document.getElementById('results').style.display = 'none';
		containerBibles.style.display = 'flex';
		TTS('stop');
	}
};

const updateDaily = () => {
	fetchAndRenderVerses({ ref: dailyVerses, targetId: 'dailyVerse', isDaily: true });
};

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
      document.getElementById('bibleReference').value = `${this.textContent} `;
      document.getElementById('bibleReference').focus();
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

document.addEventListener("DOMContentLoaded", () => {
	zoomInBtn.addEventListener('click', () => {
		zoomLevel += 10;
		document.body.style.zoom = `${zoomLevel}%`;
		updateUrlParam('zoom', zoomLevel);
	});
	zoomOutBtn.addEventListener('click', () => {
		zoomLevel -= 10;
		document.body.style.zoom = `${zoomLevel}%`;
		updateUrlParam('zoom', zoomLevel);
	});
	document.body.style.zoom = `${zoomLevel}%`;
	tbq.addEventListener('mouseover', () => {
		let currentText = '';
		let index = 0;
		clearTimeout(animationTimeout);
		const typeText = () => {
			if (index < fullText.length) {
				currentText += fullText[index];
				tbq.textContent = currentText;
				tbq.style.color = '#2a5298';
				index++;
				animationTimeout = setTimeout(typeText, 60);
			}
		};
		typeText();
	});

	helpTip.addEventListener('click', () => goToHelp());

	if (bibleReferenceInput.value.trim() !== '') {
		helpTip.classList.add('hidden');
		socialMedia.classList.add('hidden');
	}

	const shareLive = document.getElementById('shareLive');
	const shareBox = document.getElementById('shareBox');
	let hideTimeout = null;

	shareLive.addEventListener('click', () => {
		const isVisible = shareBox.style.display === 'flex';
		shareBox.style.display = isVisible ? 'none' : 'flex';
	});

	shareBox.addEventListener('mouseenter', () => {
		clearTimeout(hideTimeout);
	});

	shareBox.addEventListener('mouseleave', () => {
		hideTimeout = setTimeout(() => {
		shareBox.style.display = 'none';
		}, 3000);
	});
	
	//const menu = document.querySelectorAll('.dropDownMenu')[0];
	const menu = document.querySelector('.dropDownMenu');
	menu.addEventListener('touchstart', () => {
		menu.classList.add('touchActive');
	}, { passive: false });

	menu.addEventListener('touchend', () => {
		setTimeout(() => menu.classList.remove('touchActive'), 300); // optional delay
	}, { passive: false });

	document.querySelectorAll('.socials').forEach(social => {
		social.addEventListener('click', () => {
			const classList = social.classList;
			const loc = (location.href).replace(/[?&]mode=dark/g, '').replace(/[?&](hash|token)=[^&]*/g, '');;
			if (classList.contains('x') && classList.contains('main')) {
				window.open('https://x.com/thebiblesquote', '_blank');
			} else if (classList.contains('re') && classList.contains('main')) {
				window.open('https://www.reddit.com/r/TheBiblesQuotes/', '_blank');
			} else if (classList.contains('x')) {
				window.open('https://x.com/share?url=' + encodeURIComponent(loc), '_blank');
			} else if (classList.contains('fb')) {
				window.open('https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(loc), '_blank');
			} else if (classList.contains('re')) {
				window.open('https://reddit.com/submit?url=' + encodeURIComponent(loc), '_blank');
			} else if (classList.contains('copy')) {
				navigator.clipboard.writeText(loc);
			}
		});
	});

	bibleReferenceInput.addEventListener('input', handleInput);
	bibleReferenceInput.addEventListener('keypress', handleEnter);

	document.addEventListener('dblclick', (event) => {
		const target = event.target;
		if (target && target.classList.contains('verse')) {
			if(timeoutHighlight.length !== 0) {
				timeoutHighlight.forEach(timeout => {
					clearTimeout(timeout);
					delete timeoutHighlight[timeout];
				});
			}
			if (!target.classList.contains('highlighted')) {
				target.classList.add('highlighted');
				timeoutHighlight[target.id] = setTimeout(() => target.classList.remove('highlighted'), 20000);
			} else {
				target.classList.remove('highlighted');
				clearTimeout(timeoutHighlight[target.id]);
				delete timeoutHighlight[target.id]
			}
		}
	});
	
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
			whatever(version);
		}
		a.addEventListener('click', () => {
			if (selectedVersions.includes(version)) {
				selectedVersions = selectedVersions.filter(v => v !== version);
				a.classList.remove('selected');
			} else {
				selectedVersions.push(version);
				a.classList.add('selected');
			}
			updateURL();
			if (selectedVersions.length) {
				biblesDiv.textContent = '';
				selectedVersions.forEach(version => whatever(version));
				const input = document.getElementById('bibleReference').value;
				if (input.trim() === '') updateDaily();
			}
		});
		dropdownContent.appendChild(a);
		
		const darkMode = isDarkMode() ? '&mode=dark' : '';
		const createBooks = (short, full) => {
			const url = `/fullbible/${short}/?book=genesis&chapter=1${darkMode}`;
			const hotLink = document.createElement('a');
			hotLink.title = full;
			hotLink.className = `inner-book ${short} biblesOutline`;
			hotLink.href = url;
			const pageClasses = [
				'books',
				'title',
				'page',
				'page page-2',
				'page page-3',
				'page page-4',
				'page page-5',
				'final-page'
			];
			pageClasses.forEach(cls => {
				const div = document.createElement('div');
				div.className = cls;
				hotLink.appendChild(div);
			});
			return hotLink;
		};
		if (containerBibles) containerBibles.appendChild(createBooks(version, fullName));
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
			const container = document.getElementsByClassName('container')[0];
				  container.classList.toggle('narrow');
			const changePath = document.getElementById('changeICOsize');
				  changePath.setAttribute("d", (container.classList.contains('narrow')) ?  fullsizeSVG : smallsizeSVG);
		} else if (data == 'underline') {
			const containerB =  document.getElementById('dailyVerse');
			const containerA = document.getElementById('results');
			const verseElementsB = containerB.querySelectorAll('[id*="verse"]');
				verseElementsB.forEach(contained => {
					contained.classList.toggle('verse');
				});
			const verseElementsA = containerA.querySelectorAll('[id*="verse"]');
				verseElementsA.forEach(contained => {
					contained.classList.toggle('verse');
				});
			document.getElementById('changeUnderline').classList.toggle('textUnderline');
		} else if (data == 'tooltip') {
			controls.tooltip = (controls.tooltip == false) ? true : false;
			const changeTooltip = document.getElementById('changeTooltipSVG');
			changeTooltip.className = (controls.tooltip) ? 'iconSVG bookSVG2' : 'iconSVG bookSVG1' ;
			if (document.getElementById('bibleReference').value) updateResults();
			else updateDaily();
		}
	};

	document.getElementById('changeTheme').addEventListener('click', () => themeControl('width'));

	document.getElementById('changeUnderline').addEventListener('click', () => themeControl('underline'));

	document.getElementById('changeTooltip').addEventListener('click', () => themeControl('tooltip'));

	/*
	const containers = [document.getElementById('dailyVerse'), document.getElementById('results')];

	containers.forEach(container => {
		container.addEventListener('mouseover', e => {
			const target = e.target.closest('[data-tooltip]');
			if (target) showTooltip(target);
		});
		container.addEventListener('mouseleave', hideTooltip);

		container.addEventListener('touchstart', e => {
			const target = e.target.closest('[data-tooltip]');
			if (target) showTooltip(target);
		}, { passive: true });

		container.addEventListener('touchmove', e => {
			const target = e.target.closest('[data-tooltip]');
			if (target) {
				e.preventDefault();
				showTooltip(target);
			}
		}, { passive: true });
		
		container.addEventListener('touchcancel', hideTooltip, { passive: true });
		container.addEventListener('touchend', hideTooltip, { passive: true });
	});
	*/

	const containers = [document.getElementById('dailyVerse'), document.getElementById('results')];

	let activeTooltipTarget = null;
	let touchTimeout;

	containers.forEach(container => {
		// Desktop hover
		container.addEventListener('mouseover', e => {
			const target = e.target.closest('[data-tooltip]');
			if (target) showTooltip(target);
		});
		container.addEventListener('mouseleave', hideTooltip);

		// Mobile touch
		container.addEventListener('touchstart', e => {
			const target = e.target.closest('[data-tooltip]');
			if (target) {
				activeTooltipTarget = target;
				clearTimeout(touchTimeout);
				showTooltip(target);
			}
		}, { passive: true });

		container.addEventListener('touchend', e => {
			// Delay hiding to allow interaction
			touchTimeout = setTimeout(() => {
				hideTooltip();
				activeTooltipTarget = null;
			}, 3000); // Tooltip stays visible for 3 seconds
		}, { passive: true });

		container.addEventListener('touchcancel', () => {
			hideTooltip();
			activeTooltipTarget = null;
		}, { passive: true });

		// Prevent scroll-triggered tooltips
		container.addEventListener('touchmove', e => {
			if (activeTooltipTarget) {
				hideTooltip();
				activeTooltipTarget = null;
			}
		}, { passive: true });
	});

	const toggleHighlight = document.getElementById('toggleHighlight');
	const container2 = 		document.getElementById('highlightExample');
	const toggleContainer = document.getElementById('toggleHighlightContainer');
	const toggleBgBtn = 	document.getElementById('toggleBg');
	const toggleTxtBtn = 	document.getElementById('toggleTxt');
	const grid = 			document.getElementById('colorGrid');
	const colorModeBtns = 	document.querySelectorAll('#colorModeToggle button');

	let currentIndex = 		0;
	let currentMode = 		'bg';

	['mouseleave', 'touchend'].forEach(evt => 
		toggleHighlight?.addEventListener(evt, () => {
			toggleHighlight.classList.add('hide');
			const checkActive = document.getElementById('toggleBg');
			if (!checkActive.classList.contains('active')) checkActive.classList.add('active');
			document.getElementById('toggleTxt').classList.remove('active');
			currentMode = 'bg';
		}
	));

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
		toggleHighlight.classList.toggle('hide');
		renderColorGrid();
	});

	const grabHighlighting = ({ bg, txt, send }) => {
		if (send) {
			let [bgDefault, txtDefault] = highlightData.split(",");
			const params = new URLSearchParams(window.location.search);
			if (!bg) bg = (params?.get('highlight')?.split(",")[0]) ? params.get('highlight').split(",")[0] : bgDefault;
			if (!txt) txt = (params?.get('highlight')?.split(",")[1]) ? params.get('highlight').split(",")[1] : txtDefault;
			const highlighSelection = encodeURIComponent(bg) + ',' + encodeURIComponent(txt);
			params.set('highlight', highlighSelection);
			const newUrl = `${window.location.pathname}?${params.toString()}`;
			window.history.replaceState({}, '', newUrl);
			const cssLink = document.getElementById('custom');
			if (cssLink) cssLink.remove();
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.id = 'custom';
			link.href = `/css/highlight.css?highlight=${bg},${txt}`;
			document.head.appendChild(link);
		}
	};

	const applyHighlight = (color) => {
		if (currentMode === 'bg') container2.style.backgroundColor = color;
		else container2.style.color = color;

		grabHighlighting({
			bg: currentMode === 'bg' ? color : container2.style.backgroundColor,
			txt: currentMode === 'txt' ? color : container2.style.color,
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

	document.getElementById('changeHighlight')?.addEventListener('click', () => {
		if (toggleHighlight.classList.contains('hide')) {
			toggleHighlight.classList.remove('hide');
			renderColorGrid();
		} else {
			toggleHighlight.classList.add('hide');
			const checkActive = document.getElementById('toggleBg');
			if (!checkActive.classList.contains('active')) checkActive.classList.add('active');
			document.getElementById('toggleTxt').classList.remove('active');
			currentMode = 'bg';
		}
	});

	window.addEventListener('keydown', (e) => {
		if (!toggleHighlight.classList.contains('hide') && e.key === 'Tab') {
			e.preventDefault();
			currentIndex = (currentIndex + 9) % htmlColors.length;
			renderColorGrid();
		}
	});

	document.getElementById('smalldesc').addEventListener('click', () => {
		currentIndex = (currentIndex + 9) % htmlColors.length;
		renderColorGrid();
	});
	
	console.log(
		`%cWelcome to The Bibles Quotes!`,
		'color: green; font-weight: bold;',
	);
	updateResults();
	//updateDaily();
	applyTheme();
	
	autoRefresh();
	setInterval(() => {
		autoRefresh();
	}, 60000);

	if (window.innerWidth >= 1024 && bibleReferenceInput) bibleReferenceInput.focus();
});