
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
            if (res.statusCode !== 200) {
                 // console.log(`URL: ${url} - Status: ${res.statusCode}`);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.end();
    });
}

async function run() {
    console.log(`Starting TPDb 2-Step update for ${originalMockMovies.length} movies...`);
    const updatedMovies = [...originalMockMovies];
    const batchSize = 1; // Stepwise to avoid rate limits
    
    for (let i = 0; i < updatedMovies.length; i += batchSize) {
        const movie = updatedMovies[i];
        
        // Skip if already a TPDb view link (manually fixed or already processed)
        if (movie.poster_path?.includes('theposterdb.com/api/assets/')) {
             console.log(`Skipping ${movie.title} (already TPDb)`);
             continue;
        }

        const title = movie.title;
        const query = encodeURIComponent(title);
        const searchUrl = `https://theposterdb.com/search?term=${query}`;
        
        try {
            // STEP 1: Search for movie collection page
            const searchHtml = await fetchHtml(searchUrl);
            const $search = cheerio.load(searchHtml);
            
            const firstResult = $search('a.btn.btn-dark-lighter').first();
            
            if (firstResult.length) {
                const collectionUrl = firstResult.attr('href');
                // console.log(`Found collection for ${movie.title}: ${collectionUrl}`);
                
                // Add a small delay between steps
                await new Promise(r => setTimeout(r, 500));
                
                // STEP 2: Fetch collection page and get first poster ID
                const collectionHtml = await fetchHtml(collectionUrl);
                const $collection = cheerio.load(collectionHtml);
                
                const firstPosterOverlay = $collection('.hovereffect .overlay').first();
                const posterId = firstPosterOverlay.attr('data-poster-id');
                
                if (posterId) {
                    const viewUrl = `https://theposterdb.com/api/assets/${posterId}/view`;
                    console.log(`[${i+1}/370] Updated ${movie.title} -> ${viewUrl}`);
                    movie.poster_path = viewUrl;
                    movie.backdrop_path = viewUrl;
                } else {
                    console.log(`[${i+1}/370] No poster ID found on collection page for ${movie.title}`);
                }
            } else {
                console.log(`[${i+1}/370] No collection result for ${movie.title}`);
            }
            
        } catch (e) {
            console.log(`[${i+1}/370] Error updating ${movie.title}:`, e.message);
        }
        
        // Save intermittently
        if (i % 20 === 0) saveFile(updatedMovies);
        
        // Politeness delay between movies
        await new Promise(r => setTimeout(r, 1500));
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
}

run();
