import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

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

async function analyzeDatabase() {
    const moviesRef = collection(db, "movies");
    const snapshot = await getDocs(moviesRef);
    
    console.log(`\n📊 ANÁLISE DO BANCO DE DADOS\n${'='.repeat(80)}`);
    console.log(`Total de filmes: ${snapshot.size}`);
    
    // Get dates
    const dates = new Map<string, number>();
    snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.createdAt?.seconds) {
            const date = new Date(data.createdAt.seconds * 1000);
            const dateStr = date.toLocaleDateString('pt-BR');
            dates.set(dateStr, (dates.get(dateStr) || 0) + 1);
        }
    });
    
    console.log(`\n📅 Filmes por data de adição:`);
    const sortedDates = Array.from(dates.entries()).sort((a, b) => {
        const [dayA, monthA, yearA] = a[0].split('/').map(Number);
        const [dayB, monthB, yearB] = b[0].split('/').map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateA.getTime() - dateB.getTime();
    });
    
    sortedDates.forEach(([date, count]) => {
        console.log(`   ${date}: ${count} filmes`);
    });
    
    // Get last 10 added
    const q = query(moviesRef, orderBy("createdAt", "desc"), limit(10));
    const recentSnapshot = await getDocs(q);
    
    console.log(`\n🎬 Últimos 10 filmes adicionados:`);
    recentSnapshot.forEach((doc, i) => {
        const data = doc.data();
        const date = data.createdAt?.seconds ? new Date(data.createdAt.seconds * 1000).toLocaleString('pt-BR') : 'N/A';
        console.log(`   ${i + 1}. ${data.title} - ${date}`);
    });
    
    console.log(`\n${'='.repeat(80)}\n`);
}

analyzeDatabase().catch(console.error);
