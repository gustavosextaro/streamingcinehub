
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs, updateDoc } from 'firebase/firestore';

// Environment check
if (!process.env.TMDB_API_KEY) {
    console.error("ERROR: TMDB_API_KEY not found. Make sure .env.local is loaded.");
    process.exit(1);
}

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

// Firebase Config (from src/firebase/config.ts)
const firebaseConfig = {
  "projectId": "studio-1424581667-39f18",
  "appId": "1:183217664315:web:ae8d600409713ad7cc871e",
  "apiKey": "AIzaSyClQXWX6roCR6yNzL55UvjL22nJ3yXMejk",
  "authDomain": "studio-1424581667-39f18.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "183217664315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Links to Import
const MOVIE_LINKS = [
    "https://boxd.it/HJrw",
    "https://boxd.it/27by",
    "https://boxd.it/wAJY",
    "https://boxd.it/27cG",
    "https://boxd.it/zGqO",
    "https://boxd.it/HNNQ",
    "https://boxd.it/yXaQ",
    "https://boxd.it/1Ao0",
    "https://boxd.it/4A8C",
    "https://boxd.it/ujeK",
    "https://boxd.it/20NA",
    "https://boxd.it/d5IW",
    "https://boxd.it/26l8",
    "https://boxd.it/vjsO",
    "https://boxd.it/MxXq",
    "https://boxd.it/20is",
    "https://boxd.it/Qbtc",
    "https://boxd.it/29lg",
    "https://boxd.it/mRXS",
    "https://boxd.it/1G46",
    "https://boxd.it/BYgm",
    "https://boxd.it/45zM",
    "https://boxd.it/HSa",
    "https://boxd.it/Egcw",
    "https://boxd.it/1Inu",
    "https://boxd.it/eDjy",
    "https://boxd.it/475Y",
    "https://boxd.it/uock",
    "https://boxd.it/JyRW",
    "https://boxd.it/KO6",
    "https://boxd.it/d6cs",
    "https://boxd.it/4gcu",
    "https://boxd.it/hyNk",
    "https://boxd.it/z5n4",
    "https://boxd.it/23q0",
    "https://boxd.it/19AS",
    "https://boxd.it/1kje",
    "https://boxd.it/1E3g",
    "https://boxd.it/288U",
    "https://boxd.it/CVaM",
    "https://boxd.it/MABs",
    "https://boxd.it/vXei",
    "https://boxd.it/M6VC",
    "https://boxd.it/Fvai",
    "https://boxd.it/1OHq",
    "https://boxd.it/l3Ki",
    "https://boxd.it/Wa8",
    "https://boxd.it/1Src",
    "https://boxd.it/1UbA",
    "https://boxd.it/BDlg",
    "https://boxd.it/1HVg",
    "https://boxd.it/hMu2",
    "https://boxd.it/3xjq",
    "https://boxd.it/2aFQ",
    "https://boxd.it/26uO",
    "https://boxd.it/29Vo",
    "https://boxd.it/D4BM",
    "https://boxd.it/AeF4",
    "https://boxd.it/1NI8",
    "https://boxd.it/2tKA",
    "https://boxd.it/g7d8",
    "https://boxd.it/wobU",
    "https://boxd.it/2iWK",
    "https://boxd.it/yyGs",
    "https://boxd.it/fSUQ",
    "https://boxd.it/GYHi",
    "https://boxd.it/u6t8",
    "https://boxd.it/Gy1U",
    "https://boxd.it/1hgQ",
    "https://boxd.it/41D6",
    "https://boxd.it/23hW",
    "https://boxd.it/1H4w",
    "https://boxd.it/GGhm",
    "https://boxd.it/fyVu",
    "https://boxd.it/exos",
    "https://boxd.it/CqBs",
    "https://boxd.it/KRbM",
    "https://boxd.it/K5dU",
    "https://boxd.it/3rry",
    "https://boxd.it/3jIQ",
    "https://boxd.it/1rYo",
    "https://boxd.it/1Kce",
    "https://boxd.it/5DMs",
    "https://boxd.it/Qr7G",
    "https://boxd.it/4Ui8",
    "https://boxd.it/vIOg",
    "https://boxd.it/xR8i",
    "https://boxd.it/1uNe",
    "https://boxd.it/1U16",
    "https://boxd.it/25WC"
];

async function resolveLetterboxdUrl(shortUrl: string): Promise<string> {
    const res = await fetch(shortUrl, { method: 'HEAD', redirect: 'follow' });
    return res.url;
}

async function scrapeTmdbId(url: string): Promise<number | null> {
    try {
        const res = await fetch(url, {
             headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const html = await res.text();
        const match = html.match(/data-tmdb-id="(\d+)"/) || html.match(/tmdb\.org\/movie\/(\d+)/);
        if (match && match[1]) {
            return parseInt(match[1], 10);
        }
        return null;
    } catch (e) {
        console.error(`Failed to scrape ${url}`, e);
        return null;
    }
}

async function fetchTmdbData(movieId: number) {
    const [ptRes, enRes] = await Promise.all([
        fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`),
        fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`)
    ]);

    if (!ptRes.ok || !enRes.ok) return null;

    const [ptData, enData] = await Promise.all([ptRes.json(), enRes.json()]);

     const posterUrl = enData.poster_path 
      ? `${TMDB_IMAGE_BASE}${enData.poster_path}` 
      : 'https://placehold.co/600x900?text=No+Poster';
      
    const backdropUrl = enData.backdrop_path 
      ? `${TMDB_IMAGE_BASE}${enData.backdrop_path}` 
      : 'https://placehold.co/1280x720?text=No+Backdrop';

    return {
      id: enData.id,
      title: enData.title, // English Title
      release_date: enData.release_date || 'N/A',
      runtime: enData.runtime || 0,
      overview: ptData.overview || enData.overview || '', // PT Overview
      poster_path: posterUrl, // English Poster
      backdrop_path: backdropUrl,
      genres: ptData.genres || [], // PT Genres
      tagline: ptData.tagline || enData.tagline,
    };
}

async function saveToFirestore(movie: any) {
    const moviesRef = collection(db, 'movies');
    
    // Check for duplicate by ID check or Title check? 
    // Ideally we rely on Firestore ID or a unique field. Current app just adds new docs.
    // However, to avoid spamming duplicates, let's query by ID if we stored it?
    // Current app schema: id (random number from mock/tmdb), title, etc.
    // "id" field in doc matches TMDB ID.
    
    const q = query(moviesRef, where("id", "==", movie.id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        console.log(`Movie ${movie.title} (ID: ${movie.id}) already exists. Updating...`);
        const docRef = snapshot.docs[0].ref;
        await updateDoc(docRef, {
            ...movie,
            updatedAt: serverTimestamp() // Only update timestamp if modifying
        });
        return "Updated";
    } else {
        console.log(`Adding new movie: ${movie.title}`);
        await addDoc(moviesRef, {
            ...movie,
            createdAt: serverTimestamp()
        });
        return "Added";
    }
}

async function run() {
    console.log(`Processing ${MOVIE_LINKS.length} movies...`);

    for (const link of MOVIE_LINKS) {
        try {
            console.log(`\nProcessing: ${link}`);
            const fullUrl = await resolveLetterboxdUrl(link);
            console.log(`Resolved: ${fullUrl}`);

            const tmdbId = await scrapeTmdbId(fullUrl);
            if (!tmdbId) {
                console.error(`Could not find TMDB ID for ${fullUrl}`);
                continue;
            }
            console.log(`TMDB ID: ${tmdbId}`);

            const movieData = await fetchTmdbData(tmdbId);
            if (!movieData) {
                console.error(`Failed to fetch TMDB data for ID ${tmdbId}`);
                continue;
            }

            const status = await saveToFirestore(movieData);
            console.log(`Result: ${status} - ${movieData.title}`);
            
            // Nice delay
            await new Promise(r => setTimeout(r, 500));

        } catch (error) {
            console.error(`Error processing ${link}:`, error);
        }
    }
    console.log("\nDone!");
}

run();
