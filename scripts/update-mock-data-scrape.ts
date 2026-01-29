
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { mockMovies as originalMockMovies } from '../src/lib/mock-data';

// Helper to fetch URL
function fetchUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                 // Follow redirect once
                 if (res.headers.location) {
                     fetchUrl(res.headers.location).then(resolve).catch(reject);
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

// Helper to slugify
function slugify(text: string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start
        .replace(/-+$/, '');            // Trim - from end
}

async function run() {
    console.log(`Starting update for ${originalMockMovies.length} movies...`);
    const updatedMovies = [...originalMockMovies];
    
    // We process only the mocked picsum ones OR all? 
    // User said "Update all posters".
    // I will prioritize broken ones (TMDB links that are 404 or picsum).
    // The previous manual update fixed 6. I will skip those if they look like amazon/wikimedia.
    
    const batchSize = 10;
    
    for (let i = 0; i < updatedMovies.length; i += batchSize) {
        const batch = updatedMovies.slice(i, i + batchSize);
        console.log(`Processing batch ${i} to ${i + batchSize}...`);
        
        await Promise.all(batch.map(async (movie) => {
             // Skip if we manually verified it (Amazon/Wikimedia)
             if (movie.poster_path?.includes('media-amazon.com') || movie.poster_path?.includes('wikimedia.org')) {
                 return;
             }
             
             // Try Letterboxd
             // URL format: https://letterboxd.com/film/<slug>/
             // Slug is usually title-year or title
             
             const year = movie.release_date ? movie.release_date.split('-')[0] : '';
             const titleSlug = slugify(movie.title);
             let potentialUrls = [
                 `https://letterboxd.com/film/${titleSlug}-${year}/`,
                 `https://letterboxd.com/film/${titleSlug}/`
             ];
             
             // Try fetching
             let html = null;
             let workedUrl = '';
             
             for (const pUrl of potentialUrls) {
                 try {
                     html = await fetchUrl(pUrl);
                     workedUrl = pUrl;
                     break;
                 } catch (e) {
                     // ignore 404
                 }
             }
             
             if (!html) {
                 console.log(`Could not find Letterboxd page for ${movie.title}`);
                 return;
             }
             
             // Extract images
             // 1. JSON-LD (Best for Poster)
             const jsonMatch = html.match(/<script type="application\/ld\+json">\s*({.*?})\s*<\/script>/s);
             let posterUrl = null;
             
             if (jsonMatch) {
                 try {
                     const json = JSON.parse(jsonMatch[1]);
                     if (json.image) posterUrl = json.image;
                 } catch (e) {}
             }
             
             // 2. data-image-src on film-poster div (Backup)
             if (!posterUrl) {
                 const posterDivMatch = html.match(/<div class="film-poster[^"]*"[^>]*data-image-src="([^"]+)"/s);
                 if (posterDivMatch) posterUrl = posterDivMatch[1];
             }

            // 3. Fallback to og:image ONLY if it seems to be a poster (portrait)
            // It's hard to tell from URL.
            // Letterboxd og:image is almost always 1.91:1 (landscape).
            // So we should AVOID using og:image for "poster_path" if possible.
            // If we found NOTHING else, maybe it's better than nothing? 
            // The user hates distorted images. Better to have no image than a distorted one? 
            // Or use a generic placeholder?
            // Let's stick to JSON-LD/data-image-src.

             
             if (posterUrl) {
                 // Letterboxd images might be resized.
                 // e.g. https://a.ltrbxd.com/resized/film-poster/...-0-230-0-345-crop.jpg...
                 // We can try to strip the resize param? 
                 // But simply using the provided URL is safer.
                 movie.poster_path = posterUrl;
                 
                 // If backdrop is null or picsum, set it to poster for now (app handles defaults?)
                 // Or leave it.
                 // Ideally we want a backdrop.
                 if (!movie.backdrop_path || movie.backdrop_path.includes('picsum') || movie.backdrop_path.includes('image.tmdb.org'))  {
                     movie.backdrop_path = posterUrl; // Better than broken
                 }
                 console.log(`Updated ${movie.title} -> ${posterUrl}`);
             } else {
                 console.log(`No image found in page for ${movie.title}`);
             }
        }));
        
        // Save progress
        if (i % 20 === 0) saveFile(updatedMovies);
        
        // Rate limit
        await new Promise(r => setTimeout(r, 500));
    }
    
    saveFile(updatedMovies);
    console.log("Done!");
}

function saveFile(movies: any[]) {
    // Reconstruct the file content carefully
    // We need to keep the imports and genres!
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
