
import json
import os
import re

DATA_DIR = os.path.join(os.path.dirname(__file__), '../data')
OUTPUT_FILE = os.path.join(DATA_DIR, 'torah_summary.json')

BOOKS = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"]

def get_slug(name):
    s = name.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

def main():
    print("Generating Torah Summary...")
    
    # Structure: { BookName: { ChapterNum: { count: 0, parashaSlug: "..." } } }
    summary = {b: {} for b in BOOKS}
    
    # Iterate all json files in data dir
    files = [f for f in os.listdir(DATA_DIR) if f.endswith('.json') and f != 'torah_summary.json']
    
    for filename in files:
        filepath = os.path.join(DATA_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error reading {filename}: {e}")
                continue
            
        book = data['book']
        parasha_name = data['name']
        parasha_slug = get_slug(parasha_name)
        
        if book not in BOOKS:
            print(f"Unknown book {book} in {filename}")
            continue

        for chap_data in data['data']:
            chap_num = chap_data['chapter']
            
            # Initialize chapter entry if not exists
            if chap_num not in summary[book]:
                summary[book][chap_num] = { 'count': 0, 'parashot': [] }
            
            # Sum counts for this chapter from this parasha
            # We iterate verses to be precise
            total_chap_count = 0
            for v in chap_data['verses']:
                total_chap_count += v['counts'].get('all', 0)
            
            summary[book][chap_num]['count'] += total_chap_count
            
            # Record that this parasha contains this chapter
            if parasha_slug not in summary[book][chap_num]['parashot']:
                summary[book][chap_num]['parashot'].append(parasha_slug)

    # Convert to final array format
    # { "Genesis": [ { "chapter": 1, "count": 100, "slug": "bereshit" }, ... ] }
    final_output = {}
    
    for book in BOOKS:
        chapters = []
        # Sort by chapter number
        sorted_chaps = sorted(summary[book].keys())
        
        for ch in sorted_chaps:
            info = summary[book][ch]
            # Determine primary slug (just take the first one found, usually the one starting the chapter or containing most of it)
            # Since we processed in arbitrary order, let's just pick the first one. 
            # Ideally we'd map "Starts With" but "First Found" is usually good enough for navigation.
            # Actually, let's just pick the first one.
            primary_slug = info['parashot'][0] if info['parashot'] else ""
            
            chapters.append({
                "chapter": ch,
                "count": info['count'],
                "slug": primary_slug
            })
        
        final_output[book] = chapters

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_output, f, ensure_ascii=False, indent=2)
    
    print(f"Saved summary to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
