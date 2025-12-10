const https = require('https');

function get(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function testVideo() {
    try {
        console.log("Fetching Genesis 1:1...");
        // Test 1: Text with commentary
        const textData = await get('https://www.sefaria.org/api/texts/Genesis.1.1?commentary=1');
        console.log("Text Data Keys:", Object.keys(textData));
        if (textData.commentary) {
            console.log("Commentary Array Length:", textData.commentary.length);
            console.log("First Commentary Sample:", textData.commentary[0]);
        }

        // Test 2: Related API
        console.log("\nFetching Related for Genesis 1:1...");
        const relatedData = await get('https://www.sefaria.org/api/related/Genesis.1.1');
        console.log("Related Data Keys:", Object.keys(relatedData));
        if (relatedData.links) {
            console.log("Links count:", relatedData.links.length);
            const categories = {};
            relatedData.links.forEach(l => {
                if (!categories[l.category]) categories[l.category] = 0;
                categories[l.category]++;
            });
            console.log("Categories breakdown:", categories);
        }

    } catch (err) {
        console.error("Error:", err);
    }
}

testVideo();
