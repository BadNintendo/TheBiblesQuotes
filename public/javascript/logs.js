const themeToggle  = false;

const updateUrlParam = (key, value) => ((params) => {
	if (value) params.set(key, value);
	else params.delete(key);
	window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
})(new URLSearchParams(window.location.search));

applyTheme();