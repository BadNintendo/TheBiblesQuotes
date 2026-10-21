// Safely pass the markdown content as an encoded string
const isDarkMode = () => {
	return (new URLSearchParams(window.location.search).get('mode') == 'dark') ? true : false;
};

const darkMode = (data) => (isDarkMode()) ? `${data}mode=dark` : '';

const dataContainer = document.getElementById("data-container");
const bibles = JSON.parse(dataContainer.getAttribute("data-bibles") || "[]");

const markdownData = `
# <svg height="34px" width="34px" class="svgfill" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path class="svgfill1" d="M250.887,354.896l11.378,114.47c0,9.763,7.914,17.678,17.678,17.678s17.678-7.914,17.678-17.678 l11.378-114.47H250.887z"></path> <path class="svgfill2" d="M297.62,354.896v89.514c0,9.763,7.914,17.678,17.678,17.678c9.763,0,17.678-7.914,17.678-17.678 v-66.758L297.62,354.896z"></path> <path class="svgfill1" d="M191.556,377.651v91.715c0,9.763,7.914,17.678,17.678,17.678c9.763,0,17.678-7.914,17.678-17.678 l11.378-114.47L191.556,377.651z"></path> <path class="svgfill2" d="M226.911,354.896v139.427c0,9.763,7.914,17.678,17.678,17.678c9.763,0,17.678-7.914,17.678-17.678 V354.896H226.911z"></path> <path class="svgfill3" d="M303.859,238.536v-90.894h-94.834v105.333l-17.469,62.496v62.18h141.42c0,0,0-67.198,0-81.946 C332.976,272.205,321.501,251.394,303.859,238.536z"></path> <path class="svgfill2" d="M209.025,230.218c-31.175,10.948-42.425,40.875-42.425,64.375c0,24.609-9.584,47.746-26.985,65.147 c-6.904,6.903-6.903,18.096,0,24.999c6.903,6.903,18.096,6.904,24.999,0c19.084-19.083,31.369-43.151,35.645-69.268 c34.706,0,62.837-28.136,62.837-62.842v-22.412H209.025z"></path> <path class="svgfill4" d="M362.886,86.196C352.262,36.927,308.446,0,255.999,0s-96.263,36.927-106.886,86.196 c-46.223,0.338-83.594,37.899-83.594,84.202H446.48C446.479,124.095,409.109,86.535,362.886,86.196z"></path> </g></svg> **Help Center**

Below are easy-to-follow tips to help you navigate the site and use its features effectively.

---

## **Features and How to Use Them**

#### 1. 🔍 **Enlarge Text by Double-Clicking**
Double-click text to make it bigger. Single-click to return it to normal size.

---

#### 2. 📖  **Search Multiple Bible Verses**
Type multiple chapters or verses in the search bar, separating each with spaces.  

Example:  
\`John 3:16 John 4:5 John 5:2\` → This will display all selected verses together.
→ Double Click the verse TEXT Highlighting is Enabled with a Auto 20s timeout. (Optional Double Click to remove)
→ Trouble with Book Names? (\`Click Here  → Goto #17\`)(#section-17)
→ Want to search a phrase? (\`Click Here  → Goto #18\`)(#section-18)

---

#### 3. ❌ **Clear Search Results**
Simply delete the text in the search field to remove the results.

---

#### 4. 🔎 **Searching Bible References**
Find Bible verses using various formats:

- **Single Verse:** \`John 3:16\`
- **Verse Range:** \`John 3:16-19\`
- **Multiple Verses:** \`John 3:16 John 3:19\`
- **Entire Chapter:** \`Mark 1\`
- **Multiple Books & Chapters:** \`John 3:16 Mark 1 Luke 1:1\`

Spaces between references will be converted into \`%20\` for proper formatting, ensuring links work correctly.
→ Trouble with Book Names? (\`Click Here  → Goto #17\`)(#section-17)
→ Want to search a phrase? (\`Click Here  → Goto #18\`)(#section-18)

---

#### 5. 🎨 **Highlighting Text with Colors**
You can customize highlighted text colors using \`?highlight=colorName,colorName\`.
→ Default is highlight=DarkGray,White

### **How It Works**
- Add \`highlight\` to the URL to change the highlight background and text color.  
- Example: [\`https://thebiblesquotes.com/?highlight=Blue,White\`](https://thebiblesquotes.com/?highlight=Blue,White` + darkMode("&") +`) → **Blue** background, **White** text.

### **Accepted Formats**
- **Single Color:** \`?highlight=Red\` → Red background, default text color.
- **Two Colors:** \`?highlight=DarkBlue,White\` → DarkBlue background, White text.
- **Hex Codes (if supported):** \`?highlight=#FF5733,#FFFFFF\`

---

#### 6. 🔗 **Sharing Bible Verses**
Easily share Bible verses using generated URLs.

→ Trouble with Book Names? (\`Click Here  → Goto #17\`)(#section-17)

### **How It Works**
- Select references (e.g., \`John 3:16 Mark 1 Luke 1:1\`).
- The URL updates automatically.
- Share the link and others can view the same passages.

Example shareable link: [\`https://thebiblesquotes.com/?reference=John%203:16%20Mark%201%20Luke%201:1\`](https://thebiblesquotes.com/?reference=John%203:16%20Mark%201%20Luke%201:1` + darkMode("&") +`)

**Note:**
You can use \`$\` in the reference but \`#\` is not allowed manually use it in the search box if needed.
→ More infor on \`$\`? (\`Click Here  → Goto #18\`)(#section-18)

---

#### 7. 🧭 **Quick Navigation**
- **Click a book name** → Opens the first chapter.
- **Click a chapter name** → Goes directly to that chapter.

---

#### 8. 🌙 **Enable Dark Mode**
Reduce eye strain by adding \`?mode=dark\` to the URL.

Example: [\`https://thebiblesquotes.com/?mode=dark\`](https://thebiblesquotes.com/?mode=dark)

---

#### 9. 🔠 **Change Text Zoom Size**
Adjust text size using \`?zoom=110\` (percentage-based).

Example: [\`https://thebiblesquotes.com/?zoom=125\`](https://thebiblesquotes.com/?zoom=125` + darkMode("&") +`) → Increases zoom to 125%.

---

#### 10. 📚 **Select Specific Bible Versions**
Load different Bible translations using the \`bible\` parameter.

Example: [\`https://thebiblesquotes.com/?bible=NKJV,KJV\`](https://thebiblesquotes.com/?bible=NKJV,KJV` + darkMode("&") +`) → Loads NKJV & KJV versions.

Current supported versions:` + 
bibles.map(version => `\n- **(${version})** → **${getFullName(version)}**`).join("") + `

---

#### 11. 🔄 **Continuous Scrolling for Books**
As you scroll, more chapters load automatically except for fixed search results.

---

#### 12. 🧬 **Using the Bible Search API**
Retrieve Bible verses directly via URL parameters.

### **How It Works**
Use \`/api\` **OR** \`/search\` with the \`ref\` parameter:

Example:  
[\`https://thebiblesquotes.com/api?ref=John+3:16&bible=KJV&format=json\`](https://thebiblesquotes.com/api?ref=John+3:16&bible=KJV&format=json` + darkMode("&") +`) → Fetches John 3:16 in KJV in JSON.
**OR**
[\`https://thebiblesquotes.com/search?ref=John+3:16&bible=KJV&format=json\`](https://thebiblesquotes.com/search?ref=John+3:16&bible=KJV&format=json` + darkMode("&") +`) → Fetches John 3:16 in KJV in JSON.

### **Supported Query Parameters**

- **ref=** [Required] → Book, chapter, and verse (e.g., \`John 3:16\`).
- **bible=** [Optional] → Specify versions (comma-separated).
- **format=** [Optional] → Choose output: \`json\`, \`xml\`, \`txt\`, \`html\`, \`csv\`, \`yaml\`, \`tsv\`.
- **hash=** [Optional] → Personal log hash for tracking. (\`Click Here  → Goto #21\`)(#section-21)
- **tooltip=** [Optional] → true/false Default is false and true changes the tooltips/hints

### **Format Options**
Modify \`format=\` to change output type:  
- XML → [\`...?ref=John+3:16&format=xml\`](https://thebiblesquotes.com/api?ref=John+3:16&bible=KJV&format=xml` + darkMode("&") +`)
- TXT → [\`...?ref=John+3:16&format=txt\`](https://thebiblesquotes.com/api?ref=John+3:16&bible=KJV&format=txt` + darkMode("&") +`)
- CSV → [\`...?ref=John+3:16&format=csv\`](https://thebiblesquotes.com/api?ref=John+3:16&bible=KJV&format=csv` + darkMode("&") +`)

If \`format\` is missing, the response default to **JSON** with html added.
→ Trouble with Book Names? (\`Click Here  → Goto #17\`)(#section-17)

---

#### 13. 📅 **Study Index & Daily Summary Access**
Retrieve structured KJV chapter summaries full index or daily highlights via simple URL parameters.

### **How It Works**
Use \`/study\` on  [\`https://thebiblesquotes.com\`](https://thebiblesquotes.com` + darkMode("?") +`)  with either \`index\` or \`daily\` flags.

### **Index Summary (All Chapters)**
Returns all books and chapters with sectional summaries.

**Example URLs**:
- Default → [\`.../study?index\`](https://thebiblesquotes.com/study?index` + darkMode("&") +`)
- JSON → [\`.../study?index&format=json\`](https://thebiblesquotes.com/study?index&format=json` + darkMode("&") +`)
- TXT → [\`.../study?index&format=txt\`](https://thebiblesquotes.com/study?index&format=txt` + darkMode("&") +`)

### **Daily Summary (One Chapter Per Day)**
Returns today's featured chapter summary.

**Example URLs**:
- Default → [\`.../study?index\`](https://thebiblesquotes.com/study?daily` + darkMode("&") +`)
- JSON → [\`.../study?daily&format=json\`](https://thebiblesquotes.com/study?daily&format=json` + darkMode("&") +`)
- HTML → [\`.../study?daily\`](https://thebiblesquotes.com/study?daily` + darkMode("&") +`)
- CSV → [\`.../study?daily&format=csv\`](https://thebiblesquotes.com/study?daily&format=csv` + darkMode("&") +`)

### **Supported Formats**
Append \`format=\` to customize output:

- **format=** [Optional] → Choose output: \`json\` (default), \`xml\`, \`txt\`, \`html\`, \`csv\`, \`yaml\`, \`tsv\`.

### **Open Scrollable Bible Panel (Press "T")**  
Tap the **T** key on your keyboard to open a side panel with buttons linked to every book and chapter.  
Use it to quickly scroll to any part of the page no endless swiping required.  
On mobile and tablets, swiping left or right reveals or hides the panel just as easily.

---

#### 14. 🔊 **TTS - Text to Speech**
Open Menu and Select Voice Type.

Example:  
EN → English
FR → French
GR → German
SP → Spanish

---

#### 15. 🎥 **Host Live Sessions**  
Start a live Bible study session using \`?host\` (parameter optional or can be left empty).

**Examples:**  
- Default method → Default [\`https://live.thebiblesquotes.com/?host\`](https://live.thebiblesquotes.com/?host` + darkMode("&") +`) → Default hosting method
- Alternative method → Alternative: [\`https://thebiblesquotes.com/live?host\`](https://thebiblesquotes.com/live?host` + darkMode("&") +`) → Alternative hosting method

**Additional Info:**  
- If you’ve initiated a session on this device, you can rejoin it later-even after closing or navigating away-provided it's within the session’s active time window.  
- Double-clicking a verse enables text highlighting with an auto 20-second timeout. (You can double-click again to disable it.)  
- Trouble with book names? Jump to (\`Click Here  → Goto #17\`)(#section-17) for guidance.

---

#### 16. 🗂️ **Live Directory Page**  
View all active Bible study sessions. Only the host can add an entry; others view in default mode.

**Examples:** 
- Default view → [\`https://live.thebiblesquotes.com/directory\`](https://live.thebiblesquotes.com/directory` + darkMode("?") +`)
- Alternative view → [\`https://thebiblesquotes.com/live/directory\`](https://thebiblesquotes.com/live/directory` + darkMode("?") +`)

**Additional Info:**  
- If the host leaves, the session will expire after 1 hour. Sessions are designed for live interaction and offer a brief reconnection window before closing permanently.

---

#### 17. ❓ **Trouble with Book Names or Missing Verses?**  
Use the following examples for reference:

- Books with only one chapter (e.g., 2 John, 3 John) require “1” to be added as the chapter:  
→ Use \`2 John 1\` or \`3 John 1\` to display the content.  
- For single-chapter books like Obadiah, use the full verse reference:  
→ \`Obadiah 1:2-6\`

---

#### 18. 🧠 **Searching a phrase from the selected Bible or Bibles**
Need to find a verse that speaks to you? Use symbolic search syntax to reveal different layers of meaning:

- **Use \`$Jesus\` for exact keyword matching.**  
  _Think of it like “shelling out” a precise insight._  
  Example: \`$grace\` → returns only verses containing the exact word **grace**.

- **Use \`#Jesus\` for thematic or partial matching.**  
  _Like tracing the trail of truth across conceptually linked verses._  
  Example: \`#grace\` → returns verses that contain **grace**, **gracious**, and other word variations.

Each symbol activates a different search style. The \`$\` prefix enforces whole-word boundaries, while \`#\` uses broader pattern matching that can uncover deeper or related contexts within Scripture.

### 💡 Mnemonics That Stick

- \`$\` → “Spiritual withdrawal” - extracting exact keyword matches from the text.  
- \`#\` → “Heaven” - exploring threads of related meaning, like mercy, favor, or divine gifts.

---

#### 19. 📐 **Change Page Size**
Adjust the page width by using \`?size=small\` in the URL. The default is \`size=full\` [Optional].

Example: [\`https://thebiblesquotes.com/?size=small\`](https://thebiblesquotes.com/?size=small` + darkMode("&") +`) → Use this to switch to the smaller page layout. Additional parameters can be added for layout customization.

**Alternatively:**  
Navigate to the site’s menu-if available on the page-and select **Page Size** to switch views without using URL parameters.

---

#### 20. 🙌 **Custom Prayer Wall**  
Need prayers for a purpose other than public listing?

Custom prayer wall access is available by using a key for example: \`?key=whatever\` in the URL. This key must be 1–32 characters long and is optional; if omitted, the prayer will be listed publicly.
Editable prayers remain accessible for 7 days, as long as you're using the same device. Through secure local server-side memory, you can modify your prayer without duplicates or re-entries during this period.

Example: [\`https://thebiblesquotes.com/prayers?key=whatever\`](https://thebiblesquotes.com/prayers?key=whatever` + darkMode("&") +`) → Use this to view an example. Additional parameters can be added for layout customization.

**Note:**  
This works only through the URL using the \`key=\` parameter. The key must be 1–32 characters long and may include only letters (a–Z) and numbers (0–9). Dashes and other special characters are not allowed. This key will only be shared with you and anyone you choose to share it with.
Prayers will last until first of every year unless data is overwelmed then the cleansning will happen to oldest prayers which have aleady been seen. Be sure you pray for all those you are willing to read. 

---

#### 21. 📝 **Personal Logs [Optional]**
Need to keep up with main websites searched chapters and verses or API searches? 

Visit: [\`https://thebiblesquotes.com/logs\`](https://thebiblesquotes.com/logs` + darkMode("?") +`) → Use this to create a (hash) for personal logs

**Note:**
To use you can add both by adding \`token=\` \`hash=\` to the URL, but only one required which is \`hash=\`. Please be sure to add your personal hash after the \`=\`

---

#### 22. ⚙️ **Change Tooltip [Optional]**
The tooltip hints will change instantly on homepage and api but on live host controls which tooltips are shown.

---

#### 23. **Trouble with URL Parameters?**

When adding parameters to a URL, the first one must be introduced with a \`?\`, placed immediately after the base URL (e.g., \`.com\`, etc.). Each additional parameter is then separated using an \`&\`. This structure allows web servers to correctly interpret the query string.

**Example:**
[\`https://thebiblesquotes.com/?bible=BISHOPS&mode=dark\`](https://thebiblesquotes.com/?bible=BISHOPS&mode=dark)

- \`&bible=BISHOPS\` adds another parameter  
- \`&mode=dark\` adds yet another

**Tip:** If you're encountering \`404\` errors or unexpected results, double-check your URL for:
- Missing or misplaced \`?\` and \`\` symbols  
- Incorrect parameter names or values  
- Encoding issues (e.g., spaces should be \`%20\`)

Proper formatting ensures your requests are parsed accurately and routed to the correct resources.

---

#### 24. 📖 **Full Bible View**
- Access the complete Bible text you can specify a particular Bible version. For example, to view the full text of the King James Version (KJV), use:
Example: [\`https://thebiblesquotes.com/fullbible/KJV/\`](https://thebiblesquotes.com/fullbible/KJV/` + darkMode("&") +`) or [\`https://thebiblesquotes.com/bible/KJV/\`](https://thebiblesquotes.com/bible/KJV/` + darkMode("&") +`)

- You can also combine this with other parameters like \`mode=dark\` for dark mode enhancing your reading experience.
Example: [\`https://thebiblesquotes.com/fullbible/KJV/?mode=dark\`](https://thebiblesquotes.com/fullbible/KJV/?mode=dark)

- This view supports continuous scrolling, allowing you to navigate through the entire Bible seamlessly. Simply scroll down to read more, and the interface will load additional chapters as you progress.

---

## ✝️ **Support, Feedback, and Study the Bible (Isaiah 55:11)**

### 🔍 Deepen Your Understanding of Scripture  
- Explore biblical themes and teachings with clarity on our [\`Study Page\`](/study). Whether you're new to faith or deeply rooted in Scripture, these resources are designed to help you grow spiritually and walk boldly in truth.

---

### 📚 Request a Specific Bible Version  
- We offer widely used translations, but if there's a version you'd like to see added, just reach out. We're committed to making God's Word accessible in the format that speaks to your heart.

---

### 📖 About the 2025 Bible Quotes Edition  
- Built upon the King James Version (KJV), the 2025 Edition refines presentation while preserving the sacred message. This update ensures that God's Word remains readable and reverent for modern audiences-without compromising its integrity.

---

### 💡 Ways to Support This Mission  
- If TheBibleQuotes has blessed you, here are ways to help us continue sharing the Word freely and without ads:

- 📣 **Spread the Word:** Share with friends, family, and your faith community
- 🗣️ **Feedback:** Help us improve by sharing your thoughts and suggestions
- 💵 **CashApp:** \`$nintendotats\`

---

### ₿ Donate via Cryptocurrency  
- Support us with **Bitcoin (BTC)** only. Please use the following address: \`39opS447z6xh3Z5GWBdhdSsaVvmYYXLUMT\`

⚠️ **Important:** Do **NOT** send BCH (Bitcoin Cash). Transactions with the wrong currency may be lost.

---

## ❔ **About TheBibleQuotes**

- TheBibleQuotes is a faith-rooted platform built with one mission: to share the Word of God freely, purely, and without compromise. As a Pentecostal Christian who stands firmly on Scripture, I created this space to offer the Bible without ads, distractions, or data tracking-because the message of salvation should never be filtered or monetized.

- I believe in the power of God's Word to transform lives. If this site reaches even one soul and draws them closer to Christ, then it has fulfilled its purpose. Every verse, every page, is offered as a gift-no strings attached, no commercial influence, just the truth of the Gospel.

- This platform is sustained by faith and the generosity of those who believe in its mission. Donations are never required, but they help expand access and improve the experience for others seeking God’s Word. Whether you're here to study, reflect, or share Scripture with others, I pray this site serves you well.
- Thank you for being part of this journey. May the Word of God enrich your life and lead you into deeper relationship with Jesus Christ.`;

const parseMarkdown = (markdown) => {
	let headingIndex = 0;
	let html = `<div class="markdownContainer">`;
	const formatInline = text => text
			.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>')
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*([^*]+)\*/g, '<em>$1</em>')
			.replace(/\((.*?)\)\((.*?)\)/g, '<a href="$2" class="md-link">$1</a>')
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="md-link">$1</a>')
			.replace(/(^|[^\\])_([^_]+)_/g, '$1<em>$2</em>');
	const lines = markdown.split('\n');
	let inList = false, inCodeBlock = false, codeBuffer = [], index = 0;
	for (let line of lines) {
		const isLast = index === lines.length - 1;
		if (/^```/.test(line)) {
			inCodeBlock = !inCodeBlock;
			if (!inCodeBlock) {
				html += `<pre><code>${codeBuffer.join('\n')}</code></pre>`;
				codeBuffer = [];
			}
			continue;
		}
		if (inCodeBlock) {
			codeBuffer.push(line);
			continue;
		}
		if (/^#\s/.test(line)) {
			const content = formatInline(line.replace(/^#\s/, ''));
			html += `<h1 class="md-h1">${content}</h1>`;
		} else if (/^##\s/.test(line)) {
			const content = formatInline(line.replace(/^##\s/, ''));
			html += `<h2 class="md-h2">${content}</h2>`;
		} else if (/^###\s/.test(line)) {
			const content = formatInline(line.replace(/^###\s/, ''));
			html += `<h3 class="md-h3">${content}</h3>`;
		} else if (/^####\s/.test(line)) {
			headingIndex++;
			const title = formatInline(line.replace(/^####\s/, ''));
			html += `<h4 id="section-${headingIndex}" class="md-h4">${title}</h4>`;
		} else if (/^---$/.test(line)) {
			if (index === 0) html += `<div class="pad inneroutter">`;
			else if (isLast) html += `</div>`;
			else html += `</div><hr class="md-hr"><div class="pad inneroutter">`;
			index++;
		} else if (/^>\s/.test(line)) {
			html += `<blockquote class="md-blockquote">${formatInline(line.replace(/^>\s/, ''))}</blockquote>`;
		} else if (/^(\*|\-|\d+\.)\s/.test(line)) {
			if (!inList) {
				html += `<ul class="md-list">`;
				inList = true;
			}
			const item = formatInline(line.replace(/^(\*|\-|\d+\.)\s/, ''));
			html += `<li class="md-list-item">${item}</li>`;
		} else {
			if (inList) {
				html += `</ul>`;
				inList = false;
			}
			const formatted = formatInline(line);
			if (formatted.trim()) {
				html += `<p class="md-paragraph">${formatted}</p>`;
			}
		}
	}
	if (inList) html += `</ul>`;
	html += `</div>`;
	return html;
};

const htmlContent = parseMarkdown(markdownData);
document.getElementById('helpContent').innerHTML = htmlContent;