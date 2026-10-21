document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('prayerForm');
	const contextInput = document.getElementById('contextInput');
	const charCount = document.getElementById('charCount');
	const termsCheckbox = document.getElementById('termsCheckbox');
	const submitBtn = document.getElementById('submitBtn');

	const capsFirst = (blah) => (typeof blah === 'string') && ((ha) => {
		if (ha) return blah.charAt(0).toUpperCase() + blah.slice(1);
		return blah;
	})(blah.length > 0);

	document.addEventListener('click', (e) => {
		const card = e.target.closest('.prayerCard');
		if (card) {
			const details = JSON.parse(card.getAttribute('data-full'));
			const modal = document.getElementById('fullViewModal');
			if (modal) {
				const customDate = `${new Date(details.date).toLocaleString('en-US', { month: 'short' })} ${(d=new Date(details.date),`${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}/${String(d.getFullYear()).slice(-2)}`)}`;
				modal.innerHTML = `<h2>${details.name} (${capsFirst(details.type.replace("_", " "))})</h2>
					<p><strong>Date:</strong> ${customDate}</p>
					<p>${details.context}</p>
					<span id="closeFullview">
						<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 272.408 272.407" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M272.408,100.988c0-10.772-9.651-19.532-21.506-19.532H21.506C9.649,81.456,0,90.216,0,100.988v70.431 c0,10.771,9.649,19.532,21.506,19.532h229.396c11.854,0,21.506-8.761,21.506-19.532V100.988z M258.071,171.419 c0,2.814-3.286,5.194-7.169,5.194H21.506c-3.885,0-7.169-2.38-7.169-5.194v-70.431c0-2.814,3.284-5.195,7.169-5.195h229.396 c3.883,0,7.169,2.38,7.169,5.195V171.419z"></path> <polygon points="32.441,139.65 57.391,139.65 57.391,130.729 32.441,130.729 32.441,119.822 59.624,119.822 59.624,110.729 21.949,110.729 21.949,162.09 60.875,162.09 60.875,152.854 32.441,152.854 "></polygon> <polygon points="109.576,110.729 97.168,110.729 87.752,127.455 78.596,110.729 65.775,110.729 81.487,135.921 64.973,162.09 77.445,162.09 87.762,144.574 97.516,162.09 110.549,162.09 93.862,135.501 "></polygon> <rect x="115.97" y="110.729" width="10.662" height="51.365"></rect> <polygon points="132.381,119.822 147.825,119.822 147.825,162.09 158.625,162.09 158.625,119.822 173.994,119.822 173.994,110.729 132.381,110.729 "></polygon> <path d="M225.611,106.078c-1.983-1.984-4.093-2.987-6.268-2.987c-3.439,0-6.902,2.611-6.902,8.45v5.703h-16.489 c-6.543,0-11.863,5.323-11.863,11.866v14.186c0,6.543,5.32,11.864,11.863,11.864h16.489v5.703c0,5.838,3.467,8.447,6.902,8.447 c2.175,0,4.279-1.004,6.268-2.991l21.716-21.721c2.25-2.245,3.481-5.223,3.481-8.396s-1.231-6.151-3.481-8.396L225.611,106.078z M240.579,137.84l-18.58,18.589v-10.823h-26.047c-1.278,0-2.306-1.036-2.306-2.311v-14.181c0-1.276,1.036-2.308,2.306-2.308 h26.047v-10.821l18.58,18.586c0.593,0.593,0.681,1.279,0.681,1.639C241.259,136.561,241.171,137.242,240.579,137.84z"></path> </g> </g> </g></svg>
					</span>`;
				document.getElementById('closeFullview').addEventListener('click', () => modal.classList.add('hide'));
				modal.classList.remove('hide');
			}
		}
	});

	if (contextInput) {
		contextInput.addEventListener('input', () => {
			const count = contextInput.value.length;
			charCount.textContent = `${count} / 1500`;
			if (count > 1500) {
				contextInput.value = contextInput.value.substring(0, 1500);
				charCount.textContent = `1500 / 1500`;
			}
		});

		termsCheckbox.addEventListener('change', () => {
			submitBtn.disabled = !termsCheckbox.checked;
		});

		
		let backUp = false;
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			if (backUp) {
				const params = new URLSearchParams(window.location.search);
				const key = params.get("key");
				window.location.href = key ? `/prayers?key=${encodeURIComponent(key)}` : "/prayers";
				backUp = true;
				return;
			}
			const timeOut = () => {
				termsCheckbox.checked = false;
				setTimeout(() => {
					if (form.classList.contains('error')) {
						form.classList.remove('error');
						submitBtn.classList.remove('error');
						submitBtn.textContent = 'Submit';
					}
				}, 6500);
			};
			const formData = new FormData(form);
			const data = Object.fromEntries(formData.entries());
			try {
				const response = await fetch('post', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data)
				});
				const result = await response.json();
				form.classList.remove('success', 'error');
				submitBtn.classList.remove('success', 'error');
				if (result.success) {
					form.classList.add('success');
					submitBtn.classList.add('success');
					submitBtn.textContent = 'Posted! Return to Prayer Wall?';
					backUp = true;
				} else {
					form.classList.add('error');
					submitBtn.classList.add('error');
					submitBtn.textContent = result.message || 'Submission Failed';
					timeOut();
				}
			} catch (err) {
				form.classList.add('error');
				submitBtn.classList.add('error');
				submitBtn.textContent = 'Server Error';
				timeOut();
			}
		});
	}

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

	const applyTheme = (themeToApply = null) => ((params) => {
		const currentTheme = localStorage.getItem('theme');
		const paramTheme = params.get('mode');
		if (paramTheme === 'dark') themeToApply = 'dark';
		else if (!paramTheme && currentTheme === 'dark') themeToApply = 'dark';
		const isDark = themeToApply === 'dark';
		document.body.classList.toggle('dark-mode', isDark);
		if (isDark) localStorage.setItem('theme', 'dark');
		else localStorage.removeItem('theme');
		updateUrlParam('mode', themeToApply);
	})(new URLSearchParams(window.location.search));

	applyTheme();
});