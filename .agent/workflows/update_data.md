---
description: Update the cached Torah metrics data from Sefaria API
---

To update the static data cache (e.g. if Sefaria data changes or you want to refresh statistics):

1. **Run the update script:**
   This script fetches the latest text and commentary counts for all parashot and saves them as JSON files in the `data/` directory.
   ```bash
   // turbo
   python3 scripts/fetch_data.py
   ```

2. **Verify the data (optional):**
   Check that the JSON files in `data/` have been updated (check timestamps).

3. **Commit the changes:**
   ```bash
   git add data/
   git commit -m "Update cached data from Sefaria"
   git push
   ```
TorahHeatMap/scripts/generate_summary.py
