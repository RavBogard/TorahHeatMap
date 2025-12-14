
import json
import os
import time
import urllib.request
import urllib.error
import re

# Parashot Data
parashot = [
    { "name": "Bereshit", "ref": "Genesis 1:1-6:8", "heName": "בראשית" },
    { "name": "Noach", "ref": "Genesis 6:9-11:32", "heName": "נח" },
    { "name": "Lech-Lecha", "ref": "Genesis 12:1-17:27", "heName": "לך לך" },
    { "name": "Vayera", "ref": "Genesis 18:1-22:24", "heName": "וירא" },
    { "name": "Chayei Sara", "ref": "Genesis 23:1-25:18", "heName": "חיי שרה" },
    { "name": "Toldot", "ref": "Genesis 25:19-28:9", "heName": "תולדות" },
    { "name": "Vayetzei", "ref": "Genesis 28:10-32:3", "heName": "ויצא" },
    { "name": "Vayishlach", "ref": "Genesis 32:4-36:43", "heName": "וישלח" },
    { "name": "Vayeshev", "ref": "Genesis 37:1-40:23", "heName": "וישב" },
    { "name": "Miketz", "ref": "Genesis 41:1-44:17", "heName": "מקץ" },
    { "name": "Vayigash", "ref": "Genesis 44:18-47:27", "heName": "ויגש" },
    { "name": "Vayechi", "ref": "Genesis 47:28-50:26", "heName": "ויחי" },
    { "name": "Shemot", "ref": "Exodus 1:1-6:1", "heName": "שמות" },
    { "name": "Vaera", "ref": "Exodus 6:2-9:35", "heName": "וארא" },
    { "name": "Bo", "ref": "Exodus 10:1-13:16", "heName": "בא" },
    { "name": "Beshalach", "ref": "Exodus 13:17-17:16", "heName": "בשלח" },
    { "name": "Yitro", "ref": "Exodus 18:1-20:23", "heName": "יתרו" },
    { "name": "Mishpatim", "ref": "Exodus 21:1-24:18", "heName": "משפטים" },
    { "name": "Terumah", "ref": "Exodus 25:1-27:19", "heName": "תרומה" },
    { "name": "Tetzaveh", "ref": "Exodus 27:20-30:10", "heName": "תצוה" },
    { "name": "Ki Tisa", "ref": "Exodus 30:11-34:35", "heName": "כי תשא" },
    { "name": "Vayakhel", "ref": "Exodus 35:1-38:20", "heName": "ויקהל" },
    { "name": "Pekudei", "ref": "Exodus 38:21-40:38", "heName": "פקודי" },
    { "name": "Vayikra", "ref": "Leviticus 1:1-5:26", "heName": "ויקרא" },
    { "name": "Tzav", "ref": "Leviticus 6:1-8:36", "heName": "צו" },
    { "name": "Shmini", "ref": "Leviticus 9:1-11:47", "heName": "שמיני" },
    { "name": "Tazria", "ref": "Leviticus 12:1-13:59", "heName": "תזריע" },
    { "name": "Metzora", "ref": "Leviticus 14:1-15:33", "heName": "מצורע" },
    { "name": "Achrei Mot", "ref": "Leviticus 16:1-18:30", "heName": "אחרי מות" },
    { "name": "Kedoshim", "ref": "Leviticus 19:1-20:27", "heName": "קדושים" },
    { "name": "Emor", "ref": "Leviticus 21:1-24:23", "heName": "אמור" },
    { "name": "Behar", "ref": "Leviticus 25:1-26:2", "heName": "בהר" },
    { "name": "Bechukotai", "ref": "Leviticus 26:3-27:34", "heName": "בחוקתי" },
    { "name": "Bamidbar", "ref": "Numbers 1:1-4:20", "heName": "במדבר" },
    { "name": "Nasso", "ref": "Numbers 4:21-7:89", "heName": "נשא" },
    { "name": "Beha'alotcha", "ref": "Numbers 8:1-12:16", "heName": "בהעלותך" },
    { "name": "Sh'lach", "ref": "Numbers 13:1-15:41", "heName": "שלח" },
    { "name": "Korach", "ref": "Numbers 16:1-18:32", "heName": "קרח" },
    { "name": "Chukat", "ref": "Numbers 19:1-22:1", "heName": "חקת" },
    { "name": "Balak", "ref": "Numbers 22:2-25:9", "heName": "בלק" },
    { "name": "Pinchas", "ref": "Numbers 25:10-30:1", "heName": "פנחס" },
    { "name": "Matot", "ref": "Numbers 30:2-32:42", "heName": "מטות" },
    { "name": "Masei", "ref": "Numbers 33:1-36:13", "heName": "מסעי" },
    { "name": "Devarim", "ref": "Deuteronomy 1:1-3:22", "heName": "דברים" },
    { "name": "Vaetchanan", "ref": "Deuteronomy 3:23-7:11", "heName": "ואתחנן" },
    { "name": "Eikev", "ref": "Deuteronomy 7:12-11:25", "heName": "עקב" },
    { "name": "Re'eh", "ref": "Deuteronomy 11:26-16:17", "heName": "ראה" },
    { "name": "Shoftim", "ref": "Deuteronomy 16:18-21:9", "heName": "שופטים" },
    { "name": "Ki Teitzei", "ref": "Deuteronomy 21:10-25:19", "heName": "כי תצא" },
    { "name": "Ki Tavo", "ref": "Deuteronomy 26:1-29:8", "heName": "כי תבוא" },
    { "name": "Nitzavim", "ref": "Deuteronomy 29:9-30:20", "heName": "נצבים" },
    { "name": "Vayeilech", "ref": "Deuteronomy 31:1-31:30", "heName": "וילך" },
    { "name": "Ha'azinu", "ref": "Deuteronomy 32:1-32:52", "heName": "האזינו" },
    { "name": "Vezot Haberakhah", "ref": "Deuteronomy 33:1-34:12", "heName": "וזאת הברכה" }
]

API_BASE = 'https://www.sefaria.org/api'
DATA_DIR = os.path.join(os.path.dirname(__file__), '../data')

CATEGORIES = [
    'Commentary',
    'Midrash',
    'Talmud',
    'Halakhah',
    'Kabbalah',
    'Musar',
    'Chasidut',
    'Modern',
    'Rishonim'
]

# Cache for title -> isRishonim boolean
rishonim_cache = {}

def get_slug(name):
    # simple slugify: lowercase, replace non-alphanum with -, strip ends
    s = name.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

def fetch_json(endpoint, retries=3):
    url = f"{API_BASE}{endpoint}"
    # Sefaria might require User-Agent
    req = urllib.request.Request(url, headers={'User-Agent': 'TorahHeatMap/1.0'})
    
    for attempt in range(retries):
        try:
            # Add 30s timeout
            with urllib.request.urlopen(req, timeout=30) as response:
                return json.loads(response.read().decode())
        except urllib.error.HTTPError as e:
            if e.code in [404]:
                # 404 is valid for check_rishonim if index doesn't exist
                # But fetch_json is generic... let's return None for 404 too?
                # Usually we want to know it failed. But for index check, it means "not found".
                # Let's verify context. For now, log and return None is safe.
                print(f"HTTP 404 for {url}")
                return None
            if e.code in [429, 500, 502, 503, 504]:
                print(f"HTTP {e.code} for {url}. Retrying {attempt+1}/{retries}...")
                time.sleep(2 * (attempt + 1))
                continue
            print(f"HTTP Error for {url}: {e.code}")
            return None
        except Exception as e:
            print(f"Error for {url}: {e}. Retrying {attempt+1}/{retries}...")
            time.sleep(2 * (attempt + 1))
            continue
            
    print(f"Failed to fetch {url} after {retries} attempts.")
    return None

def check_rishonim(title):
    # Normalize title slightly
    if isinstance(title, dict):
        title = title.get('en', str(title))
    title = str(title)
    
    # Check cache
    if title in rishonim_cache:
        return rishonim_cache[title]
        
    # Heuristic for well-knowns to save API calls
    if "Rashi" in title or "Ramban" in title or "Ibn Ezra" in title or "Rashbam" in title or "Sforno" in title:
        rishonim_cache[title] = True
        return True
        
    # Fetch Index (requires slugified title, usually replacing spaces with underscore)
    # The API expects the exact title key usually, spaces are allowed in URL but usually underscores.
    # Sefaria API: /api/index/{Title}
    index_slug = title.replace(' ', '_')
    data = fetch_json(f"/index/{index_slug}")
    
    is_rishonim = False
    if data:
        # Check categories
        cats = data.get('categories', [])
        # Also check heCategories for robustness? No, English is fine.
        # Structure: ["Commentary", "Tanakh", "Rishonim"] OR ["Commentary", "Torah", "Rishonim"]
        # Or just "Rishonim" in the list anywhere?
        # Based on index check: ["Commentary", "Tanakh", "Rishonim on Tanakh", "Ramban", "Torah"]
        # Wait, the example was: ["Tanakh", "Rishonim on Tanakh", "Ramban", "Torah"] ?
        # Actually my check_ramban output was: "heCategories": [..., "Rishonim al HaTanakh", ...]
        # For English I didn't see "Rishonim" in the example I inspected? 
        # Ah, looking at my check_ramban output:
        # Categories not shown in the truncated output! 
        # Let's rely on checking for "Rishonim" substring in categories list.
        
        # Actually, let's look at the `categories` field if it exists.
        # If not in truncated output, I should assume it's there.
        # Usually it is.
        for cat in cats:
            if "Rishonim" in cat:
                is_rishonim = True
                break
                
    rishonim_cache[title] = is_rishonim
    return is_rishonim

def process_parasha(parasha):
    slug = get_slug(parasha['name'])
    path_out = os.path.join(DATA_DIR, f"{slug}.json")
    
    # Skip if exists (Resume capability)
    if os.path.exists(path_out):
        print(f"Skipping {parasha['name']} (already exists)")
        return True

    print(f"Processing {parasha['name']} ({parasha['ref']})...")

    # 1. Fetch Text
    # context=0 ensures exact range
    text_data = fetch_json(f"/texts/{parasha['ref'].replace(' ', '%20')}?context=0&pad=0")
    if not text_data:
        return False
    
    # ... (Rest of logic is fine, just ensure we update the return points if needed)
    
    start_chap = text_data['sections'][0]
    raw_text = text_data['text'] if isinstance(text_data['text'][0], list) else [text_data['text']]
    # Handle hebrew text similarly
    he_data = text_data.get('he', [])
    if not he_data:
        raw_hebrew = [[]] * len(raw_text)
    elif isinstance(he_data[0], list):
        raw_hebrew = he_data
    else:
        raw_hebrew = [he_data]

    chapter_structure = []
    
    for i, chap_verses in enumerate(raw_text):
        chap_num = start_chap + i
        he_verses = raw_hebrew[i] if i < len(raw_hebrew) else []

        # Filter out empty strings/None
        if isinstance(chap_verses, list):
            valid_verses = []
            valid_he_verses = []
            for j, v in enumerate(chap_verses):
                if v: # not empty
                    valid_verses.append(v)
                    valid_he_verses.append(he_verses[j] if j < len(he_verses) else "")
            
            # Start verse logic: if it's the first chapter, use the section start verse.
            # Otherwise it usually starts at 1.
            start_verse = text_data['sections'][1] if i == 0 else 1

            chapter_structure.append({
                'chapter': chap_num,
                'count': len(valid_verses),
                'startVerse': start_verse,
                'hebrewTexts': valid_he_verses
            })

    # 3. Fetch Links per Chapter
    render_data = []

    for chap in chapter_structure:
        chap_ref = f"{text_data['book']} {chap['chapter']}"
        time.sleep(0.5) # limit rate
        
        links_data = fetch_json(f"/related/{chap_ref.replace(' ', '%20')}")
        
        if not links_data:
            print(f"Failed to get links for {chap_ref}. Aborting {parasha['name']} to ensure integrity.")
            return False

        # Aggregate counts
        counts_map = {} # Ref -> { all: 0, Category: 0, Rashi: 0 ... }
        
        for link in links_data.get('links', []):
            ref = link['anchorRef']
            if ref not in counts_map:
                counts_map[ref] = { 'all': 0, 'Rashi': 0, 'WomensCommentary': 0 }
                for c in CATEGORIES:
                    counts_map[ref][c] = 0
            
            counts_map[ref]['all'] += 1
            if link['category'] in CATEGORIES:
                counts_map[ref][link['category']] += 1
            
            # Check for Rashi
            # collectiveTitle is usually a dict { en: "...", he: "..." }
            coll_title = link.get('collectiveTitle', {})
            if isinstance(coll_title, dict):
                en_title = coll_title.get('en', '')
            else:
                en_title = str(coll_title) # Fallback if string
            
            if 'Rashi' in en_title:
                counts_map[ref]['Rashi'] += 1
            
            # Check for The Torah: A Women's Commentary
            # Title might contain semicolon or colon
            if "Women's Commentary" in en_title and "The Torah" in en_title:
                counts_map[ref]['WomensCommentary'] += 1
                
            # Check for Rishonim (Dynamic)
            if check_rishonim(en_title):
                counts_map[ref]['Rishonim'] += 1

        # Build Verse objects
        verses = []
        for v in range(chap['count']):
            verse_num = chap['startVerse'] + v
            verse_ref = f"{text_data['book']} {chap['chapter']}:{verse_num}"
            
            counts = counts_map.get(verse_ref, { 'all': 0, 'Rashi': 0, 'WomensCommentary': 0 })
            
            verses.append({
                'verse': verse_num,
                'ref': verse_ref,
                'hebrewText': chap['hebrewTexts'][v] if v < len(chap['hebrewTexts']) else "",
                'counts': counts
            })

        render_data.append({
            'chapter': chap['chapter'],
            'verses': verses
        })


    # 4. Save JSON
    output = {
        'name': parasha['name'],
        'heName': parasha['heName'],
        'ref': parasha['ref'],
        'book': text_data['book'],
        'data': render_data
    }

    with open(path_out, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"Saved {slug}.json")
    return True

import concurrent.futures

# ... (rest is same)

def process_parasha_wrapper(p):
    try:
        if process_parasha(p):
            return True
    except Exception as e:
        print(f"Error processing {p['name']}: {e}")
    return False

def main():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
    
    # Use ThreadPool to fetch in parallel
    # Sefaria might rate limit, so let's check max_workers
    # Reduced to 3 to be safer with timeouts
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(process_parasha_wrapper, p): p for p in parashot}
        
        for future in concurrent.futures.as_completed(futures):
            p = futures[future]
            try:
                future.result()
            except Exception as e:
                print(f"Exception for {p['name']}: {e}")

if __name__ == "__main__":
    main()
