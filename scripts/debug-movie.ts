import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, limit, getDocs } from 'firebase/firestore';

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

async function checkMovie() {
    try {
        const moviesRef = collection(db, "movies");
        const q = query(moviesRef, limit(1));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            console.log("Movie ID:", doc.id);
            console.log("Movie data:", JSON.stringify(doc.data(), null, 2));
        } else {
            console.log("No movies found");
        }
    } catch (e) {
        console.error("ERROR", e);
    }
}

checkMovie();
