
const https = require('https');

const url = 'https://theposterdb.com/api/assets/140244/view';

function follow(u) {
    console.log(`Checking ${u}...`);
    https.get(u, (res) => {
        console.log(`Status: ${res.statusCode}`);
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            console.log(`Redirect to: ${res.headers.location}`);
            follow(res.headers.location);
        } else {
            console.log(`Final URL: ${u}`);
        }
    }).on('error', e => console.error(e));
}

follow(url);
