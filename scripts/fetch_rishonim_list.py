
import urllib.request
import json

def fetch_toc():
    url = "https://www.sefaria.org/api/index"
    req = urllib.request.Request(url, headers={'User-Agent': 'TorahHeatMap/Test'})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode())

def find_category(toc, cat_name):
    # TOC is a nested list/dict structure
    # We want to find the node with category == cat_name
    
    # Check top level
    if isinstance(toc, list):
        for item in toc:
            if isinstance(item, dict):
                if item.get('category') == cat_name:
                    return item
                # Recurse
                if 'contents' in item:
                    found = find_category(item['contents'], cat_name)
                    if found: return found
    return None

def extract_titles(node):
    titles = []
    if 'contents' in node:
        for item in node['contents']:
            titles.extend(extract_titles(item))
    elif 'title' in node:
        titles.append(node['title'])
    return titles

def main():
    print("Fetching TOC...")
    toc = fetch_toc()
    
    # Path to Rishonim: Commentary -> Rishonim
    print("Searching for Rishonim...")
    commentary = find_category(toc, "Commentary")
    if not commentary:
        print("Commentary category not found")
        return

    print("Commentary subcategories:")
    for item in commentary.get('contents', []):
        cat = item.get('category')
        if cat:
            print(f"- Category: {cat}")
        else:
            print(f"- Item: {item.get('title', 'Unknown')}")
            
    # Try to find "Tanakh"
    tanakh = find_category(commentary['contents'], "Tanakh")
    if tanakh:
        print("\nFound Commentary -> Tanakh")
        
        # Check inside Tanakh
        for item in tanakh.get('contents', []):
             cat = item.get('category')
             if cat:
                 print(f"  - Category: {cat}")
             
             if cat == "Rishonim on Tanakh":
                 rishonim = item
    else:
        print("Commentary -> Tanakh not found")
        
    if not rishonim:
        # Fallback search
        rishonim = find_category(toc, "Rishonim on Tanakh")

    if not rishonim:
        print("Rishonim category not found ANYWHERE in Commentary")
        return
        
    titles = extract_titles(rishonim)
    print(f"Found {len(titles)} Rishonim titles.")
    # Print first 10
    print(titles[:10])
    
    # We also need to map "Collective Titles" likely matches.
    # e.g. "Ramban on Genesis" -> Collective Title "Ramban"
    # The titles in TOC might be specific books.
    
    # Let's save the list so I can use it.
    with open('rishonim_list.json', 'w') as f:
        json.dump(titles, f, indent=2)

if __name__ == "__main__":
    main()
