
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
    summary_chapters = {b: {} for b in BOOKS}
    
    # Structure: { BookName: { ParashaSlug: { name: "...", count: 0, slug: "..." } } }
    summary_parashot = {b: [] for b in BOOKS}
    
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

        # Collect Parasha Total
        parasha_counts = {}

        for chap_data in data['data']:
            chap_num = chap_data['chapter']
            
            # Initialize chapter entry if not exists in summary_chapters
            if chap_num not in summary_chapters[book]:
                summary_chapters[book][chap_num] = { 'counts': {}, 'parashot': [] }
            
            # Sum counts for this chapter from this parasha
            for v in chap_data['verses']:
                v_counts = v.get('counts', {})
                
                # Iterate all categories in the verse counts
                for cat, val in v_counts.items():
                    # Update chapter total
                    if cat not in summary_chapters[book][chap_num]['counts']:
                        summary_chapters[book][chap_num]['counts'][cat] = 0
                    summary_chapters[book][chap_num]['counts'][cat] += val
                    
                    # Update parasha total
                    if cat not in parasha_counts:
                        parasha_counts[cat] = 0
                    parasha_counts[cat] += val
            
            # Record that this parasha contains this chapter
            if parasha_slug not in summary_chapters[book][chap_num]['parashot']:
                summary_chapters[book][chap_num]['parashot'].append(parasha_slug)

        # Store Parasha Entry
        summary_parashot[book].append({
            "name": parasha_name,
            "counts": parasha_counts,
            "count": parasha_counts.get('all', 0), # Keep legacy for safety
            "slug": parasha_slug
        })

    # Convert chapter summary to final array format
    final_output = {
        "chapters": {},
        "parashot": summary_parashot
    }
    
    for book in BOOKS:
        chapters = []
        # Sort by chapter number
        sorted_chaps = sorted(summary_chapters[book].keys())
        
        for ch in sorted_chaps:
            info = summary_chapters[book][ch]
            # Determine primary slug (just take the first one found, usually the one starting the chapter or containing most of it)
            # Since we processed in arbitrary order, let's just pick the first one. 
            # Ideally we'd map "Starts With" but "First Found" is usually good enough for navigation.
            # Actually, let's just pick the first one.
            primary_slug = info['parashot'][0] if info['parashot'] else ""
            
            chapters.append({
                "chapter": ch,
                "counts": info['counts'],
                "count": info['counts'].get('all', 0), # separate total for legacy/ease
                "slug": primary_slug
            })
        
        final_output["chapters"][book] = chapters
        
        # Sort parashot roughly by order? 
        # Currently they are appended in file read order (random).
        # We need a defined order.
        # Let's rely on the frontend or a fixed list to sort? 
        # Or sorting by filename/slug might be "okay" but not perfect.
        # Better: keep them as is, but maybe the frontend `app.js` has the correct order in `parashot` array.
        # We will let frontend sort or map by slug.

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_output, f, ensure_ascii=False, indent=2)
    
    print(f"Saved summary to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
