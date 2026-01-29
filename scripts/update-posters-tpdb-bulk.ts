
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as cheerio from 'cheerio';
import { mockMovies as originalMockMovies } from '../src/lib/mock-data';

// Helper to fetch HTML with realistic headers
function fetchHtml(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://theposterdb.com/'
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

async function run() {
    console.log(`Starting TPDb update for ${originalMockMovies.length} movies...`);
    const updatedMovies = [...originalMockMovies];
    const batchSize = 3; // Small batch to avoid blocking
    
    for (let i = 0; i < updatedMovies.length; i += batchSize) {
        const batch = updatedMovies.slice(i, i + batchSize);
        console.log(`Processing batch ${i} to ${i + batchSize}...`);
        
        await Promise.all(batch.map(async (movie) => {
             // Skip if already a TPDb view link (we fixed some manually)
             if (movie.poster_path?.includes('theposterdb.com/api/assets/')) return;

             const title = movie.title;
             const year = movie.release_date ? movie.release_date.split('-')[0] : '';
             const query = encodeURIComponent(title);
             const searchUrl = `https://theposterdb.com/search?term=${query}`;
             
             try {
                 const html = await fetchHtml(searchUrl);
                 const $ = cheerio.load(html);
                 
                 // Look for the first result that matches (or just the first one)
                 // TPDb search results are usually in .overlay-content containers
                 const firstMatch = $('.overlay-content a').first();
                 
                 if (firstMatch.length) {
                     const posterUrl = firstMatch.attr('href'); // e.g., https://theposterdb.com/poster/140244
                     const idMatch = posterUrl.match(/\/poster\/(\d+)/);
                     
                     if (idMatch) {
                         const tpdbId = idMatch[1];
                         const viewUrl = `https://theposterdb.com/api/assets/${tpdbId}/view`;
                         console.log(`Updated ${movie.title} -> ${viewUrl}`);
                         movie.poster_path = viewUrl;
                         movie.backdrop_path = viewUrl; // For now, use poster as backdrop too for consistency
                     }
                 } else {
                     console.log(`No TPDb result for ${movie.title}`);
                 }
                 
             } catch (e) {
                 console.log(`Error updating ${movie.title}`, e.message);
             }
        }));
        
        // Save every 20 movies
        if (i % 20 === 0) saveFile(updatedMovies);
        
        // Politeness delay
        await new Promise(r => setTimeout(r, 2000));
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
    // console.log("File saved.");
}

run();
