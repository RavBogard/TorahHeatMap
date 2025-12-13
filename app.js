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
let thisWeekParasha = null; // Fetched from Hebcal
let verseData = {}; // { "Genesis 1:1": { text: "...", count: 120 } }
let maxCount = 0;
let useAbsoluteScale = false;

// Global Max Counts (Calculated)
const GLOBAL_MAX_COUNTS = {
    "all": 1357,
    "Rashi": 22,
    "Rishonim": 140, // Based on Bereshit (134)
    "Commentary": 1014,
    "Midrash": 419,
    "Talmud": 94,
    "Halakhah": 104,
    "Kabbalah": 87,
    "Musar": 60
};

// Cached data for filter reprocessing
let cachedLinks = []; // Raw links data from Sefaria (Legacy/Fallback)
let cachedChapterStructure = []; // Chapter structure with Hebrew texts (Legacy/Fallback)
let cachedBookName = ''; // Book name for chapter titles
let cachedStaticData = null; // New Static JSON Data
let cachedGlobalSummary = null; // New Global Summary Cache

// API Utils
const API_BASE = 'https://www.sefaria.org/api';
const HEBCAL_API = 'https://www.hebcal.com/shabbat?cfg=json&geonameid=5128581'; // NYC as default

async function get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json();
}

// Initialization
function init() {
    // Initialize Tooltips
    tippy('[data-tippy-content]', { allowHTML: true });

    renderSidebar();

    // Event Listeners
    const menuBtn = document.getElementById('menu-toggle');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menu button clicked');
            toggleSidebar();
        });
    } else {
        console.error('Menu toggle button not found!');
    }



    // Fetch This Week's Parasha from Hebcal
    fetchThisWeekParasha();

    // This Week Button Click Handler
    const thisWeekBtn = document.getElementById('this-week-btn');
    if (thisWeekBtn) {
        thisWeekBtn.addEventListener('click', () => {
            if (thisWeekParasha) {
                loadParasha(thisWeekParasha);
            }
        });
    }

    // Dark Mode Toggle
    initDarkMode();
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Search Filter
    const searchInput = document.getElementById('parasha-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterParashot(e.target.value);
        });
    }

    // Category Filter
    document.getElementById('category-filter').addEventListener('change', (e) => {
        applyFilter(e.target.value);
    });


    // Scale Toggle
    const scaleToggle = document.getElementById('scale-toggle');
    if (scaleToggle) {
        scaleToggle.addEventListener('change', (e) => {
            useAbsoluteScale = e.target.checked;
            const currentCat = document.getElementById('category-filter').value || 'all';
            applyFilter(currentCat);
        });
    }

    // URL Routing: Check for hash on page load
    checkUrlAndLoadParasha();

    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', checkUrlAndLoadParasha);

    // Initial Load: Global Heatmap
    loadGlobalHeatmap();
}

// Search Filter Function
function filterParashot(query) {
    const normalizedQuery = query.toLowerCase().trim();
    const items = document.querySelectorAll('.parasha-item');
    const sections = document.querySelectorAll('.book-section');

    if (!normalizedQuery) {
        // Show all items and sections
        items.forEach(item => item.style.display = 'flex');
        sections.forEach(section => section.style.display = 'block');
        return;
    }

    // Filter items
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const matches = text.includes(normalizedQuery);
        item.style.display = matches ? 'flex' : 'none';
    });

    // Hide empty sections (all children hidden)
    sections.forEach(section => {
        const visibleItems = section.querySelectorAll('.parasha-item[style*="flex"]');
        section.style.display = visibleItems.length > 0 ? 'block' : 'none';
    });
}

// Commentary Category Filter
function applyFilter(category) {
    // 1. Static Data Mode
    if (cachedStaticData) {
        maxCount = 0;
        const renderData = [];

        // Determine max count strategy
        if (useAbsoluteScale) {
            maxCount = GLOBAL_MAX_COUNTS[category] || GLOBAL_MAX_COUNTS['all'];
        }

        cachedStaticData.data.forEach(chap => {
            const verses = [];
            chap.verses.forEach(v => {
                // Get count for category, default to 0
                const count = v.counts[category] || 0;

                if (!useAbsoluteScale) {
                    if (count > maxCount) maxCount = count;
                }

                verses.push({
                    verse: v.verse,
                    ref: v.ref,
                    count: count,
                    hebrewText: v.hebrewText
                });
            });
            renderData.push({
                chapter: chap.chapter,
                verses: verses
            });
        });

        renderHeatmap(renderData, cachedBookName);
        return;
    }

    // 2. Global Heatmap Mode
    // If no parasha is selected and we have global summary data
    if (!currentParasha && cachedGlobalSummary) {
        // Redraw global heatmaps with new filter
        const chapters = cachedGlobalSummary.chapters || cachedGlobalSummary;
        const parashot = cachedGlobalSummary.parashot || {};
        renderGlobalHeatmap(chapters, category);
        if (cachedGlobalSummary.parashot) {
            renderParashaHeatmap(parashot, category);
        }
        return;
    }

    // 3. Legacy/Fallback API Mode
    if (!cachedLinks.length || !cachedChapterStructure.length) return;

    // Recalculate counts based on category
    const countsMap = {};
    maxCount = 0;

    // Set absolute max if enabled
    if (useAbsoluteScale) {
        maxCount = GLOBAL_MAX_COUNTS[category] || GLOBAL_MAX_COUNTS['all'];
    }

    cachedLinks.forEach(res => {
        if (!res.links) return;
        res.links.forEach(link => {
            // Filter by category if not "all"
            if (category === 'Rashi') {
                // Check specific commentator
                const title = (link.collectiveTitle && link.collectiveTitle.en) ? link.collectiveTitle.en : (link.collectiveTitle || '');
                if (typeof title === 'string' && !title.includes('Rashi')) return;
                if (typeof title !== 'string') return; // Should likely match string
            } else if (category !== 'all' && link.category !== category) {
                return;
            }

            const ref = link.anchorRef;
            if (!countsMap[ref]) countsMap[ref] = 0;
            countsMap[ref]++;
        });
    });

    // Rebuild renderData with new counts
    const renderData = [];
    cachedChapterStructure.forEach(chap => {
        const verses = [];
        for (let v = 0; v < chap.count; v++) {
            const verseNum = chap.startVerse + v;
            const verseRef = `${cachedBookName} ${chap.chapter}:${verseNum}`;
            const count = countsMap[verseRef] || 0;
            if (!useAbsoluteScale) {
                if (count > maxCount) maxCount = count;
            }

            verses.push({
                verse: verseNum,
                ref: verseRef,
                count: count,
                hebrewText: chap.hebrewTexts?.[v] || ''
            });
        }
        renderData.push({
            chapter: chap.chapter,
            verses: verses
        });
    });

    renderHeatmap(renderData, cachedBookName);
}

// Hebcal API - Fetch This Week's Parasha
async function fetchThisWeekParasha() {
    try {
        const res = await fetch(HEBCAL_API);
        const data = await res.json();

        // Find the parasha item in the response
        const parashaItem = data.items?.find(item => item.category === 'parashat');
        if (parashaItem) {
            // Try to match with our parashot list
            // Hebcal returns names like "Parashat Vayeshev" - we need just "Vayeshev"
            const hebcalName = parashaItem.title.replace('Parashat ', '').replace('Parshat ', '');

            // Find matching parasha (case-insensitive, handle variations)
            const matched = parashot.find(p => {
                const pName = p.name.toLowerCase().replace(/[^a-z]/g, '');
                const hName = hebcalName.toLowerCase().replace(/[^a-z]/g, '');
                return pName === hName || pName.includes(hName) || hName.includes(pName);
            });

            if (matched) {
                thisWeekParasha = matched;

                // Update UI - show the container in sidebar
                const container = document.getElementById('this-week-container');
                const nameSpan = document.getElementById('this-week-name');
                if (container && nameSpan) {
                    nameSpan.textContent = matched.name;
                    container.style.display = 'block';
                }
            }
        }
    } catch (err) {
        console.error('Failed to fetch this week parasha:', err);
    }
}

// URL Routing Helpers
function getSlugFromName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function findParashaBySlug(slug) {
    return parashot.find(p => getSlugFromName(p.name) === slug);
}

function checkUrlAndLoadParasha() {
    const hash = window.location.hash.slice(1); // Remove the '#'
    if (hash) {
        const parasha = findParashaBySlug(hash);
        if (parasha) {
            loadParasha(parasha, false); // false = don't update URL again
        }
    }
}

function renderSidebar() {
    const container = document.getElementById('nav-container');

    books.forEach(book => {
        // Find parashot for this book
        const bookParashot = parashot.filter(p => p.ref.startsWith(book));
        if (bookParashot.length === 0) return;

        const section = document.createElement('div');
        section.className = 'book-section';

        const header = document.createElement('div');
        header.className = 'book-header';
        header.onclick = (e) => {
            toggleBook(book);
        };

        const title = document.createElement('span');
        title.className = 'book-title';
        title.textContent = book;
        title.onclick = (e) => {
            e.stopPropagation();
            loadBook(book);
            expandBook(book);
        };

        const chevron = document.createElement('span');
        chevron.className = 'chevron';
        chevron.textContent = '▼';

        header.appendChild(title);
        header.appendChild(chevron);
        section.appendChild(header);

        // Parasha List Container
        const listContainer = document.createElement('div');
        listContainer.className = 'parasha-list';
        section.setAttribute('data-book', book); // Identify section

        bookParashot.forEach(p => {
            const item = document.createElement('div');
            item.className = 'parasha-item';
            item.innerHTML = `<span>${p.name}</span> <span style="font-size:0.8em; opacity:0.6">${p.heName}</span>`;
            item.onclick = () => loadParasha(p);
            listContainer.appendChild(item);
        });

        section.appendChild(listContainer);
        container.appendChild(section);
    });
}

function toggleBook(bookName) {
    const section = document.querySelector(`.book-section[data-book="${bookName}"]`);
    if (section) {
        const isExpanded = section.classList.contains('expanded');

        // Collapse all others
        document.querySelectorAll('.book-section').forEach(s => s.classList.remove('expanded'));

        // Toggle current (if it was closed, open it. If it was open, it's now closed because we removed all. Wait.)
        // If we want accordion:
        if (!isExpanded) {
            section.classList.add('expanded');
        }
    }
}

function expandBook(bookName) {
    const section = document.querySelector(`.book-section[data-book="${bookName}"]`);
    if (section) {
        // Collapse all others first for clean accordion
        document.querySelectorAll('.book-section').forEach(s => s.classList.remove('expanded'));
        section.classList.add('expanded');
    }
}



// Load Entire Book
async function loadBook(bookName) {
    // Auto-close sidebar
    toggleSidebar(false);

    // Filter parsahot for this book
    const bookParashot = parashot.filter(p => p.ref.startsWith(bookName));
    if (bookParashot.length === 0) return;

    // Reset UI State
    currentParasha = null; // No specific parasha selected
    document.getElementById('parasha-title').textContent = bookName;
    document.getElementById('parasha-hebrew').textContent = '';
    document.getElementById('parasha-ref').style.display = 'none';

    // Clear Active Sidebar Items
    document.querySelectorAll('.parasha-item').forEach(el => el.classList.remove('active'));

    // Show Loading
    const heatmapContainer = document.getElementById('heatmap-container');
    heatmapContainer.innerHTML = `<div class="loading-container"><div class="loading-spinner"></div><div class="loading-text">Loading ${bookName}...</div></div>`;

    // Show Info/Legent
    document.getElementById('legend-bar').style.display = 'flex';
    document.getElementById('scale-control-group').style.display = 'flex'; // Show toggle group
    document.getElementById('filter-wrapper').style.display = 'flex'; // Show filter


    try {
        // Fetch ALL parashot JSONs for this book concurrently
        const promises = bookParashot.map(p => {
            const slug = getSlugFromName(p.name);
            return fetch(`data/${slug}.json`).then(res => res.ok ? res.json() : null);
        });

        const results = await Promise.all(promises);
        const validResults = results.filter(r => r !== null);

        // Merge Data
        // Structure needed for cachedStaticData: { book: "Genesis", data: [ { chapter: 1, verses: [...] } ] }
        const mergedChapters = {}; // { 1: { chapter: 1, verses: [...] } }

        validResults.forEach(pData => {
            pData.data.forEach(chap => {
                if (!mergedChapters[chap.chapter]) {
                    // New chapter, deep copy structure
                    mergedChapters[chap.chapter] = JSON.parse(JSON.stringify(chap));
                } else {
                    // Existing chapter (split parasha case), merge verses
                    // We need to insert verses in correct order or just sort later.
                    // The verses array structure is [ { verse: 1, ... }, { verse: 2, ... } ]
                    // We can just concat and then sort by verse number.
                    mergedChapters[chap.chapter].verses = mergedChapters[chap.chapter].verses.concat(chap.verses);
                }
            });
        });

        // Convert map to array and sort chapters
        const sortedChapters = Object.values(mergedChapters).sort((a, b) => a.chapter - b.chapter);

        // Sort verses within chapters (handle merge of split parashot)
        sortedChapters.forEach(chap => {
            chap.verses.sort((a, b) => a.verse - b.verse);
        });

        const mergedData = {
            book: bookName,
            data: sortedChapters
        };

        // Cache and Render
        cachedStaticData = mergedData;
        cachedBookName = bookName;
        cachedLinks = [];

        // Reset filter
        const filterWrapper = document.getElementById('filter-wrapper');
        if (filterWrapper) filterWrapper.style.display = 'flex'; // Ensure it's visible for book view
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) categoryFilter.value = 'all';

        applyFilter('all');

    } catch (e) {
        console.error("Failed to load book", e);
        heatmapContainer.innerHTML = `<div class="empty-state">Failed to load ${bookName}. Please try again.</div>`;
    }
}

async function loadParasha(parasha, updateUrl = true) {
    // Auto-close sidebar on mobile if open
    toggleSidebar(false);

    currentParasha = parasha;

    // Update URL hash (if not loading from URL)
    if (updateUrl) {
        const slug = getSlugFromName(parasha.name);
        window.history.pushState(null, '', `#${slug}`);
    }

    // Update Header
    document.getElementById('parasha-title').textContent = parasha.name;
    document.getElementById('parasha-hebrew').textContent = parasha.heName;
    const refBadge = document.getElementById('parasha-ref');
    refBadge.textContent = parasha.ref;
    refBadge.style.display = 'block';

    // Show info button and legend bar
    const legendBar = document.getElementById('legend-bar');
    if (legendBar) legendBar.style.display = 'flex';
    document.getElementById('scale-control-group').style.display = 'flex'; // Show toggle group
    document.getElementById('filter-wrapper').style.display = 'flex'; // Show filter for parasha view

    // Set Active State in Sidebar AND Expand Book
    document.querySelectorAll('.parasha-item').forEach(el => {
        el.classList.remove('active');
        // Check if this item matches the selected parasha
        if (el.textContent.includes(parasha.name)) {
            el.classList.add('active');

            // Expand the parent book
            // Identify book from parasha.ref "Genesis 1:1..."
            const bookName = parasha.ref.split(' ')[0];
            expandBook(bookName);
        }
    });

    // Show Loading with skeleton
    const heatmapContainer = document.getElementById('heatmap-container');
    heatmapContainer.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <div class="loading-text" id="loading-text">Loading ${parasha.name}...</div>
            <div class="loading-progress">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
            <div class="skeleton-grid">
                ${Array(12).fill('<div class="skeleton-cell"></div>').join('')}
            </div>
        </div>
    `;

    // Try to load static data first
    const slug = getSlugFromName(parasha.name);
    try {
        updateLoadingText('Checking for cached data...');
        const staticRes = await fetch(`data/${slug}.json`);

        if (staticRes.ok) {
            const staticJson = await staticRes.json();

            // Success! Use static data
            cachedStaticData = staticJson;
            cachedBookName = staticJson.book;
            cachedLinks = []; // Clear legacy cache
            cachedChapterStructure = [];

            // Show and reset filter
            const filterContainer = document.getElementById('filter-container');
            const categoryFilter = document.getElementById('category-filter');
            if (filterContainer) filterContainer.style.display = 'flex';
            if (categoryFilter) categoryFilter.value = 'all';

            // Initial Render
            applyFilter('all');
            return;
        }
    } catch (e) {
        console.warn('Static data fetch failed, falling back to API', e);
    }

    // Fallback to Live API
    cachedStaticData = null;

    try {
        // 1. Get the Text to determine structure (Chapters & Verses)
        // We accept the flattening of the text to handle the range
        // context=0 ensures we just get the requested range
        updateLoadingText('Fetching text structure from API...');
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
        let chapterStructure = []; // { chapter: 6, count: 14, startVerse: 9, hebrewTexts: [...] }

        // Get both English and Hebrew text arrays
        const rawText = Array.isArray(textData.text[0]) ? textData.text : [textData.text];
        const rawHebrew = Array.isArray(textData.he?.[0]) ? textData.he : [textData.he || []];

        rawText.forEach((chapVerses, i) => {
            const chapNum = startChap + i;
            const hebrewVerses = rawHebrew[i] || [];
            // Filter out empty or null verses if any (sometimes happens with empty jagged arrays?)
            if (Array.isArray(chapVerses)) {
                const validVerses = chapVerses.filter(v => v !== null && v !== "");
                // Keep corresponding Hebrew texts (same indices)
                const validHebrewTexts = hebrewVerses.filter((v, idx) => chapVerses[idx] !== null && chapVerses[idx] !== "");

                chapterStructure.push({
                    chapter: chapNum,
                    count: validVerses.length,
                    // We need to know the starting verse number for the first chapter in the range
                    startVerse: (i === 0) ? textData.sections[1] : 1,
                    hebrewTexts: validHebrewTexts
                });
            } else {
                // Single chapter case being treated as array of verses?
                // If rawText was [ "v1", "v2" ] -> we wrapped to [[...]]
                // If it was already [[...]] we are good.
            }
        });

        // 3. Fetch Link Counts with progress updates
        const totalChapters = chapterStructure.length;
        const results = [];

        for (let i = 0; i < chapterStructure.length; i++) {
            const chap = chapterStructure[i];
            const chapRef = `${textData.book} ${chap.chapter}`;

            updateLoadingText(`Loading Chapter ${chap.chapter} (${i + 1} of ${totalChapters})...`);
            updateProgressBar((i + 1) / totalChapters * 100);

            const links = await get(`/related/${chapRef}`);
            results.push({
                chapter: chap.chapter,
                links: links.links
            });
        }

        updateLoadingText('Processing data...');
        updateProgressBar(100);

        // Process results
        maxCount = 0;
        if (useAbsoluteScale) {
            // Initial load is always "all" or we should check filter?
            // Usually on load it is "all".
            const cat = document.getElementById('category-filter')?.value || 'all';
            maxCount = GLOBAL_MAX_COUNTS[cat] || GLOBAL_MAX_COUNTS['all'];
        }

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

        chapterStructure.forEach(chap => { // { chapter: 6, count: 14, startVerse: 9, hebrewTexts: [...] }
            const verses = [];
            for (let v = 0; v < chap.count; v++) {
                const verseNum = chap.startVerse + v;
                const verseRef = `${textData.book} ${chap.chapter}:${verseNum}`;
                const count = countsMap[verseRef] || 0;

                // Logic handled in render/applyFilter mostly, but initial load needs max too
                // However, initial load calls renderHeatmap directly... wait.
                // Initial load calculates maxCount here for the *initial* view (all categories)
                if (!useAbsoluteScale) {
                    if (count > maxCount) maxCount = count;
                }

                verses.push({
                    verse: verseNum,
                    ref: verseRef,
                    count: count,
                    hebrewText: chap.hebrewTexts?.[v] || ''
                });
            }
            renderData.push({
                chapter: chap.chapter,
                verses: verses
            });
        });

        // Cache data for filter reprocessing
        cachedLinks = results;
        cachedChapterStructure = chapterStructure;
        cachedBookName = textData.book;

        // Show and reset filter
        const filterContainer = document.getElementById('filter-container');
        const categoryFilter = document.getElementById('category-filter');
        if (filterContainer) filterContainer.style.display = 'flex';
        if (categoryFilter) categoryFilter.value = 'all';

        renderHeatmap(renderData, textData.book);

    } catch (err) {
        console.error(err);
        heatmapContainer.innerHTML = `<div class="empty-state" style="color:red">Error loading data. ${err.message}</div>`;
    }
}

function renderHeatmap(data, bookName) {
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
        title.textContent = `${bookName} ${chap.chapter}`;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'heatmap-grid';

        chap.verses.forEach(v => {
            const cell = document.createElement('div');
            cell.className = 'verse-cell';

            // Accessibility attributes
            cell.setAttribute('role', 'button');
            cell.setAttribute('tabindex', '0');
            cell.setAttribute('aria-label', `${v.ref}, ${v.count} commentaries`);

            // Color Logic
            // Scale opacity or darkness based on count relative to max
            // Max counts can be high (thousands). Log scale might be better?
            // Let's try simple linear for now, or log if too skewed.
            const ratio = v.count / (maxCount || 1);
            // We want 0 to be light blue, Max to be dark blue.
            // Using HSL: 200 (Blue). Lightness 95% -> 20%

            const lightness = 95 - (ratio * 60); // 95 down to 35
            cell.style.backgroundColor = `hsl(210, 85%, ${lightness}%)`;

            // Add verse number with dynamic contrast
            const verseNum = document.createElement('span');
            verseNum.className = 'verse-number';
            verseNum.textContent = v.verse;
            // Use white text on dark backgrounds (lightness < 60), dark text on light
            verseNum.style.color = lightness < 60 ? 'white' : '#1e3a5f';
            cell.appendChild(verseNum);

            // Tooltip with Hebrew text preview
            const hebrewPreview = truncateHebrew(v.hebrewText, 60);
            tippy(cell, {
                content: `
                    <div class="tooltip-content">
                        <div class="tooltip-ref">${v.ref}</div>
                        ${hebrewPreview ? `<div class="tooltip-hebrew" dir="rtl">${hebrewPreview}</div>` : ''}
                        <div class="tooltip-count">${v.count} commentaries</div>
                    </div>
                `,
                allowHTML: true,
                animation: 'scale'
            });

            // Click and keyboard handler
            const openSefaria = () => {
                window.open(`https://www.sefaria.org/${v.ref}`, '_blank');
            };
            cell.onclick = openSefaria;
            cell.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openSefaria();
                }
            };

            grid.appendChild(cell);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Start
init();

// UI Helpers
function toggleSidebar(forceState = null) {
    console.log('toggleSidebar called', { forceState });
    const nav = document.getElementById('nav-container');
    const isMobile = window.innerWidth <= 768;

    if (forceState === true) {
        nav.classList.add('open');
    } else if (forceState === false) {
        nav.classList.remove('open');
    } else {
        nav.classList.toggle('open');
    }
}

// Loading State Helpers
function updateLoadingText(text) {
    const el = document.getElementById('loading-text');
    if (el) el.textContent = text;
}

function updateProgressBar(percent) {
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = `${percent}%`;
}

// Dark Mode Functions
function updateLogo(theme) {
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.src = theme === 'dark' ? 'logo-dark.png' : 'logo-main.png';
    }
}

// Dark Mode Functions
function initDarkMode() {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateLogo('dark');
    } else {
        updateLogo('light');
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateLogo('light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateLogo('dark');
    }
}

// Text Helper Functions
function truncateHebrew(html, maxLength) {
    if (!html) return '';
    // Strip HTML tags
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    // Truncate and add ellipsis if needed
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

// Global Heatmap
async function loadGlobalHeatmap() {
    // RACE CONDITION FIX: If a parasha is already selected/loading, DO NOT overwrite the view.
    // This happens because init() calls both checkUrlAndLoadParasha() and loadGlobalHeatmap().
    if (currentParasha) return;

    const wrapper = document.getElementById('global-heatmap-wrapper');
    const container = document.getElementById('global-heatmap');

    if (!wrapper || !container) return;

    try {
        // Double check before fetching
        if (currentParasha) return;
        const res = await fetch('data/torah_summary.json');
        if (!res.ok) throw new Error('Failed to load summary');

        const summary = await res.json();
        cachedGlobalSummary = summary; // Cache for filtering

        // Final check before rendering - did user click a parasha while fetching?
        if (currentParasha) return;

        // Handle new structure { chapters: {...}, parashot: {...} } or fallback
        const chapterData = summary.chapters || summary;
        const parashaData = summary.parashot || {};

        // Initial render with 'all'
        renderGlobalHeatmap(chapterData, 'all');

        if (summary.parashot) {
            renderParashaHeatmap(parashaData, 'all');
            const parashaWrapper = document.getElementById('parasha-heatmap-wrapper');
            if (parashaWrapper) parashaWrapper.style.display = 'block';
        }

        wrapper.style.display = 'block';

        // Ensure Filter is visible, but Toggle Group is HIDDEN on homepage
        const scaleGroup = document.getElementById('scale-control-group');
        if (scaleGroup) scaleGroup.style.display = 'none';

        const filterWrapper = document.getElementById('filter-wrapper');
        if (filterWrapper) filterWrapper.style.display = 'flex';

    } catch (e) {
        console.warn('Could not load global heatmap', e);
        wrapper.style.display = 'none';
    }
}

function renderGlobalHeatmap(summary, category = 'all') {
    const container = document.getElementById('global-heatmap');
    container.innerHTML = '';

    // Find global max for scaling
    let max = 0;

    // Scale Logic:
    // If Absolute (Torah): Find max across ENTIRE Torah for this category
    // If Relative (Parasha): For global map, maybe "Relative" means relative to Book? Or still entire Torah?
    // "Parasha" scale usually means relative to the current view's scope.
    // For Global View:
    // "Torah" (Absolute) -> Max count of any chapter in Torah (for this category)
    // "Parasha" (Relative) -> Let's interpret as "Relative to Book" or just same as Torah for now?
    // Actually, user said: "parasha has scale compared to other verses within this particular torah portion, while 'torah' compares ... against all verses in torah"
    // Since this is the GLOBAL view (chapters), maybe "Parasha" mode means "Relative to itself"? 
    // Or maybe we just use one scale for global view?
    // Let's stick to Global Max for consistency unless user asked otherwise for global.
    // Wait, simpler: calculate MAX based on the `useAbsoluteScale` flag (Torah vs Parasha labels).

    // Calculate global max for this category
    Object.values(summary).forEach(chapters => {
        chapters.forEach(c => {
            // Support new structure (counts dict) or fallback (count int)
            const val = c.counts ? (c.counts[category] || 0) : (category === 'all' ? c.count : 0);
            if (val > max) max = val;
        });
    });

    // If "Torah" (Absolute) mode, maybe we want a fixed hardcoded max like in single view?
    // In single view: GLOBAL_MAX_COUNTS[category].
    if (useAbsoluteScale) {
        max = GLOBAL_MAX_COUNTS[category] || GLOBAL_MAX_COUNTS['all'];
    }

    // Order: Genesls, Exodus, Leviticus, Numbers, Deuteronomy
    const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];

    books.forEach(book => {
        const row = document.createElement('div');
        row.className = 'global-book-row';

        const label = document.createElement('div');
        label.className = 'global-book-label';
        label.textContent = book;
        row.appendChild(label);

        const chapters = summary[book] || [];
        const cellsContainer = document.createElement('div');
        cellsContainer.className = 'global-chapters-grid';

        chapters.forEach(c => {
            const cell = document.createElement('div');
            cell.className = 'global-chapter-cell';

            // Get Value
            const val = c.counts ? (c.counts[category] || 0) : (category === 'all' ? c.count : 0);

            // Color Logic
            const ratio = val / (max || 1);
            const lightness = 95 - (ratio * 60); // 95 -> 35

            cell.style.backgroundColor = `hsl(210, 85%, ${lightness}%)`;
            cell.style.color = lightness < 60 ? 'white' : '#1e3a5f';
            cell.textContent = c.chapter;

            // Tippy
            tippy(cell, {
                content: `${book} ${c.chapter}<br><b>${val}</b> commentaries${category !== 'all' ? ` (${category})` : ''}`,
                allowHTML: true,
                animation: 'scale'
            });

            // Interaction
            cell.onclick = () => {
                const slug = c.slug;
                if (slug) {
                    const foundParasha = parashot.find(p => getSlugFromName(p.name) === slug);
                    if (foundParasha) loadParasha(foundParasha);
                }
            };

            cellsContainer.appendChild(cell);
        });

        row.appendChild(cellsContainer);
        container.appendChild(row);
    });
}

function renderParashaHeatmap(parashaData, category = 'all') {
    const container = document.getElementById('parasha-heatmap');
    if (!container) return;
    container.innerHTML = '';

    // Find max count
    let max = 0;

    // "Torah" Scale (Absolute) -> Global Max
    if (useAbsoluteScale) {
        max = GLOBAL_MAX_COUNTS[category] || GLOBAL_MAX_COUNTS['all'];
    } else {
        // "Parasha" Scale (Relative) -> Max within this dataset
        Object.values(parashaData).forEach(bookParashot => {
            bookParashot.forEach(p => {
                const val = p.counts ? (p.counts[category] || 0) : (category === 'all' ? p.count : 0);
                if (val > max) max = val;
            });
        });
    }

    const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];

    books.forEach(book => {
        const row = document.createElement('div');
        row.className = 'global-book-row';

        const label = document.createElement('div');
        label.className = 'global-book-label';
        label.textContent = book;
        row.appendChild(label);

        const parashotList = parashaData[book] || [];
        const cellsContainer = document.createElement('div');
        cellsContainer.className = 'global-chapters-grid';
        // We reuse the grid class, but maybe we want wider cells? 
        // Parasha names are long. Let's stick to small blocks with tooltips for now, 
        // mirroring the chapter view.

        parashotList.forEach(p => {
            const cell = document.createElement('div');
            cell.className = 'global-chapter-cell';

            // Get Value
            const val = p.counts ? (p.counts[category] || 0) : (category === 'all' ? p.count : 0);

            // Scale color
            const ratio = val / (max || 1);
            const lightness = 95 - (ratio * 60); // 95 -> 35

            cell.style.backgroundColor = `hsl(210, 85%, ${lightness}%)`;

            // For parashot, maybe we don't put text inside because names are long?
            // Or maybe first letter? Or Index? 
            // Let's leave empty and rely on tooltip, or put first letter.
            // cell.textContent = p.name[0]; 
            // Empty is cleaner for a pure heatmap view.

            // Tippy
            tippy(cell, {
                content: `<b>${p.name}</b><br>${val} commentaries${category !== 'all' ? ` (${category})` : ''}`,
                allowHTML: true,
                animation: 'scale'
            });

            // Interaction
            cell.onclick = () => {
                const slug = p.slug;
                if (slug) {
                    const foundParasha = parashot.find(param => getSlugFromName(param.name) === slug);
                    if (foundParasha) loadParasha(foundParasha);
                }
            };

            cellsContainer.appendChild(cell);
        });

        row.appendChild(cellsContainer);
        container.appendChild(row);
    });
}

window.toggleSidebar = toggleSidebar;
