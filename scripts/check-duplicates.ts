import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

async function checkDuplicates() {
    const moviesRef = collection(db, "movies");
    const snapshot = await getDocs(moviesRef);
    
    console.log(`\n🔍 VERIFICAÇÃO DE DUPLICATAS`);
    console.log(`${'='.repeat(80)}\n`);
    console.log(`Total de documentos no Firestore: ${snapshot.size}\n`);
    
    // Check for duplicate TMDB IDs
    const tmdbIds = new Map<string, string[]>();
    const docIds = new Set<string>();
    
    snapshot.forEach((doc) => {
        const data = doc.data();
        const tmdbId = data.id;
        const docId = doc.id;
        
        docIds.add(docId);
        
        if (!tmdbIds.has(tmdbId)) {
            tmdbIds.set(tmdbId, []);
        }
        tmdbIds.get(tmdbId)!.push(docId);
    });
    
    console.log(`📊 Estatísticas:`);
    console.log(`   - Documentos únicos (doc.id): ${docIds.size}`);
    console.log(`   - TMDB IDs únicos: ${tmdbIds.size}`);
    console.log(`   - Total de documentos: ${snapshot.size}\n`);
    
    // Find duplicates
    const duplicates = Array.from(tmdbIds.entries()).filter(([_, docIds]) => docIds.length > 1);
    
    if (duplicates.length > 0) {
        console.log(`❌ DUPLICATAS ENCONTRADAS: ${duplicates.length}\n`);
        duplicates.forEach(([tmdbId, docIds]) => {
            const firstDoc = snapshot.docs.find(d => d.id === docIds[0]);
            const title = firstDoc?.data().title || 'Unknown';
            console.log(`   🎬 "${title}" (TMDB ID: ${tmdbId})`);
            console.log(`      Aparece ${docIds.length} vezes nos doc IDs:`);
            docIds.forEach(docId => console.log(`      - ${docId}`));
            console.log();
        });
    } else {
        console.log(`✅ Nenhuma duplicata encontrada!\n`);
    }
    
    // Verify doc IDs match TMDB IDs
    let mismatchCount = 0;
    snapshot.forEach((doc) => {
        const data = doc.data();
        if (doc.id !== data.id) {
            if (mismatchCount === 0) {
                console.log(`⚠️  INCOMPATIBILIDADES ENCONTRADAS (doc.id ≠ data.id):\n`);
            }
            mismatchCount++;
            if (mismatchCount <= 10) {
                console.log(`   ${mismatchCount}. Doc ID: ${doc.id} | TMDB ID: ${data.id} | Título: ${data.title}`);
            }
        }
    });
    
    if (mismatchCount > 0) {
        console.log(`\n   Total de incompatibilidades: ${mismatchCount}`);
        if (mismatchCount > 10) {
            console.log(`   (mostrando apenas as primeiras 10)\n`);
        }
    } else {
        console.log(`✅ Todos os doc IDs correspondem aos TMDB IDs\n`);
    }
    
    console.log(`${'='.repeat(80)}\n`);
}

checkDuplicates().catch(console.error);
