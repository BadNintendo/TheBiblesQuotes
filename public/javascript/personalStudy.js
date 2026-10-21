const store = { pageData: { containers: {} } };

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const controlInputs = document.getElementById('controlInputs');
  const textInputs = document.getElementById('textInputs');
  const fontSelection = document.getElementById('font-selection');
  const toggleHighlight = document.getElementById('toggleHighlight');
  const colorGrid = document.getElementById('colorGrid');
  const highlightExample = document.getElementById('highlightExample');
  const coloredDot = document.getElementById('coloredDot');
  const colorModeBtns = document.querySelectorAll('#colorModeToggle button');
  const toggleBgBtn = document.getElementById('toggleBg');
  const toggleTxtBtn = document.getElementById('toggleTxt');
  const themeToggle = 	document.getElementById('theme-toggle');

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


const handleImageUpload = (file) => { // may change form body to changable container that can be sized
	if (file && file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
		const reader = new FileReader();
		reader.onload = (e) => {
			const container = document.getElementById('content');
			store.pageData.backgroundImage = (e.target.result);
			document.body.style.background = `url('${e.target.result}') no-repeat center center / cover transparent`;
		};
		reader.readAsDataURL(file);
	} else {
		alert('File is too large or not an acceptable image format');
	}
};

document.getElementById('file-uploader').addEventListener('click', () => {
	document.getElementById('file-upload').click();
});

document.getElementById('file-upload').addEventListener('change', (event) => {
	const file = event.target.files[0];
	handleImageUpload(file);
});

document.getElementById('file-uploader').addEventListener('dragover', (event) => {
	event.preventDefault();
	event.stopPropagation();
	document.getElementById('file-uploader').classList.add('dragging');
});

document.getElementById('file-uploader').addEventListener('dragleave', (event) => {
	event.preventDefault();
	event.stopPropagation();
	document.getElementById('file-uploader').classList.remove('dragging');
});

document.getElementById('file-uploader').addEventListener('drop', (event) => {
	event.preventDefault();
	event.stopPropagation();
	document.getElementById('file-uploader').classList.remove('dragging');
	const file = event.dataTransfer.files[0];
	handleImageUpload(file);
});

  let selectedContainer = null;
  let containerValue = 0;
  let selectiveBehavior = null;
  let currentMode = 'bg';
  let currentIndex = 0;

  const htmlColors = ['#FF5733', '#33FF57', '#3357FF', '#F0F0F0', '#000000', '#FFD700', '#800080', '#00FFFF', '#FF00FF'];
  const darkTheme = ['#1a1a1a', '#333333', '#4d4d4d', '#666666', '#999999'];

  const autoHideAll = () => {
    textInputs.classList.add('hide');
    fontSelection.classList.add('hide');
    toggleHighlight.classList.add('hide');
  };

  const applyStyleToSelected = (prop, value) => {
    const el = document.getElementById(selectedContainer);
    if (el) el.style[prop] = value;
  };

  const createContainer = () => {
    autoHideAll();
    const id = `created-${containerValue++}`;
    selectedContainer = id;

    const div = document.createElement('div');
    div.id = id;
    div.className = 'move';
    div.contentEditable = true;
    div.style.cssText = 'position:absolute;top:350px;left:150px;width:150px;height:150px;cursor:grab;border:1px solid #ccc;';
    content.appendChild(div);

    store.pageData.containers[id] = {
      left: 150,
      top: 350,
      width: 150,
      height: 150,
      editable: true
    };

    let dragActive = false, offsetX, offsetY;

    div.addEventListener('mousedown', (e) => {
      if (!store.pageData.containers[id].editable) return;
      dragActive = true;
      offsetX = e.clientX - div.offsetLeft;
      offsetY = e.clientY - div.offsetTop;
      div.style.cursor = 'grabbing';
      selectedContainer = id;

      const onMouseMove = (moveEvent) => {
        if (!dragActive) return;
        div.style.left = `${moveEvent.clientX - offsetX}px`;
        div.style.top = `${moveEvent.clientY - offsetY}px`;
      };

      const onMouseUp = () => {
        dragActive = false;
        div.style.cursor = 'grab';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        store.pageData.containers[id].left = parseInt(div.style.left);
        store.pageData.containers[id].top = parseInt(div.style.top);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    div.addEventListener('click', () => {
      selectedContainer = id;
    });
  };

  const removeSelectedContainer = () => {
    if (!selectedContainer) return;
    const el = document.getElementById(selectedContainer);
    if (el) el.remove();
    delete store.pageData.containers[selectedContainer];
    selectedContainer = null;
  };

  const renderColorGrid = () => {
    colorGrid.innerHTML = '';
    const isDark = document.body.classList.contains('dark-mode');
    const palette = isDark ? [...htmlColors, ...darkTheme] : htmlColors;
    const visible = palette.slice(currentIndex, currentIndex + 9);

    visible.forEach(color => {
      const square = document.createElement('div');
      square.className = 'colorSquare';
      square.style.backgroundColor = color;
      square.title = color;
      square.addEventListener('click', () => applyHighlight(color));
      colorGrid.appendChild(square);
    });
  };

  const applyHighlight = (color) => {
    const el = document.getElementById(selectedContainer);
    if (!el) return;
    if (currentMode === 'bg') el.style.backgroundColor = color;
    else el.style.color = color;
    highlightExample.style[currentMode === 'bg' ? 'backgroundColor' : 'color'] = color;
    highlightExample.style.borderColor = 'red';
    coloredDot.style.color = 'red';
  };

  const setActiveToggle = (id) => {
    colorModeBtns.forEach(btn => btn.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
  };

  // Event Bindings
  document.getElementById('addContainer').addEventListener('click', createContainer);
  document.getElementById('removeContainer').addEventListener('click', removeSelectedContainer);

  document.getElementById('selectFont').addEventListener('click', () => {
    autoHideAll();
    fontSelection.classList.remove('hide');
  });

  document.getElementById('colorSelection').addEventListener('click', () => {
    autoHideAll();
    controlInputs.classList.remove('hide');
    toggleHighlight.classList.remove('hide');
    renderColorGrid();
  });

  document.getElementById('textLeft').addEventListener('click', () => applyStyleToSelected('textAlign', 'left'));
  document.getElementById('textCenter').addEventListener('click', () => applyStyleToSelected('textAlign', 'center'));
  document.getElementById('textRight').addEventListener('click', () => applyStyleToSelected('textAlign', 'right'));

  document.getElementById('textPadding').addEventListener('click', () => {
    selectiveBehavior = 'textPadding';
    autoHideAll();
    controlInputs.classList.remove('hide');
    textInputs.classList.remove('hide');
    textInputs.value = '';
  });

  document.getElementById('timedContainer').addEventListener('click', () => {
    selectiveBehavior = 'timedContainer';
    autoHideAll();
    controlInputs.classList.remove('hide');
    textInputs.classList.remove('hide');
    textInputs.value = '';
  });

  document.getElementById('font-select').addEventListener('change', (e) => {
    applyStyleToSelected('fontFamily', e.target.value);
  });

  document.getElementById('fontSizeUp').addEventListener('click', () => {
    const el = document.getElementById(selectedContainer);
    if (!el) return;
    const size = parseInt(window.getComputedStyle(el).fontSize);
    applyStyleToSelected('fontSize', `${size + 2}px`);
  });

  document.getElementById('fontSizeDown').addEventListener('click', () => {
    const el = document.getElementById(selectedContainer);
    if (!el) return;
    const size = parseInt(window.getComputedStyle(el).fontSize);
    applyStyleToSelected('fontSize', `${Math.max(size - 2, 8)}px`);
  });

  document.getElementById('boldToggle').addEventListener('click', () => {
    const el = document.getElementById(selectedContainer);
    el.style.fontWeight = el.style.fontWeight === 'bold' ? 'normal' : 'bold';
  });

  document.getElementById('italicToggle').addEventListener('click', () => {
    const el = document.getElementById(selectedContainer);
    el.style.fontStyle = el.style.fontStyle === 'italic' ? 'normal' : 'italic';
  });

  document.getElementById('underlineToggle').addEventListener('click', () => {
    const el = document.getElementById(selectedContainer);
    el.style.textDecoration = el.style.textDecoration === 'underline' ? 'none' : 'underline';
  });

  document.getElementById('lockContainer').addEventListener('click', () => {
    if (!selectedContainer) return;
    const container = store.pageData.containers[selectedContainer];
    if (container) {
      container.editable = !container.editable;
      const el = document.getElementById(selectedContainer);
      el.contentEditable = container.editable;
      el.style.borderColor = container.editable ? '#ccc' : 'red';
    }
  });

  document.getElementById('toggleHighlightContainer')?.addEventListener('click', () => {
    toggleHighlight.classList.toggle('hide');
    renderColorGrid();
  });

  [toggleBgBtn, toggleTxtBtn].forEach(btn => {
    btn?.addEventListener('click', () => {
            currentMode = btn.id === 'toggleBg' ? 'bg' : 'txt';
      setActiveToggle(btn.id);
    });
  });

  // Handle custom input values
  textInputs.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    const el = document.getElementById(selectedContainer);
    if (!el || !value) return;

    switch (selectiveBehavior) {
      case 'textPadding':
        el.style.padding = /^\d+$/.test(value) ? `${value}px` : value;
        break;
      case 'timedContainer':
        const delay = /^\d+$/.test(value) ? parseInt(value) * 1000 : 3000;
        el.style.opacity = '0';
        setTimeout(() => {
          el.style.opacity = '1';
        }, delay);
        break;
      default:
        console.log(`Unhandled behavior: ${selectiveBehavior}`);
    }

    // Reset behavior after applying
    selectiveBehavior = null;
    textInputs.value = '';
    autoHideAll();
  });

  // Optional: Export layout as HTML
  document.getElementById('exportHTML')?.addEventListener('click', () => {
    const exportData = Object.entries(store.pageData.containers).map(([id, props]) => {
      const el = document.getElementById(id);
      return `<div id="${id}" style="${el.getAttribute('style')}">${el.innerHTML}</div>`;
    }).join('\n');
    console.log('Exported HTML:\n', exportData);
    alert('Layout exported to console.');
  });

  // Optional: Import layout from JSON
  document.getElementById('importJSON')?.addEventListener('click', () => {
    const json = prompt('Paste your JSON layout:');
    try {
      const data = JSON.parse(json);
      Object.entries(data).forEach(([id, props]) => {
        const el = document.createElement('div');
        el.id = id;
        el.className = 'move';
        el.contentEditable = props.editable;
        el.style.position = 'absolute';
        el.style.left = `${props.left}px`;
        el.style.top = `${props.top}px`;
        el.style.width = `${props.width}px`;
        el.style.height = `${props.height}px`;
        el.style.border = '1px solid #ccc';
        el.innerHTML = props.content || '';
        content.appendChild(el);
        store.pageData.containers[id] = props;

        el.addEventListener('click', () => {
          selectedContainer = id;
        });
      });
      alert('Layout imported.');
    } catch (err) {
      alert('Invalid JSON.');
    }
  });

  // Optional: Keyboard shortcut to delete selected container
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Delete' && selectedContainer) {
      removeSelectedContainer();
    }
    if (!toggleHighlight.classList.contains('hide') && e.key === 'Tab') {
      e.preventDefault();
      currentIndex = (currentIndex + 9) % htmlColors.length;
      renderColorGrid();
    }
  });
});