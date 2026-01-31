import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import * as fs from 'fs';

const firebaseConfig = {
  projectId: "studio-1424581667-39f18",
  appId: "1:183217664315:web:ae8d600409713ad7cc871e",
  apiKey: "AIzaSyClQXWX6roCR6yNzL55UvjL22nJ3yXMejk",
  authDomain: "studio-1424581667-39f18.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "183217664315"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function quickCheck() {
    const moviesRef = collection(db, "movies");
    const snapshot = await getDocs(moviesRef);
    
    const tmdbIds = new Map<string, number>();
    const docIds = new Set<string>();
    
    snapshot.forEach((doc) => {
        const data = doc.data();
        const tmdbId = data.id;
        const docId = doc.id;
        
        docIds.add(docId);
        tmdbIds.set(tmdbId, (tmdbIds.get(tmdbId) || 0) + 1);
    });
    
    const duplicates = Array.from(tmdbIds.entries()).filter(([_, count]) => count > 1);
    
    const report = {
        totalDocuments: snapshot.size,
        uniqueDocIds: docIds.size,
        uniqueTmdbIds: tmdbIds.size,
        duplicateCount: duplicates.length,
        duplicates: duplicates.slice(0, 20).map(([id, count]) => ({
            tmdbId: id,
            count,
            title: snapshot.docs.find(d => d.data().id === id)?.data().title
        }))
    };
    
    console.log(JSON.stringify(report, null, 2));
    fs.writeFileSync('duplicate-report.json', JSON.stringify(report, null, 2));
}

quickCheck().catch(console.error);
