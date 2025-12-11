
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
    'Modern'
]

def get_slug(name):
    # simple slugify: lowercase, replace non-alphanum with -, strip ends
    s = name.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

def fetch_json(endpoint):
    url = f"{API_BASE}{endpoint}"
    # Sefaria might require User-Agent
    req = urllib.request.Request(url, headers={'User-Agent': 'TorahHeatMap/1.0'})
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        print(f"HTTP Error for {url}: {e.code}")
        return None
    except Exception as e:
        print(f"Error for {url}: {e}")
        return None

def process_parasha(parasha):
    slug = get_slug(parasha['name'])
    print(f"Processing {parasha['name']} ({parasha['ref']})...")

    # 1. Fetch Text
    # context=0 ensures exact range
    text_data = fetch_json(f"/texts/{parasha['ref'].replace(' ', '%20')}?context=0&pad=0")
    if not text_data:
        return False

    # 2. Parse Text Structure
    # text_data['sections'] = [start_chapter, start_verse] (usually)
    # text_data['text'] could be single list (one chapter) or list of lists (multiple)
    
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
        if notLinks_data := links_data: # wait, python walrus operator might be too new for some? 3.11 is fine.
            # actually let's stick to standard syntax just in case
            pass
        
        if not links_data:
            continue

        # Aggregate counts
        counts_map = {} # Ref -> { all: 0, Category: 0 ... }
        
        for link in links_data.get('links', []):
            ref = link['anchorRef']
            if ref not in counts_map:
                counts_map[ref] = { 'all': 0 }
                for c in CATEGORIES:
                    counts_map[ref][c] = 0
            
            counts_map[ref]['all'] += 1
            if link['category'] in CATEGORIES:
                counts_map[ref][link['category']] += 1

        # Build Verse objects
        verses = []
        for v in range(chap['count']):
            verse_num = chap['startVerse'] + v
            verse_ref = f"{text_data['book']} {chap['chapter']}:{verse_num}"
            
            counts = counts_map.get(verse_ref, { 'all': 0 })
            
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

    path = os.path.join(DATA_DIR, f"{slug}.json")
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"Saved {slug}.json")
    return True

import concurrent.futures

# ... (imports are same)

# ... (parashot list is same)

# ... (API_BASE, etc same)

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
    # 5 workers should be safe enough if we keep individual delays low
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(process_parasha_wrapper, p): p for p in parashot}
        
        for future in concurrent.futures.as_completed(futures):
            p = futures[future]
            try:
                future.result()
            except Exception as e:
                print(f"Exception for {p['name']}: {e}")

if __name__ == "__main__":
    main()
