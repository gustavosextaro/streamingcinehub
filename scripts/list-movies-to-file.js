require('dotenv').config({ path: '.env.local' });
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, orderBy } = require('firebase/firestore');
const fs = require('fs');

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
        
        let output = `\n📽️  LISTA DE FILMES (Total: ${snapshot.size})\n`;
        output += "=".repeat(80) + "\n\n";
        
        snapshot.forEach((doc, index) => {
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
            
            output += `${(index + 1).toString().padStart(3, ' ')}. ${data.title}\n`;
            output += `     ID: ${data.id} | Adicionado em: ${dateStr}\n`;
            if (data.release_date) {
                output += `     Lançamento: ${data.release_date}\n`;
            }
            output += "\n";
        });
        
        output += "=".repeat(80) + "\n";
        output += `\n✅ Total de ${snapshot.size} filmes listados\n`;
        
        // Save to file
        const outputPath = 'lista-filmes.txt';
        fs.writeFileSync(outputPath, output, 'utf-8');
        
        console.log(`\n✅ Lista salva em: ${outputPath}`);
        console.log(`📊 Total de ${snapshot.size} filmes\n`);
        
        // Also print to console
        console.log(output);
    } catch (e) {
        console.error("ERROR", e);
    }
}

listMoviesInOrder();
