import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
dotenv.config({ path: '.env.local' });

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "studio-1424581667-39f18",
  appId: "1:183217664315:web:ae8d600409713ad7cc871e",
  apiKey: "AIzaSyClQXWX6roCR6yNzL55UvjL22nJ3yXMejk",
  authDomain: "studio-1424581667-39f18.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "183217664315"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const REQUEST_DELAY = 350;

// Read URLs from file
const urlsFilePath = path.join(__dirname, 'movie-urls-to-import.txt');
const MOVIE_LINKS = fs.readFileSync(urlsFilePath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

console.log(`📂 Loaded ${MOVIE_LINKS.length} URLs from file`);

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function resolveLetterboxdUrl(url: string): Promise<string> {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.url;
}

async function scrapeTmdbId(url: string): Promise<number | null> {
    try {
        const res = await fetch(url);
        const html = await res.text();
        
        const match = html.match(/data-tmdb-id="(\d+)"/);
        if (match) {
            return parseInt(match[1], 10);
        }
        return null;
    } catch (e) {
        console.error(`Error scraping ${url}:`, e);
        return null;
    }
}

async function fetchTmdbMovieData(tmdbId: number, lang: string) {
    const url = `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`;
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

async function processMovie(letterboxdUrl: string, index: number) {
    console.log(`\nProcessing: ${letterboxdUrl}`);
    
    try {
        // Resolve short URL
        const fullUrl = await resolveLetterboxdUrl(letterboxdUrl);
        console.log(`Full URL: ${fullUrl}`);
        
        await sleep(REQUEST_DELAY);
        
        // Get TMDB ID
        const tmdbId = await scrapeTmdbId(fullUrl);
        if (!tmdbId) {
            console.log(`❌ No TMDB ID found`);
            return { success: false, reason: 'no_tmdb_id' };
        }
        
        console.log(`TMDB ID: ${tmdbId}`);
        
        // Check if movie already exists
        const movieRef = doc(firestore, 'movies', tmdbId.toString());
        const movieSnap = await getDoc(movieRef);
        
        if (movieSnap.exists()) {
            console.log(`⏭️  ${movieSnap.data().title} already exists. Skipping.`);
            return { success: false, reason: 'already_exists' };
        }
        
        await sleep(REQUEST_DELAY);
        
        // Fetch movie data
        const enData = await fetchTmdbMovieData(tmdbId, 'en-US');
        await sleep(REQUEST_DELAY);
        const ptData = await fetchTmdbMovieData(tmdbId, 'pt-BR');
        
        if (!enData) {
            console.log(`❌ Failed to fetch TMDB data`);
            return { success: false, reason: 'tmdb_fetch_failed' };
        }
        
        // Prepare movie data
        const movieData = {
            id: tmdbId.toString(),
            title: ptData?.title || enData.title,
            original_title: enData.original_title,
            overview: ptData?.overview || enData.overview || '',
            poster_path: enData.poster_path ? `https://image.tmdb.org/t/p/w500${enData.poster_path}` : '',
            backdrop_path: enData.backdrop_path ? `https://image.tmdb.org/t/p/original${enData.backdrop_path}` : '',
            release_date: enData.release_date || '',
            runtime: enData.runtime || 0,
            vote_average: enData.vote_average || 0,
            genres: enData.genres || [],
            genre_ids: (enData.genres || []).map((g: any) => g.id),
            createdAt: serverTimestamp(),
        };
        
        // Save to Firestore
        await setDoc(movieRef, movieData);
        
        console.log(`✅ Done! ${movieData.title} (ID: ${tmdbId})`);
        return { success: true, title: movieData.title };
        
    } catch (error: any) {
        console.error(`❌ Error:`, error.message);
        return { success: false, reason: 'error', error: error.message };
    }
}

async function main() {
    console.log(`\n🎬 Starting bulk import of ${MOVIE_LINKS.length} movies...\n`);
    console.log(`=`.repeat(80));
    
    let processed = 0;
    let added = 0;
    let skipped = 0;
    let errors = 0;
    
    for (let i = 0; i < MOVIE_LINKS.length; i++) {
        const url = MOVIE_LINKS[i];
        console.log(`\n[${i + 1}/${MOVIE_LINKS.length}]`);
        
        const result = await processMovie(url, i);
        processed++;
        
        if (result.success) {
            added++;
        } else if (result.reason === 'already_exists') {
            skipped++;
        } else {
            errors++;
        }
        
        // Progress update every 50 movies
        if ((i + 1) % 50 === 0) {
            console.log(`\n${'='.repeat(80)}`);
            console.log(`📊 Progress: ${processed}/${MOVIE_LINKS.length} | ✅ Added: ${added} | ⏭️  Skipped: ${skipped} | ❌ Errors: ${errors}`);
            console.log(`${'='.repeat(80)}`);
        }
        
        await sleep(REQUEST_DELAY);
    }
    
    console.log(`\n${'='.repeat(80)}`);
    console.log(`\n🎉 Bulk import completed!`);
    console.log(`📊 Final Stats:`);
    console.log(`   Total processed: ${processed}`);
    console.log(`   ✅ Added: ${added}`);
    console.log(`   ⏭️  Skipped (already exist): ${skipped}`);
    console.log(`   ❌ Errors: ${errors}`);
    console.log(`\n${'='.repeat(80)}\n`);
}

main().catch(console.error);
