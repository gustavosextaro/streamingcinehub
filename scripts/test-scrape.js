const https = require('https');

const url = 'https://letterboxd.com/film/2046/';

console.log(`Fetching ${url}...`);

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // 1. Try JSON-LD (often has high res poster)
        const jsonMatch = data.match(/<script type="application\/ld\+json">\s*({.*?})\s*<\/script>/s);
        if (jsonMatch) {
            try {
                const json = JSON.parse(jsonMatch[1]);
                console.log('JSON LD Image (Expected Poster):', json.image);
            } catch(e) { console.log('JSON Error', e); }
        }

        // 2. Try Regex for <div class="film-poster"> <img src="...">
        // Look for the reliable poster container
        const posterRegex = /<div class="film-poster[^"]*"[^>]*data-image-src="([^"]+)"/s;
        const match = data.match(posterRegex);
        if (match && match[1]) {
            console.log('Data-Image-Src match:', match[1]);
        } else {
            console.log("No data-image-src found.");
        }
        
        // 3. Check for og:image to compare
        const ogMatch = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (ogMatch) console.log('OG Image (Likely Backdrop):', ogMatch[1]);
    });
}).on('error', (e) => {
    console.error(e);
});
