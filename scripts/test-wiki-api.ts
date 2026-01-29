
import * as https from 'https';

function fetchUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { 'User-Agent': 'CineHub-Bot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.end();
    });
}

async function test() {
    // 1. Search for page
    const searchTerm = encodeURIComponent("2046 film");
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json`;
    console.log(`Searching: ${searchUrl}`);
    
    const searchJson = JSON.parse(await fetchUrl(searchUrl));
    const firstResult = searchJson.query.search[0];
    
    if (!firstResult) {
        console.log("No results");
        return;
    }
    
    console.log("Found page:", firstResult.title);
    
    // 2. Get Image
    const titleEncoded = encodeURIComponent(firstResult.title);
    const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${titleEncoded}&prop=pageimages&format=json&pithumbsize=1000`;
    
    const imgJson = JSON.parse(await fetchUrl(imgUrl));
    const pages = imgJson.query.pages;
    const pageId = Object.keys(pages)[0];
    const page = pages[pageId];
    
    if (page.thumbnail) {
        console.log("Found poster:", page.thumbnail.source);
    } else {
        console.log("No thumbnail found on page.");
    }
}

test();
