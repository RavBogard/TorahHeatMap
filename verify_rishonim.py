
import scripts.fetch_data as fetch_data
import os

def main():
    print("Testing Rishonim generation for Bereshit...")
    
    # Mock parasha object for Bereshit
    bereshit = { "name": "Bereshit", "ref": "Genesis 1:1-6:8", "heName": "בראשית" }
    
    # Remove existing file to force regen
    slug = fetch_data.get_slug(bereshit['name'])
    path = os.path.join(fetch_data.DATA_DIR, f"{slug}.json")
    if os.path.exists(path):
        os.remove(path)
        print(f"Removed {path}")

    # Run processing
    fetch_data.process_parasha(bereshit)
    
    # Verify result
    import json
    with open(path, 'r') as f:
        data = json.load(f)
        
    found_rishonim = False
    max_rishonim = 0
    
    for chap in data['data']:
        for v in chap['verses']:
            count = v['counts'].get('Rishonim', 0)
            if count > 0:
                found_rishonim = True
            if count > max_rishonim:
                max_rishonim = count
                
    print(f"\nVerification Result:")
    print(f"File created: {path}")
    print(f"Found Rishonim counts: {found_rishonim}")
    print(f"Max Rishonim count: {max_rishonim}")

if __name__ == "__main__":
    main()
