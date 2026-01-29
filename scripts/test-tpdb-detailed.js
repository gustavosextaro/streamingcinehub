
const https = require('https');
const cheerio = require('cheerio');

const title = "Cinema Paradiso";
const url = `https://theposterdb.com/search?term=${encodeURIComponent(title)}`;

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
};

https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const $ = cheerio.load(data);
        console.log("Title:", $('title').text());
        console.log("Results found:", $('.overlay-content').length);
        
        $('.overlay-content').each((i, el) => {
            const link = $(el).find('a').attr('href');
            const posterTitle = $(el).find('p').text().trim();
            console.log(`Result ${i + 1}: ${posterTitle} -> ${link}`);
        });
        
        if (data.includes('Access denied')) {
            console.log("BLOCKED BY CLOUDFLARE");
        }
    });
});
