
import urllib.request
import json

def fetch_index(title):
    url = f"https://www.sefaria.org/api/index/{title.replace(' ', '_')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'TorahHeatMap/Test'})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode())

def main():
    print("Fetching index for Ramban on Genesis...")
    data = fetch_index("Ramban on Genesis")
    print(json.dumps(data, indent=2))

if __name__ == "__main__":
    main()
