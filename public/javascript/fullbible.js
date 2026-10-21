/* Notes: Hide Side Panel on load */
const dataContainer = document.getElementById("data-container");
let book = dataContainer.dataset.book || 'genesis';
let rawChapter = parseInt(dataContainer.dataset.chapter, 10);
let chapter = Number.isInteger(rawChapter) && rawChapter > 0 ? rawChapter : 1;
let version = dataContainer.dataset.version || 'kjv';
let isLoading = false, scrollTimeout;

const chapters = JSON.parse(dataContainer.dataset.chapters);

const capitalizeFirstLetter = str => str.replace(/(^\d*\s*)([a-z])/i, (_, lead, char) => lead + char.toUpperCase());

const getMaxChapterForBook = (bookName) => {
	const normalized = bookName.toLowerCase();
	const allBooks = [...chapters[0].chapters, ...chapters[1].chapters];
	for (const b of allBooks) {
		const name = Object.keys(b)[0];
		if (name.toLowerCase() === normalized) {
			const match = b[name].match(/-(\d+)$/);
			return match ? parseInt(match[1], 10) : 1;
		}
	}
	return 1;
};

let currentBook = book.toLowerCase();

const sidepanel = (huh = '', startMatching = false, lastTitle = '') => {
	const currentBookLower = book.toLowerCase();
	const panel = document.getElementById('slidePanel');
	const buildButtons = (section, testamentClass) => {
		for (const b of section.chapters) {
			const title = Object.keys(b)[0];
			const titleLower = title.toLowerCase();
			if (!startMatching && titleLower === currentBookLower) {
				startMatching = true;
				continue;
			}
			if (startMatching && title !== lastTitle) {
				huh += `<div class="button ${testamentClass}" data-verses="${b[title]}">${capitalizeFirstLetter(title)}</div>`;
				lastTitle = title;
			}
		}
	};
	buildButtons(chapters[1], 'ot');
	buildButtons(chapters[0], 'nt');
	panel.innerHTML = `<div class="button-container">
							<div class="header-tab">
								<div id="oldtestament">Old Testament</div>
								<div id="newtestament">New Testament</div>
							</div>
							${huh}
						</div>`;
	checkSidePanel();
	document.getElementById("newtestament").addEventListener("click", () => {
		panel.className = 'slide-panel newtestament';
	});
	document.getElementById("oldtestament").addEventListener("click", () => {
		panel.className = 'slide-panel oldtestament';
	});
};

const checkSidePanel = () => {
	const container = document.getElementById('slidePanel');
	const hasButtons = container.querySelector('.button.ot');
	const whatever = document.getElementById("oldtestament");
	const isHidden = (document.getElementById('slidePanel').classList.contains("hide")) ? 'hide' : '';
	if (!hasButtons) {
		container.className = `slide-panel newtestament ${isHidden}`;
		whatever.style.pointerEvents = 'none';
		whatever.style.opacity = '0.5';
		whatever.setAttribute('aria-disabled', 'true');
	} else if (hasButtons) {
		container.className = `slide-panel oldtestament ${isHidden}`;
		whatever.style.pointerEvents = 'auto';
		whatever.style.opacity = '1';
		whatever.removeAttribute('aria-disabled');

	}
};

const toggleTabs = (forceOpen = null) => {
	const panel = document.getElementById('slidePanel');
	const mainContent = document.getElementsByClassName('mainContent')[0];
	const isHidden = panel.classList.contains("hide");
	if (forceOpen !== null ? forceOpen : isHidden) {
		panel.classList.remove("hide");
		mainContent.classList.add("slide-open");
	} else {
		panel.classList.add("hide");
		mainContent.classList.remove("slide-open");
	}
	checkSidePanel();
};

const loadTabs = (startX = 0, endX = 0) => {
	document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
	document.addEventListener('touchend', e => {
		endX = e.changedTouches[0].clientX;
		if (Math.abs(endX - startX) > 50) toggleTabs(endX > startX);
	});
	document.addEventListener("keydown", e => {
		if (e.key.toLowerCase() === "t") toggleTabs();
	});
	document.getElementById("slideTabsClose").addEventListener("click", e => {
		document.getElementById("slideTabs").style.display = "none";
		e.stopPropagation();
	});
	document.getElementById("slideTabs").addEventListener("click", () => toggleTabs());
	document.getElementById('slidePanel').addEventListener("click", async (e) => {
		const button = e.target.closest(".button");
		if (!button) return;
		const rawText = button.innerText.trim();
		const targetId = rawText.replace(/\s+/g, "").toLowerCase();
		const targetEl = document.getElementById(targetId);
		if (targetEl) {
			toggleTabs(true);
			targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			book = rawText;
			chapter = 1;
			window.scrollTo({ top: 0, behavior: "smooth" });
			await updateBibleURL(book, chapter);
			checkSidePanel();
		}
	});
};

const updateBibleURL = async (bookName, chapterNum) => {
	const url = `/fullbible/${version}/?book=${encodeURIComponent(bookName)}&chapter=${chapterNum}&verse=1${darkParam}`;
	try {
		history.pushState({}, '', url);
		book = bookName;
		chapter = chapterNum;
		sidepanel();
		await loadMoreContent();
		window.addEventListener('scroll', handleScroll);
	} catch {
		location.href = url;
	}
};

const loadMoreContent = async () => {
	if (isLoading) return;
	const maxChapter = getMaxChapterForBook(book);
	if (chapter >= maxChapter) {
		window.removeEventListener('scroll', handleScroll);
		return;
	}
	isLoading = true;
	try {
		const response = await fetch(`/loadMore?version=${version}&book=${book}&chapter=${chapter}`);
		if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
		const data = await response.json();
		if (!data || !data.content) {
			window.removeEventListener('scroll', handleScroll);
			return;
		}
		const contentEl = document.getElementById('content');
		const bookNameEl = document.getElementById('bookName');
		const isNewBook = data.book?.toLowerCase() !== currentBook;
		if (isNewBook) {
			contentEl.innerHTML = '';
			currentBook = data.book.toLowerCase();
		}
		contentEl.insertAdjacentHTML('beforeend', data.content);
		book = data.book || book;
		bookNameEl.innerText = capitalizeFirstLetter(book);
		const next = Number.isInteger(data.nextChapter) ? data.nextChapter : chapter;
		if (next <= chapter || next > maxChapter)	window.removeEventListener('scroll', handleScroll);
		else chapter = next;
		sidepanel();
	} catch (err) {
		console.error('Loading failed', err);
	} finally {
		isLoading = false;
	}
};

const handleScroll = () => {
	clearTimeout(scrollTimeout);
	scrollTimeout = setTimeout(() => {
		const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
		const safeThreshold = Math.max(scrollHeight - 200, 0); // prevent negative
		if (window.scrollY > safeThreshold) {
			loadMoreContent();
		}
	}, 200);
};


const updateUrlParam = (key, value) => ((params) => {
	if (value) params.set(key, value);
	else params.delete(key);
	window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
})(new URLSearchParams(window.location.search));

document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener('scroll', handleScroll);
	sidepanel();
	loadTabs();
	loadMoreContent();
});