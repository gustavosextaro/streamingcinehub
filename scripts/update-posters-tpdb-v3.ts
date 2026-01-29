
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
            if (res.statusCode !== 200 && res.statusCode !== 302) {
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

// Normalize title for better matching
function normalize(str: string) {
    return str.toLowerCase().replace(/[^\w\s]/gi, '').trim();
}

async function run() {
    console.log(`Starting TPDb FIXED update for ${originalMockMovies.length} movies...`);
    const updatedMovies = [...originalMockMovies];
    
    // Some movies we know were wrong based on the screenshot
    const errorIds = [42, 43, 86, 116]; // A Bittersweet Life, A Brighter Summer Day, etc.
    
    for (let i = 0; i < updatedMovies.length; i++) {
        const movie = updatedMovies[i];
        
        // Force reprocessing for all, OR target specific ones if we want to be safe.
        // For now, let's REPROCESS EVERYTHING but with MUCH STRICTER logic.
        
        const title = movie.title;
        const query = encodeURIComponent(title);
        
        // Use the CATEGORY filter for Movies (section 1 on TPDb typically)
        // Actually, TPDb search results are grouped in the HTML.
        const searchUrl = `https://theposterdb.com/search?term=${query}`;
        
        try {
            const searchHtml = await fetchHtml(searchUrl);
            const $search = cheerio.load(searchHtml);
            
            let bestCollectionUrl = null;
            
            // Look through results and find one that matches the title
            $search('a.btn.btn-dark-lighter').each((idx, el) => {
                const resultText = $search(el).text().trim();
                const resultHref = $search(el).attr('href');
                
                // Check if it's a "posters" link (not "users" or "sets")
                if (resultHref && resultHref.includes('/posters/')) {
                    // Try to match title (ignoring year in parenthesis for now)
                    const cleanResultText = resultText.split(' (')[0];
                    if (normalize(cleanResultText) === normalize(title)) {
                        bestCollectionUrl = resultHref;
                        return false; // Break loop
                    }
                }
            });

            if (bestCollectionUrl) {
                await new Promise(r => setTimeout(r, 800));
                
                const collectionHtml = await fetchHtml(bestCollectionUrl);
                const $collection = cheerio.load(collectionHtml);
                
                // CRITICAL: Filter for POSTERS, not Banners.
                // TPDb posters usually have .tpdb-poster class or are in a specific grid.
                // We want data-poster-type="movie" and ensure it's a vertical one.
                
                let foundPosterId = null;
                $collection('.hovereffect .overlay').each((idx, el) => {
                    const posterId = $search(el).attr('data-poster-id');
                    const posterType = $search(el).attr('data-poster-type');
                    
                    // On TPDb, movie posters are type 'movie' or 'show'.
                    // We want to avoid 'collection' type if possible as they might be banners?
                    // Actually, individual posters within a collection are usually fine.
                    
                    if (posterId && (posterType === 'movie' || posterType === 'show')) {
                        foundPosterId = posterId;
                        return false; // Take the first valid movie poster
                    }
                });
                
                if (foundPosterId) {
                    const viewUrl = `https://theposterdb.com/api/assets/${foundPosterId}/view`;
                    console.log(`[${i+1}/370] FIXED ${movie.title} -> ${viewUrl}`);
                    movie.poster_path = viewUrl;
                    movie.backdrop_path = viewUrl; // Still using same for backdrop for now as TPDb is mostly posters
                } else {
                    // Fallback to the very first one if no 'movie' type found
                    const firstId = $collection('.hovereffect .overlay').first().attr('data-poster-id');
                    if (firstId) {
                         const viewUrl = `https://theposterdb.com/api/assets/${firstId}/view`;
                         movie.poster_path = viewUrl;
                         movie.backdrop_path = viewUrl;
                         console.log(`[${i+1}/370] FALLBACK ${movie.title} -> ${viewUrl}`);
                    }
                }
            } else {
                console.log(`[${i+1}/370] SKIP (No match) ${movie.title}`);
            }
            
        } catch (e) {
            console.log(`[${i+1}/370] Error ${movie.title}:`, e.message);
        }
        
        // Save every 10
        if (i % 10 === 0) saveFile(updatedMovies);
        
        await new Promise(r => setTimeout(r, 1200));
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
