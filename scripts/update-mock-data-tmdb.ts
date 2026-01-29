
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { mockMovies as originalMockMovies } from '../src/lib/mock-data';

// Helper to fetch URL with Headers to look like a browser
function fetchUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        };
        
        const req = https.get(url, options, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                 if (res.headers.location) {
                     // Handle relative redirect
                     let redirectUrl = res.headers.location;
                     if (redirectUrl.startsWith('/')) {
                         redirectUrl = 'https://www.themoviedb.org' + redirectUrl;
                     }
                     fetchUrl(redirectUrl).then(resolve).catch(reject);
                     return;
                 }
            }
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(`Status Code: ${res.statusCode}`));
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
    console.log(`Starting TMDB scrape for ${originalMockMovies.length} movies...`);
    const updatedMovies = [...originalMockMovies];
    const batchSize = 5; // Slow batch to avoid aggressive rate limiting
    
    for (let i = 0; i < updatedMovies.length; i += batchSize) {
        const batch = updatedMovies.slice(i, i + batchSize);
        console.log(`Processing batch ${i} to ${i + batchSize}...`);
        
        await Promise.all(batch.map(async (movie) => {
             const year = movie.release_date ? movie.release_date.split('-')[0] : '';
             const query = encodeURIComponent(`${movie.title} ${year}`);
             const searchUrl = `https://www.themoviedb.org/search/movie?query=${query}`;
             
             try {
                 const html = await fetchUrl(searchUrl);
                 
                 // Look for first result card
                 // Pattern: <div class="card ..."> ... <img class="poster" src="..." ...>
                 // or <img ... class="poster" ... data-src="...">
                 // TMDB usually uses srcset or src.
                 // Let's look for: src="/t/p/w94_and_h141_bestv2/..."
                 
                 const posterMatch = html.match(/src="(\/t\/p\/[\w_]+\/[\w]+\.jpg)"/);
                 
                 if (posterMatch && posterMatch[1]) {
                     // Construct high res URL
                     // Found: /t/p/w94_and_h141_bestv2/file.jpg
                     // Target: https://image.tmdb.org/t/p/original/file.jpg
                     
                     const pathPart = posterMatch[1];
                     const fileName = pathPart.split('/').pop();
                     
                     if (fileName) {
                         const originalUrl = `https://image.tmdb.org/t/p/original/${fileName}`;
                         movie.poster_path = originalUrl;
                         // Use same for backdrop if missing/broken, or try to keep specific backdrop logic later?
                         // For now, let's fix the poster.
                         if (!movie.backdrop_path || movie.backdrop_path.includes('picsum') || movie.backdrop_path.includes('ltrbxd')) {
                             movie.backdrop_path = originalUrl;
                         }
                         console.log(`Updated ${movie.title} -> ${originalUrl}`);
                     }
                 } else {
                     console.log(`No poster found for ${movie.title}`);
                 }
                 
             } catch (e) {
                 console.error(`Error fetching ${movie.title}: ${e.message}`);
             }
        }));
        
        if (i % 20 === 0) saveFile(updatedMovies);
        await new Promise(r => setTimeout(r, 1000)); // 1s pause
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
