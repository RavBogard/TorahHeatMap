import urllib.request
import json

url = "https://www.sefaria.org/api/related/Genesis%201"
req = urllib.request.Request(url, headers={'User-Agent': 'TorahHeatMap/1.0'})
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    
    print(f"Total links: {len(data['links'])}")
    
    # Find a Rashi link
    for link in data['links']:
        # Check various fields that might indicate Rashi
        if 'Rashi' in link['sourceRef'] or 'Rashi' in link.get('collectiveTitle', ''):
            print("\nFound Rashi link:")
            print(json.dumps(link, indent=2))
            break
