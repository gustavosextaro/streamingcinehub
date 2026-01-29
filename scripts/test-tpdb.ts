
import * as https from 'https';
import * as cheerio from 'cheerio';

function fetchUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        };
        const req = https.get(url, options, (res) => {
            if (res.statusCode !== 200) {
                 console.log(`Status: ${res.statusCode}`);
                 if (res.statusCode === 301 || res.statusCode === 302) console.log(`Redirect to: ${res.headers.location}`);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.end();
    });
}

async function test() {
    // TPDB Search
    const query = encodeURIComponent("2046");
    const url = `https://theposterdb.com/search?term=${query}`;
    console.log(`Fetching ${url}...`);
    
    try {
        const html = await fetchUrl(url);
        const $ = cheerio.load(html);
        
        // Find result
        // Usually .overlay-container or similar
        // Let's print body length and title to see if we got blocked
        console.log("Title:", $('title').text());
        console.log("Body length:", html.length);
        
        const firstPoster = $('.overlay-content a').first();
        if (firstPoster.length) {
            console.log("Found match Link:", firstPoster.attr('href'));
        } else {
            console.log("No poster link found via scraper.");
        }
        
        // Try to get an image
        const img = $('img').first();
        console.log("First image src:", img.attr('src'));
        
    } catch (e) {
        console.error(e);
    }
}

test();
