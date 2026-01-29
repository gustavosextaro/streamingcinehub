
import * as https from 'https';
import * as cheerio from 'cheerio';

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
    
    try {
        const html = await fetchUrl(url);
        const $ = cheerio.load(html);
        
        // TMDB Search result card
        const firstResult = $('.card.style_1').first();
        if (!firstResult.length) {
            console.log("No card found. HTML structure might be different or blocking.");
            // Print body snippet
            console.log($('body').text().substring(0, 200));
            return;
        }
        
        const img = firstResult.find('img.poster');
        const src = img.attr('src');
        const srcset = img.attr('srcset');
        
        console.log("Found src:", src);
        console.log("Found srcset:", srcset);
        
        if (src) {
             const fileName = src.split('/').pop();
             const originalUrl = `https://image.tmdb.org/t/p/original/${fileName}`;
             console.log("Target URL:", originalUrl);
        }
        
    } catch (e) {
        console.error(e);
    }
}

test();
