const getFullName = (abbreviation) => {
	const names = {
		'KJV': 'King James Version',
		'NKJV': 'New King James Version',
		'WEB': 'World English Bible',
		'ESV': 'English Standard Version',
		'NIV': 'New International Version',
		'NLT': 'New Living Translation',
		'NET': 'New English Translation',
		'NLV': 'New Life Version Bible',
		'TYNDALE': 'Tyndale Bible',
		'GENEVA': 'Geneva Bible',
		'COVERDALE': 'Coverdale Bible',
		'BISHOPS': 'Bishops Bible',
		'ASV': 'American Standard Version',
		'NRSV': 'New Revised Standard Version',
		'LEB': 'Lexham English Bible',
		'2025': 'Custom 2025 Version'
	};
	return names[abbreviation.toUpperCase()] || false;
};

const toggleF2 = () => {
	const showAdditional = document.querySelector('.additional');
	const gTip = document.getElementById('gTip');
	if (showAdditional) {
		if (showAdditional.classList.contains('hide')) rememberF2 = true;
		else rememberF2 = false;
		showAdditional.classList.toggle('hide');
		gTip.classList.toggle('hide');
	}
};

const tooltip = document.createElement('div');
tooltip.className = 'tooltip-popup';
const realToolTip = document.createElement('div');
tooltip.appendChild(realToolTip);
const gTips = document.createElement('div');
gTips.id = 'gTip';
tooltip.appendChild(gTips);
document.body.appendChild(tooltip);
gTips.addEventListener('click', (e) => toggleF2());
let rememberF2 = false, tooltipHoverTimer = false;
const showTooltip = el => {
	let dataAdditional = el.getAttribute("data-additional"),
		dataMeaning = el.getAttribute("data-meaning"),
		dataGreek = el.getAttribute("data-greek"),
		dataHebrew = el.getAttribute("data-hebrew"),
		dataStrongs = el.getAttribute("data-strongs"),
		dataVines = el.getAttribute("data-vines");
	if (dataAdditional) gTips.innerText = 'Press F2 for more';
	else gTips.innerText = '';
	dataAdditional =	(dataAdditional) ?	`<div class="additional hide">${dataAdditional}</div>` : '';
	dataMeaning = 		(dataMeaning != 	'null') ?	`Meaning: ${dataMeaning}` : '';
	dataGreek =		 	(dataGreek != 		'null') ?	`<br> Greek: ${dataGreek}` : '';
	dataHebrew = 		(dataHebrew != 		'null') ?	`<br> Hebrew: ${dataHebrew}` : '';
	dataStrongs = 		(dataStrongs != 	'null') ?	`<br> Strong's: ${dataStrongs}` : '';
	dataVines = 		(dataVines != 		'null') ?	`<br> Vine's: ${dataVines}` : '';
	if (el.getAttribute("data-meaning")) realToolTip.innerHTML = `${el.getAttribute("data-kjv")} - (${el.getAttribute("data-tooltip")}) <br> ${dataAdditional}${dataMeaning}${dataGreek}${dataHebrew}`;
    if (el.getAttribute("data-strongs")) realToolTip.innerHTML = `(${el.getAttribute("data-kjv")}) ${dataStrongs}${dataVines}`;
	const showAdditional = document.querySelector('.additional');
	tooltip.style.display = 'block';
	if (showAdditional) {
		gTip.classList.remove('hide');
		if  (rememberF2 == false && !showAdditional.classList.contains('hide')) {
			showAdditional.classList.add('hide');
		} else if (rememberF2 == true && showAdditional.classList.contains('hide')) {
			showAdditional.classList.remove('hide');
			if (!gTip.classList.contains('hide')) gTip.classList.add('hide');
		}
	}
	clearTooltip();
	el.addEventListener('mouseleave', () => hideTooltip());
	const rect = el.getBoundingClientRect();
	const where =  (!document?.getElementById('chaptersContainer')) ? 20 : 0;
	const top = rect.top + window.scrollY - tooltip.offsetHeight - where;
let left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2;

// Ensure tooltip stays within viewport horizontally
const padding = 8;
const viewportWidth = window.innerWidth;
const tooltipWidth = tooltip.offsetWidth;

if (left < padding) {
	left = padding;
} else if (left + tooltipWidth + padding > viewportWidth) {
	left = viewportWidth - tooltipWidth - padding;
}
	tooltip.style.top = `${top}px`;
	tooltip.style.left = `${left}px`;
	//tooltip.style.maxWidth = `${Math.min(300, viewportWidth - 2 * padding)}px`;
};

tooltip.addEventListener('mouseover', () => clearTooltip());

tooltip.addEventListener('mouseleave', () => hideTooltip());

const clearTooltip = () => {
	clearTimeout(tooltipHoverTimer);
	tooltipHoverTimer = false;
};

const hideTooltip = () => {
	clearTimeout(tooltipHoverTimer);
	tooltipHoverTimer = setTimeout(() => {
		tooltip.style.display = 'none';
		tooltipHoverTimer = false;
	}, 3000);
};

document.addEventListener('keydown', (event) => {
	if (event.key === 'F2') toggleF2()
});

const editPageMode = (what, edit) => {
	document.querySelectorAll('.changeMode').forEach(element => {
		edit = element.getAttribute('href') || '';
		edit = edit.replace(/[?&]mode=dark/g, '');
		const typeEdit = edit.includes('?') ? '&' : '?';
		if (what === 'dark') edit += `${typeEdit}mode=dark`;
		element.setAttribute('href', edit);
	});
};