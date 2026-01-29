
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getCountFromServer } from 'firebase/firestore';

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

async function countMovies() {
    try {
        const coll = collection(db, "movies");
        const snapshot = await getCountFromServer(coll);
        // Only print the number
        console.log(`FIRESTORE_TOTAL:${snapshot.data().count}`);
    } catch (e) {
        console.error("ERROR", e);
    }
}

countMovies();
