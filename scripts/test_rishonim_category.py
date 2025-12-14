
import urllib.request
import json

def fetch_links(ref):
    url = f"https://www.sefaria.org/api/related/{ref.replace(' ', '%20')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'TorahHeatMap/Test'})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode())

def main():
    print("Fetching links for Genesis 1:1...")
    data = fetch_links("Genesis 1:1")
    
    seen_categories = set()
    rishonim_candidates = ["Ramban", "Ibn Ezra", "Rashbam", "Sforno"]
    
    found_rishonim = []
    
    for link in data['links']:
        cat = link.get('category')
        seen_categories.add(cat)
        
        # Check title
        title = link.get('collectiveTitle', {}).get('en', '') if isinstance(link.get('collectiveTitle'), dict) else str(link.get('collectiveTitle', ''))
        
        for r in rishonim_candidates:
            if r in title:
                found_rishonim.append({
                    "title": title,
                    "category": cat,
                    "type": link.get('type')
                })
    
    print("\n--- Categories Found ---")
    print(seen_categories)
    
    print("\n--- Rishonim Check ---")
    for item in found_rishonim:
        print(f"Title: {item['title']}, Category: {item['category']}")

if __name__ == "__main__":
    main()
