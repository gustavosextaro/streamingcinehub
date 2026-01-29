import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth'; // Added for auth
import { firebaseConfig } from '../src/firebase/config';
import * as dotenv from "dotenv";
import { genkit, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

dotenv.config({ path: ".env.local" });

// Configure AI manually for script usage
const ai = genkit({
    plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
    model: 'googleai/gemini-2.5-flash',
});

// Re-define basic flow just for this script to simplify imports
const ImageUpdateSchema = z.object({
    poster_path: z.string().describe("The TMDB original resolution poster URL"),
    backdrop_path: z.string().describe("The TMDB original resolution backdrop URL")
});

const imagePrompt = ai.definePrompt({
    name: 'imageUpdatePrompt',
    input: { schema: z.object({ title: z.string() }) },
    output: { schema: ImageUpdateSchema },
    prompt: `Find the high-quality original resolution TMDB image URLs for the movie "{{title}}".
    Return MUST use format: https://image.tmdb.org/t/p/original/...
    If you cannot find it, return null.`
});

async function upgradeImages() {
    console.log("Initializing Firebase...");
    // Force Node.js fetch for Firebase if needed, usually auto-detected in newer SDKs
    // but we use standard web SDK here.
    
    // Polyfill for Request/Response/fetch might be verified by checking environment
    
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    
    // Auth anonymously to bypass SDK checks (rules are open)
    const auth = getAuth(app);
    await signInAnonymously(auth);
    console.log("Authenticated anonymously.");

    const db = getFirestore(app);
    // @ts-ignore
    db._settings.ignoreUndefinedProperties = true; // just in case
    
    console.log("Fetching all movies from 'movies' collection...");
    try {
        const moviesRef = collection(db, 'movies');
        // use a simple limit first to test connection
        const snapshot = await getDocs(moviesRef);
        console.log("Snapshot fetched. Size:", snapshot.size);
    } catch(e) {
        console.error("FATAL ERROR FETCHING:", e);
        process.exit(1);
    }
    
    const moviesRef = collection(db, 'movies');
    const snapshot = await getDocs(moviesRef);

    if (snapshot.empty) {
        console.log("No movies found to update.");
        return;
    }

    console.log(`Found ${snapshot.size} movies. Starting update...`);

    for (const docSnap of snapshot.docs) {
        const movie = docSnap.data();
        console.log(`Processing: ${movie.title} (ID: ${docSnap.id})`);

        // Check if images are already high quality (simple check)
        const isPosterHQ = movie.poster_path?.includes('/original/');
        const isBackdropHQ = movie.backdrop_path?.includes('/original/');

        if (isPosterHQ && isBackdropHQ) {
            console.log(`  - Already HQ. Skipping.`);
            continue;
        }

        console.log(`  - Needs update. Fetching new URLs...`);
        try {
            const { output } = await imagePrompt({ title: movie.title });
            
            if (output) {
                console.log(`  - Found new URLs:\n    Poster: ${output.poster_path}\n    Backdrop: ${output.backdrop_path}`);
                
                await updateDoc(doc(db, 'movies', docSnap.id), {
                    poster_path: output.poster_path,
                    backdrop_path: output.backdrop_path
                });
                console.log(`  - Updated successfully.`);
            } else {
                console.warn(`  - AI could not find images for ${movie.title}`);
            }
        } catch (e) {
            console.error(`  - Error updating ${movie.title}:`, e);
        }
    }
    console.log("All updates complete.");
}

upgradeImages();
