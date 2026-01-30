
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
    "https://boxd.it/1FF6",
    "https://boxd.it/FRwU",
    "https://boxd.it/3IfO",
    "https://boxd.it/Mco",
    "https://boxd.it/cksW",
    "https://boxd.it/VFu",
    "https://boxd.it/Xlw",
    "https://boxd.it/bWxo",
    "https://boxd.it/1sfY",
    "https://boxd.it/24xc",
    "https://boxd.it/4NtI",
    "https://boxd.it/gHp0",
    "https://boxd.it/4ke0",
    "https://boxd.it/CWPw",
    "https://boxd.it/3d2Y",
    "https://boxd.it/1Ynq",
    "https://boxd.it/ohEE",
    "https://boxd.it/Aely",
    "https://boxd.it/ILxI",
    "https://boxd.it/kIni",
    "https://boxd.it/3030",
    "https://boxd.it/jGuE",
    "https://boxd.it/tUpy",
    "https://boxd.it/5PO6",
    "https://boxd.it/nsbm",
    "https://boxd.it/MlA",
    "https://boxd.it/1kbY",
    "https://boxd.it/ThU",
    "https://boxd.it/23hs",
    "https://boxd.it/vzVi",
    "https://boxd.it/2anC",
    "https://boxd.it/eZCs",
    "https://boxd.it/2asi",
    "https://boxd.it/26Fi",
    "https://boxd.it/1Ggm",
    "https://boxd.it/248G",
    "https://boxd.it/qR0",
    "https://boxd.it/b5ee",
    "https://boxd.it/JRy",
    "https://boxd.it/AJqO",
    "https://boxd.it/28lY",
    "https://boxd.it/uzY0",
    "https://boxd.it/24Qe",
    "https://boxd.it/1DkK",
    "https://boxd.it/3HQu",
    "https://boxd.it/2wRE",
    "https://boxd.it/1Tjy",
    "https://boxd.it/1nSw",
    "https://boxd.it/GeiG",
    "https://boxd.it/7kDg",
    "https://boxd.it/IGY",
    "https://boxd.it/2a4q",
    "https://boxd.it/3aRa",
    "https://boxd.it/1SyW",
    "https://boxd.it/lLRW",
    "https://boxd.it/2auy",
    "https://boxd.it/H5qy",
    "https://boxd.it/1GfS",
    "https://boxd.it/opAg",
    "https://boxd.it/2aJ4",
    "https://boxd.it/hZDm",
    "https://boxd.it/3sdi",
    "https://boxd.it/2WWA",
    "https://boxd.it/F0gu",
    "https://boxd.it/11p8",
    "https://boxd.it/hw1I",
    "https://boxd.it/KzLM",
    "https://boxd.it/LjA6",
    "https://boxd.it/3Vt0",
    "https://boxd.it/29Wc",
    "https://boxd.it/400W",
    "https://boxd.it/9brE",
    "https://boxd.it/TIm",
    "https://boxd.it/1pDe",
    "https://boxd.it/HF8q",
    "https://boxd.it/86Ow",
    "https://boxd.it/LMA",
    "https://boxd.it/zN4q",
    "https://boxd.it/2AvM",
    "https://boxd.it/zOk",
    "https://boxd.it/Mwxm",
    "https://boxd.it/eV6C",
    "https://boxd.it/1blq",
    "https://boxd.it/GZxS",
    "https://boxd.it/jMge",
    "https://boxd.it/ndMM",
    "https://boxd.it/m6b8",
    "https://boxd.it/ArIK",
    "https://boxd.it/29vq",
    "https://boxd.it/1G9U",
    "https://boxd.it/3oGA",
    "https://boxd.it/1ie2",
    "https://boxd.it/H5qS",
    "https://boxd.it/1uFk",
    "https://boxd.it/NZAm",
    "https://boxd.it/uku",
    "https://boxd.it/2avc",
    "https://boxd.it/1X7Q",
    "https://boxd.it/7m3u",
    "https://boxd.it/8iwa",
    "https://boxd.it/2taM",
    "https://boxd.it/jDHK",
    "https://boxd.it/syL6",
    "https://boxd.it/wMAk",
    "https://boxd.it/z5O",
    "https://boxd.it/Dh4c",
    "https://boxd.it/lATC",
    "https://boxd.it/1Wzu",
    "https://boxd.it/AUou",
    "https://boxd.it/n4",
    "https://boxd.it/xuhQ",
    "https://boxd.it/GoW2",
    "https://boxd.it/CIM4",
    "https://boxd.it/7Bzg",
    "https://boxd.it/uVtI",
    "https://boxd.it/lPBS",
    "https://boxd.it/bPI",
    "https://boxd.it/EgX8",
    "https://boxd.it/1TSo",
    "https://boxd.it/5K3k",
    "https://boxd.it/71a",
    "https://boxd.it/q1Dk",
    "https://boxd.it/9Uao",
    "https://boxd.it/fd66",
    "https://boxd.it/fEu",
    "https://boxd.it/2b2U",
    "https://boxd.it/25uS",
    "https://boxd.it/J2Za",
    "https://boxd.it/1x68",
    "https://boxd.it/28Q8",
    "https://boxd.it/Efxy",
    "https://boxd.it/l7A2",
    "https://boxd.it/4iEK",
    "https://boxd.it/LcjW",
    "https://boxd.it/14TA",
    "https://boxd.it/Bj4E",
    "https://boxd.it/cbJ0",
    "https://boxd.it/7Uau",
    "https://boxd.it/2apy",
    "https://boxd.it/1XkA",
    "https://boxd.it/1aZO",
    "https://boxd.it/JNcY",
    "https://boxd.it/29E8",
    "https://boxd.it/QlGq",
    "https://boxd.it/29GI",
    "https://boxd.it/eYlU",
    "https://boxd.it/6o56",
    "https://boxd.it/1GDU",
    "https://boxd.it/HXMo",
    "https://boxd.it/28Bs",
    "https://boxd.it/1AWG",
    "https://boxd.it/bnZM",
    "https://boxd.it/paNG",
    "https://boxd.it/24IY",
    "https://boxd.it/WKg",
    "https://boxd.it/Bn6",
    "https://boxd.it/KU6K",
    "https://boxd.it/DNCq",
    "https://boxd.it/2HHA",
    "https://boxd.it/2we8",
    "https://boxd.it/zLP0",
    "https://boxd.it/2ak4",
    "https://boxd.it/yzY8",
    "https://boxd.it/x82",
    "https://boxd.it/mMU",
    "https://boxd.it/rHyI",
    "https://boxd.it/shJM",
    "https://boxd.it/3lY2",
    "https://boxd.it/4Rvy",
    "https://boxd.it/Ao48",
    "https://boxd.it/k43s",
    "https://boxd.it/1VqG",
    "https://boxd.it/uGn6",
    "https://boxd.it/1BVY",
    "https://boxd.it/4Rvy",
    "https://boxd.it/CStQ",
    "https://boxd.it/29A6",
    "https://boxd.it/1hRM",
    "https://boxd.it/1GUw",
    "https://boxd.it/1woA",
    "https://boxd.it/1WwA",
    "https://boxd.it/1Fwe",
    "https://boxd.it/dqtS",
    "https://boxd.it/1Dq4",
    "https://boxd.it/1F7e",
    "https://boxd.it/u8p8",
    "https://boxd.it/21ew",
    "https://boxd.it/Gqpu",
    "https://boxd.it/KOTG",
    "https://boxd.it/3Z28",
    "https://boxd.it/j98q",
    "https://boxd.it/4VI2",
    "https://boxd.it/XTe",
    "https://boxd.it/2aRM",
    "https://boxd.it/29TM",
    "https://boxd.it/f5eG",
    "https://boxd.it/21J0",
    "https://boxd.it/JmdA",
    "https://boxd.it/286E"
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
      genres: ptData.genres || [], // PT Genres (with names)
      genre_ids: (ptData.genres || []).map((g: any) => g.id), // Extract genre IDs for filtering
      tagline: ptData.tagline || enData.tagline,
      vote_average: enData.vote_average || 0,
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
