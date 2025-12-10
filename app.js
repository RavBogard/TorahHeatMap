const parashot = [
    // Genesis (Bereshit)
    { name: "Bereshit", ref: "Genesis 1:1-6:8", heName: "בראשית" },
    { name: "Noach", ref: "Genesis 6:9-11:32", heName: "נח" },
    { name: "Lech-Lecha", ref: "Genesis 12:1-17:27", heName: "לך לך" },
    { name: "Vayera", ref: "Genesis 18:1-22:24", heName: "וירא" },
    { name: "Chayei Sara", ref: "Genesis 23:1-25:18", heName: "חיי שרה" },
    { name: "Toldot", ref: "Genesis 25:19-28:9", heName: "תולדות" },
    { name: "Vayetzei", ref: "Genesis 28:10-32:3", heName: "ויצא" },
    { name: "Vayishlach", ref: "Genesis 32:4-36:43", heName: "וישלח" },
    { name: "Vayeshev", ref: "Genesis 37:1-40:23", heName: "וישב" },
    { name: "Miketz", ref: "Genesis 41:1-44:17", heName: "מקץ" },
    { name: "Vayigash", ref: "Genesis 44:18-47:27", heName: "ויגש" },
    { name: "Vayechi", ref: "Genesis 47:28-50:26", heName: "ויחי" },

    // Exodus (Shemot)
    { name: "Shemot", ref: "Exodus 1:1-6:1", heName: "שמות" },
    { name: "Vaera", ref: "Exodus 6:2-9:35", heName: "וארא" },
    { name: "Bo", ref: "Exodus 10:1-13:16", heName: "בא" },
    { name: "Beshalach", ref: "Exodus 13:17-17:16", heName: "בשלח" },
    { name: "Yitro", ref: "Exodus 18:1-20:23", heName: "יתרו" },
    { name: "Mishpatim", ref: "Exodus 21:1-24:18", heName: "משפטים" },
    { name: "Terumah", ref: "Exodus 25:1-27:19", heName: "תרומה" },
    { name: "Tetzaveh", ref: "Exodus 27:20-30:10", heName: "תצוה" },
    { name: "Ki Tisa", ref: "Exodus 30:11-34:35", heName: "כי תשא" },
    { name: "Vayakhel", ref: "Exodus 35:1-38:20", heName: "ויקהל" },
    { name: "Pekudei", ref: "Exodus 38:21-40:38", heName: "פקודי" },

    // Leviticus (Vayikra)
    { name: "Vayikra", ref: "Leviticus 1:1-5:26", heName: "ויקרא" },
    { name: "Tzav", ref: "Leviticus 6:1-8:36", heName: "צו" },
    { name: "Shmini", ref: "Leviticus 9:1-11:47", heName: "שמיני" },
    { name: "Tazria", ref: "Leviticus 12:1-13:59", heName: "תזריע" },
    { name: "Metzora", ref: "Leviticus 14:1-15:33", heName: "מצורע" },
    { name: "Achrei Mot", ref: "Leviticus 16:1-18:30", heName: "אחרי מות" },
    { name: "Kedoshim", ref: "Leviticus 19:1-20:27", heName: "קדושים" },
    { name: "Emor", ref: "Leviticus 21:1-24:23", heName: "אמור" },
    { name: "Behar", ref: "Leviticus 25:1-26:2", heName: "בהר" },
    { name: "Bechukotai", ref: "Leviticus 26:3-27:34", heName: "בחוקתי" },

    // Numbers (Bamidbar)
    { name: "Bamidbar", ref: "Numbers 1:1-4:20", heName: "במדבר" },
    { name: "Nasso", ref: "Numbers 4:21-7:89", heName: "נשא" },
    { name: "Beha'alotcha", ref: "Numbers 8:1-12:16", heName: "בהעלותך" },
    { name: "Sh'lach", ref: "Numbers 13:1-15:41", heName: "שלח" },
    { name: "Korach", ref: "Numbers 16:1-18:32", heName: "קרח" },
    { name: "Chukat", ref: "Numbers 19:1-22:1", heName: "חקת" },
    { name: "Balak", ref: "Numbers 22:2-25:9", heName: "בלק" },
    { name: "Pinchas", ref: "Numbers 25:10-30:1", heName: "פנחס" },
    { name: "Matot", ref: "Numbers 30:2-32:42", heName: "מטות" },
    { name: "Masei", ref: "Numbers 33:1-36:13", heName: "מסעי" },

    // Deuteronomy (Devarim)
    { name: "Devarim", ref: "Deuteronomy 1:1-3:22", heName: "דברים" },
    { name: "Vaetchanan", ref: "Deuteronomy 3:23-7:11", heName: "ואתחנן" },
    { name: "Eikev", ref: "Deuteronomy 7:12-11:25", heName: "עקב" },
    { name: "Re'eh", ref: "Deuteronomy 11:26-16:17", heName: "ראה" },
    { name: "Shoftim", ref: "Deuteronomy 16:18-21:9", heName: "שופטים" },
    { name: "Ki Teitzei", ref: "Deuteronomy 21:10-25:19", heName: "כי תצא" },
    { name: "Ki Tavo", ref: "Deuteronomy 26:1-29:8", heName: "כי תבוא" },
    { name: "Nitzavim", ref: "Deuteronomy 29:9-30:20", heName: "נצבים" },
    { name: "Vayeilech", ref: "Deuteronomy 31:1-31:30", heName: "וילך" },
    { name: "Ha'azinu", ref: "Deuteronomy 32:1-32:52", heName: "האזינו" },
    { name: "Vezot Haberakhah", ref: "Deuteronomy 33:1-34:12", heName: "וזאת הברכה" }
];

const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];

// State
let currentParasha = null;
let verseData = {}; // { "Genesis 1:1": { text: "...", count: 120 } }
let maxCount = 0;

// API Utils
const API_BASE = 'https://www.sefaria.org/api';

async function get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json();
}

// Initialization
function init() {
    renderSidebar();
}

function renderSidebar() {
    const container = document.getElementById('nav-container');

    books.forEach(book => {
        // Find parashot for this book
        const bookParashot = parashot.filter(p => p.ref.startsWith(book));
        if (bookParashot.length === 0) return;

        const section = document.createElement('div');
        section.className = 'book-section';

        const title = document.createElement('div');
        title.className = 'book-title';
        title.textContent = book;
        section.appendChild(title);

        bookParashot.forEach(p => {
            const item = document.createElement('div');
            item.className = 'parasha-item';
            item.innerHTML = `<span>${p.name}</span> <span style="font-size:0.8em; opacity:0.6">${p.heName}</span>`;
            item.onclick = () => loadParasha(p);
            section.appendChild(item);
        });

        container.appendChild(section);
    });
}

async function loadParasha(parasha) {
    currentParasha = parashot;

    // Update Header
    document.getElementById('parasha-title').textContent = parasha.name;
    document.getElementById('parasha-hebrew').textContent = parasha.heName;
    const refBadge = document.getElementById('parasha-ref');
    refBadge.textContent = parasha.ref;
    refBadge.style.display = 'block';

    // Set Active State in Sidebar
    document.querySelectorAll('.parasha-item').forEach(el => el.classList.remove('active'));
    // (Simple way to highlight - in a real app we'd track the element or use ID)

    // Show Loading
    const heatmapContainer = document.getElementById('heatmap-container');
    heatmapContainer.innerHTML = `<div class="loading-state">Loading ${parasha.ref}... this may take a moment.</div>`;

    try {
        // 1. Get the Text to determine structure (Chapters & Verses)
        // We accept the flattening of the text to handle the range
        // context=0 ensures we just get the requested range
        const textData = await get(`/texts/${parasha.ref}?context=0&pad=0`);

        // 2. Parse text data into a structure
        // textData.text can be Array of Strings (if 1 chapter) or Array of Arrays (if multiple chapters)
        // We need to normalize this. Sefaria usually returns a jagged array for ranges crossing chapters.

        // Let's use the `sections` and `toSections` from api/texts response to map accurately?
        // textData.sections = [startChap, startVerse];
        // textData.toSections = [endChap, endVerse];

        const startChap = textData.sections[0];
        // The text array is 0-indexed relative to the startChap.

        verseData = {};
        let chapterStructure = []; // { number: 6, verses: 10 } (count)

        const rawText = Array.isArray(textData.text[0]) ? textData.text : [textData.text];

        rawText.forEach((chapVerses, i) => {
            const chapNum = startChap + i;
            // Filter out empty or null verses if any (sometimes happens with empty jagged arrays?)
            if (Array.isArray(chapVerses)) {
                const validVerses = chapVerses.filter(v => v !== null && v !== "");

                chapterStructure.push({
                    chapter: chapNum,
                    count: validVerses.length,
                    // We need to know the starting verse number for the first chapter in the range
                    startVerse: (i === 0) ? textData.sections[1] : 1
                });
            } else {
                // Single chapter case being treated as array of verses?
                // If rawText was [ "v1", "v2" ] -> we wrapped to [[...]]
                // If it was already [[...]] we are good.
            }
        });

        // 3. Fetch Link Counts
        // Fetching entire parasha related links might be huge.
        // Let's fetch per-chapter to handle distinct chunks and update UI progressively if we wanted,
        // but for now let's just do parallel fetches.


        const linkPromises = chapterStructure.map(async (chap) => {
            // Construct Ref
            // If it's a full chapter, "Book X"
            // But we have partials.
            // Simplest: "Book Chap:Start-End"
            // We need to know how many verses to construct the end ref?
            // Or we just ask for "Book Chap" and filter later? 
            // "Book Chap" gives us ALL links for that chapter.
            // If we ask for related/Genesis.6 - it returns links for Gen 6:1, 6:2...
            // We can then map them to our heatmap.

            // Ref Correction: "Genesis 6" not "Genesis.6" for text ref usually, but API accepts dots or spaces.

            const chapRef = `${textData.book} ${chap.chapter}`;
            const links = await get(`/related/${chapRef}`);

            return {
                chapter: chap.chapter,
                links: links.links // Array of link objects
            };
        });

        const results = await Promise.all(linkPromises);

        // Process results
        maxCount = 0;

        // Create a map of "Book Chap:Verse" -> count
        const countsMap = {};

        results.forEach(res => {
            if (!res.links) return;
            res.links.forEach(link => {
                // link.anchorRef is the verse in the source text (e.g. "Genesis 6:9")
                // We count how many times each anchorRef appears
                const ref = link.anchorRef;
                if (!countsMap[ref]) countsMap[ref] = 0;
                countsMap[ref]++;
            });
        });

        // Update VerseData with counts
        // Need to iterate our structure again to build the final render data
        let renderData = [];

        // We only want to visualize the Verses that are IN THE PARASHA.
        // Our 'chapterStructure' defines the verses we actually rendered from the Text API.

        chapterStructure.forEach(chap => { // { chapter: 6, count: 14, startVerse: 9 }
            const verses = [];
            for (let v = 0; v < chap.count; v++) {
                const verseNum = chap.startVerse + v;
                const verseRef = `${textData.book} ${chap.chapter}:${verseNum}`;
                const count = countsMap[verseRef] || 0;
                if (count > maxCount) maxCount = count;

                verses.push({
                    verse: verseNum,
                    ref: verseRef,
                    count: count
                });
            }
            renderData.push({
                chapter: chap.chapter,
                verses: verses
            });
        });

        renderHeatmap(renderData);

    } catch (err) {
        console.error(err);
        heatmapContainer.innerHTML = `<div class="empty-state" style="color:red">Error loading data. ${err.message}</div>`;
    }
}

function renderHeatmap(data) {
    const container = document.getElementById('heatmap-container');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<div class="empty-state">No text data found.</div>';
        return;
    }

    data.forEach(chap => {
        const section = document.createElement('div');
        section.className = 'chapter-section';

        const title = document.createElement('div');
        title.className = 'chapter-title';
        title.textContent = `Chapter ${chap.chapter}`;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'heatmap-grid';

        chap.verses.forEach(v => {
            const cell = document.createElement('div');
            cell.className = 'verse-cell';

            // Color Logic
            // Scale opacity or darkness based on count relative to max
            // Max counts can be high (thousands). Log scale might be better?
            // Let's try simple linear for now, or log if too skewed.
            const ratio = v.count / (maxCount || 1);
            // We want 0 to be light blue, Max to be dark blue.
            // Using HSL: 200 (Blue). Lightness 95% -> 20%

            const lightness = 95 - (ratio * 60); // 95 down to 35
            cell.style.backgroundColor = `hsl(210, 85%, ${lightness}%)`;

            // Tooltip
            tippy(cell, {
                content: `
                    <div class="tooltip-content">
                        <div class="tooltip-ref">${v.ref}</div>
                        <div class="tooltip-count">${v.count} commentaries/links</div>
                    </div>
                `,
                allowHTML: true,
                animation: 'scale'
            });

            cell.onclick = () => {
                window.open(`https://www.sefaria.org/${v.ref}`, '_blank');
            };

            grid.appendChild(cell);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Start
init();
