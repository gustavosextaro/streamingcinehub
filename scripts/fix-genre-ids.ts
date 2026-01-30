import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "studio-1424581667-39f18",
  "appId": "1:183217664315:web:ae8d600409713ad7cc871e",
  "apiKey": "AIzaSyClQXWX6roCR6yNzL55UvjL22nJ3yXMejk",
  "authDomain": "studio-1424581667-39f18.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "183217664315"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fixGenreIds() {
    try {
        const moviesRef = collection(db, "movies");
        const snapshot = await getDocs(moviesRef);
        
        let updated = 0;
        let skipped = 0;
        
        for (const doc of snapshot.docs) {
            const data = doc.data();
            
            // Check if genre_ids already exists and is valid
            if (data.genre_ids && Array.isArray(data.genre_ids) && data.genre_ids.length > 0) {
                console.log(`Skipping "${data.title}" - already has genre_ids`);
                skipped++;
                continue;
            }
            
            // Extract genre_ids from genres array
            if (data.genres && Array.isArray(data.genres)) {
                const genre_ids = data.genres.map((g: any) => g.id).filter((id: any) => typeof id === 'number');
                
                if (genre_ids.length > 0) {
                    await updateDoc(doc.ref, { genre_ids });
                    console.log(`✅ Updated "${data.title}" with ${genre_ids.length} genre IDs`);
                    updated++;
                } else {
                    console.log(`⚠️  "${data.title}" has genres but no valid IDs`);
                    skipped++;
                }
            } else {
                console.log(`⚠️  "${data.title}" has no genres array`);
                skipped++;
            }
        }
        
        console.log(`\n✅ Done! Updated: ${updated}, Skipped: ${skipped}`);
    } catch (e) {
        console.error("ERROR", e);
    }
}

fixGenreIds();
