
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { mockMovies as originalMockMovies } from '../src/lib/mock-data';

// Helper to fetch JSON
function fetchJson(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { 'User-Agent': 'CineHub-Bot/1.0 (gustavosextaro@gmail.com)' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    resolve({});
                }
            });
        });
        req.on('error', reject);
        req.end();
    });
}

async function run() {
    console.log(`Starting Wikipedia update for ${originalMockMovies.length} movies...`);
    const updatedMovies = [...originalMockMovies];
    const batchSize = 5;
    
    for (let i = 0; i < updatedMovies.length; i += batchSize) {
        const batch = updatedMovies.slice(i, i + batchSize);
        console.log(`Processing batch ${i} to ${i + batchSize}...`);
        
        await Promise.all(batch.map(async (movie) => {
             // 1. Search
             // Prefer English Wikipedia for standard posters
             const year = movie.release_date ? movie.release_date.split('-')[0] : '';
             const query = encodeURIComponent(`${movie.title} ${year} film`);
             const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`;
             
             try {
                 const searchRes = await fetchJson(searchUrl);
                 if (!searchRes.query || !searchRes.query.search || !searchRes.query.search.length) {
                     console.log(`No wiki page for ${movie.title}`);
                     return;
                 }
                 
                 const pageTitle = searchRes.query.search[0].title;
                 
                 // 2. Get Image
                 const titleEncoded = encodeURIComponent(pageTitle);
                 const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${titleEncoded}&prop=pageimages&format=json&pithumbsize=1000`;
                 
                 const imgRes = await fetchJson(imgUrl);
                 if (!imgRes.query || !imgRes.query.pages) return;
                 
                 const pages = imgRes.query.pages;
                 const pageId = Object.keys(pages)[0];
                 const page = pages[pageId];
                 
                 if (page.thumbnail && page.thumbnail.source) {
                     const url = page.thumbnail.source;
                     console.log(`Updated ${movie.title} -> ${url}`);
                     movie.poster_path = url;
                     // Set backdrop to same (or keep existing if we want variety, but user wants consistency)
                     // Wikimedia images are usually high res enough for backdrop if we want.
                     // But typically user wants poster in poster slot.
                     // Let's set backdrop to same for now to avoid broken backdrops.
                     movie.backdrop_path = url;
                 } else {
                     console.log(`No image on wiki page: ${pageTitle}`);
                 }
                 
             } catch (e) {
                 console.log(`Error updating ${movie.title}`, e);
             }
        }));
        
        if (i % 20 === 0) saveFile(updatedMovies);
        await new Promise(r => setTimeout(r, 600)); // Rate limit
    }
    
    saveFile(updatedMovies);
    console.log("Done!");
}

function saveFile(movies: any[]) {
    const fileContent = `
import type { Movie, MovieDetails } from '@/types';

export const genres = [
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 16, name: 'Animação' },
    { id: 35, name: 'Comédia' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentário' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Família' },
    { id: 14, name: 'Fantasia' },
    { id: 36, name: 'História' },
    { id: 27, name: 'Terror' },
    { id: 10402, name: 'Música' },
    { id: 9648, name: 'Mistério' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Ficção científica' },
    { id: 10770, name: 'Cinema TV' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'Guerra' },
    { id: 37, name: 'Faroeste' },
];

export const mockMovies: MovieDetails[] = ${JSON.stringify(movies, null, 2)};
`;
    
    fs.writeFileSync(path.join(process.cwd(), 'src/lib/mock-data.ts'), fileContent);
    console.log("File saved.");
}

run();
