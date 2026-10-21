document.addEventListener("DOMContentLoaded", function () {
	let startX = 0;
	let endX = 0;
	const panel = document.getElementById('slidePanel');
	const mainContent = document.querySelector('.mainContent');
	document.addEventListener('touchstart', e => {
		startX = e.touches[0].clientX;
	});
	document.addEventListener('touchend', e => {
		endX = e.changedTouches[0].clientX;
		const deltaX = endX - startX;
		if (Math.abs(deltaX) > 50) {
			if (deltaX > 0) {
				mainContent.classList.add('slide-open');
				panel.classList.remove('hide');
			} else {
				mainContent.classList.remove('slide-open');
				panel.classList.add('hide');
			}
		}
	});

	document.addEventListener("keydown", function (e) {
		 if (e.key.toLowerCase() === "t") {
			openTabs();
		}
	});

	const buttons = Array.from(document.getElementsByClassName("button"));

	buttons.forEach(button => button.addEventListener("click", () => {
	    const rawText = button.innerText.trim();
	    const targetId = rawText.replace(/\s+/g, "").toLowerCase();
	    const targetEl = document.getElementById(targetId);
		if (targetEl) openTabs(true);
	    targetEl?.scrollIntoView({ behavior: "smooth", block: "start" });
	}));

	document.getElementById("newtestament").addEventListener("click", function () {
		document.getElementById("slidePanel").className = 'slide-panel newtestament';
	});

	document.getElementById("oldtestament").addEventListener("click", function () {
		document.getElementById("slidePanel").className = 'slide-panel oldtestament';
	});

	const openTabs = () => {
		const huh = panel.classList.contains('hide');
		const hmm = document.getElementsByClassName('mainContent')[0].classList;
		if (huh) {
			panel.classList.remove("hide");
			hmm.add('slide-open');
		} else {
			panel.classList.add("hide");
			hmm.remove('slide-open');
		}
	};

	document.getElementById("slideTabs").addEventListener('click', () => openTabs());

	document.getElementById("slideTabsClose").addEventListener("click", (event) => {
		document.getElementById("slideTabs").style.display = "none";
		event.stopPropagation();
	});
});