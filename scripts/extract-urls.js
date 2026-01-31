const fs = require('fs');

const content = fs.readFileSync('filmesparaadicionar.txt', 'utf-8');
const lines = content.split('\n').map(l => l.trim()).filter(Boolean);

// Extract only URLs
const urls = lines.filter(l => 
    l.startsWith('https://boxd.it/') || 
    l.startsWith('https://letterboxd.com/')
);

console.log(`Total URLs encontradas: ${urls.length}`);
console.log(`\nPrimeiras 5 URLs:`);
urls.slice(0, 5).forEach(url => console.log(url));
console.log(`\nÚltimas 5 URLs:`);
urls.slice(-5).forEach(url => console.log(url));

// Save to a clean list
fs.writeFileSync('scripts/movie-urls-to-import.txt', urls.join('\n'));
console.log(`\n✅ Lista salva em scripts/movie-urls-to-import.txt`);
