
import * as https from 'https';

function fetchUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        };
        const req = https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.end();
    });
}

async function test() {
    const query = encodeURIComponent("2046 2004");
    const url = `https://www.themoviedb.org/search/movie?query=${query}`;
    console.log(`Fetching ${url}...`);
    const html = await fetchUrl(url);
    console.log("HTML length:", html.length);
    console.log(html.substring(0, 500)); // Header
    
    const posterMatch = html.match(/src="(\/t\/p\/[\w_]+\/[\w]+\.jpg)"/);
    console.log("Regex match:", posterMatch);
    
    // Print all src to see what's there
    const allSrc = html.match(/src="([^"]+)"/g);
    console.log("All srcs found (first 10):", allSrc ? allSrc.slice(0, 10) : 'None');
}

test();
