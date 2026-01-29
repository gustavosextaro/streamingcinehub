
import * as fs from 'fs';
import * as path from 'path';
import { genkit, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as dotenv from "dotenv";
import { mockMovies as originalMockMovies } from '../src/lib/mock-data'; // We will read this file directly instead of importing TS if needed, but import is easier.

// Need to handle TS import in JS/TSX script. 
// Since we are running with tsx, we can import directly.

dotenv.config({ path: ".env.local" });

const ai = genkit({
    plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
    model: 'googleai/gemini-2.5-flash',
});

const ImageInfoSchema = z.object({
    poster_path: z.string().nullable().describe("The TMDB original quality poster URL starting with https://image.tmdb.org/t/p/original/"),
    backdrop_path: z.string().nullable().describe("The TMDB original quality backdrop URL starting with https://image.tmdb.org/t/p/original/"),
});

const imagePrompt = ai.definePrompt({
    name: 'movieImageSearch',
    input: { schema: z.object({ title: z.string(), year: z.string().optional() }) },
    output: { schema: ImageInfoSchema },
    prompt: `Find the official HIGH RESOLUTION TMDB poster and backdrop URLs for the movie "{{title}}" {{#if year}}({{year}}){{/if}}.
    
    CRITICAL:
    1. The URLs MUST start with "https://image.tmdb.org/t/p/original/".
    2. Do NOT use w500 or w780. Use 'original'.
    3. If you absolutely cannot find a real TMDB image, return null. 
    4. Do not hallucinatel URLs. They must be valid TMDB paths.
    `
});

async function updateMockData() {
    console.log(`Starting update for ${originalMockMovies.length} movies...`);
    
    // We will process in batches to avoid rate limits? 2.5 flash is fast.
    // Let's do the first 20 movies first to ensure it works and not waste time if user interrupts.
    // User asked for "todos", but we can do it in chunks.
    // Actually, let's try to do as many as possible. 
    // We will create a NEW array.
    
    // Limit to 50 for this run to respond quickly to user? 
    // "todos" means all. But the list is huge.
    // I will do a subset first and see speed.
    
    const updatedMovies = [...originalMockMovies];
    const moviesToUpdate = updatedMovies.length;
    
    console.log(`Targeting ${moviesToUpdate} movies.`);
    
    // Use a concurrency limit
    const batchSize = 5;
    
    for (let i = 0; i < moviesToUpdate; i += batchSize) {
        const batch = updatedMovies.slice(i, i + batchSize);
        console.log(`Processing batch ${i} to ${i + batchSize}...`);
        
        await Promise.all(batch.map(async (movie) => {
             // Skip if already seems to be TMDB original (though current mocks are picsum)
             if (movie.poster_path?.includes('image.tmdb.org/t/p/original')) {
                 return;
             }
             
             try {
                 const year = movie.release_date ? movie.release_date.split('-')[0] : undefined;
                 const { output } = await imagePrompt({ title: movie.title, year });
                 
                 if (output) {
                     if (output.poster_path) movie.poster_path = output.poster_path;
                     if (output.backdrop_path) movie.backdrop_path = output.backdrop_path;
                 }
             } catch (e) {
                 console.error(`Failed to update ${movie.title}:`, e.message);
             }
        }));
        
        // Save progress every batch so we don't lose everything on crash
        if (i % 20 === 0) {
            saveFile(updatedMovies);
        }
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

updateMockData();
