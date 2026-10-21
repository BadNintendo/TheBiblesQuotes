window.addEventListener('pageshow', event => {
	if (event.persisted) {
		location.reload();
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const shareLive = document.getElementById('shareLive');
	const shareBox = document.getElementById('shareBox');
	const themeToggle = document.getElementById('theme-toggle');

	let hideTimeout = null;

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
			const loc = (location.href);
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
		if (value !== null && value !== '') queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		const finalQuery = queryParts.length ? `?${queryParts.join('&')}` : '';
		const newUrl = `${url.pathname}${finalQuery}`;
		window.history.replaceState({}, '', newUrl);
	})(new URL(window.location.href), new URLSearchParams(window.location.search));

	const applyTheme = (requestedTheme = null, themeToApply = null) => ((params) => {
		const currentTheme = localStorage.getItem('theme');
		const paramTheme = params.get('mode');
		if (requestedTheme === 'dark') themeToApply = 'dark';
		else if (requestedTheme) themeToApply = null;
		else if (paramTheme === 'dark') themeToApply = 'dark';
		else if (!paramTheme && !requestedTheme && currentTheme === 'dark') themeToApply = 'dark';
		const isDark = themeToApply === 'dark';
		document.body.classList.toggle('dark-mode', isDark);
		themeToggle.checked = isDark;
		if (isDark) localStorage.setItem('theme', 'dark');
		else localStorage.removeItem('theme');
		updateUrlParam('mode', themeToApply);
	})(new URLSearchParams(window.location.search));

	themeToggle.addEventListener('change', () => {
		if (themeToggle.checked) applyTheme('dark');
		else applyTheme('light');
	});
});