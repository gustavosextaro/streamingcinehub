import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

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

async function listMoviesInOrder() {
    try {
        const moviesRef = collection(db, "movies");
        const q = query(moviesRef, orderBy("createdAt", "asc"));
        const snapshot = await getDocs(q);
        
        console.log(`\n📽️  LISTA DE FILMES (Total: ${snapshot.size})`);
        console.log("=".repeat(80));
        
        let index = 0;
        snapshot.forEach((doc) => {
            const data = doc.data();
            const createdAt = data.createdAt?.seconds 
                ? new Date(data.createdAt.seconds * 1000) 
                : new Date();
            const dateStr = createdAt.toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            console.log(`${(index + 1).toString().padStart(3, ' ')}. ${data.title}`);
            console.log(`     ID: ${data.id} | Adicionado em: ${dateStr}`);
            if (data.release_date) {
                console.log(`     Lançamento: ${data.release_date}`);
            }
            console.log("");
            index++;
        });
        
        console.log("=".repeat(80));
        console.log(`\n✅ Total de ${snapshot.size} filmes listados\n`);
    } catch (e) {
        console.error("ERROR", e);
    }
}

listMoviesInOrder();
