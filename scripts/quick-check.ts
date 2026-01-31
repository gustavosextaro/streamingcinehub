import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "SUA_API_KEY_AQUI",
  authDomain: "cinehub-fa50c.firebaseapp.com",
  projectId: "cinehub-fa50c",
  storageBucket: "cinehub-fa50c.firebasestorage.app",
  messagingSenderId: "680598528226",
  appId: "1:680598528226:web:bde00a4fcdc3464a69ba98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function quickCheck() {
  console.log('\n🔍 VERIFICAÇÃO RÁPIDA DO BANCO DE DADOS\n' + '='.repeat(80));
  
  try {
    // First, try to get the specific movie we tested (Greice - ID: 1067231)
    console.log('\n1️⃣ Buscando filme específico (Greice - ID: 1067231)...');
    const testMovieRef = doc(db, 'movies', '1067231');
    const testMovieSnap = await getDoc(testMovieRef);
    
    if (testMovieSnap.exists()) {
      const data = testMovieSnap.data();
      console.log('✅ Filme encontrado!');
      console.log(`   Título: ${data.title}`);
      console.log(`   drive_video_url: ${data.drive_video_url || 'NÃO DEFINIDO'}`);
      console.log(`   Link: ${data.drive_video_url?.substring(0, 80)}...`);
    } else {
      console.log('❌ Filme não encontrado!');
    }
    
    // Now fetch all movies
    console.log('\n2️⃣ Buscando todos os filmes...');
    const moviesRef = collection(db, 'movies');
    const snapshot = await getDocs(moviesRef);
    
    console.log(`✅ Total de filmes no banco: ${snapshot.size}`);
    
    // Count movies with drive_video_url
    let withLinks = 0;
    let withFolderLinks = 0;
    let withFileLinks = 0;
    let withTransferLinks = 0;
    const sampleMovies: any[] = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      const url = data.drive_video_url;
      
      if (url && url.trim() !== '') {
        withLinks++;
        
        // Save first 5 as samples
        if (sampleMovies.length < 5) {
          sampleMovies.push({
            id: doc.id,
            title: data.title,
            url: url.substring(0, 60) + '...'
          });
        }
        
        // Categorize
        const urlLower = url.toLowerCase();
        if (urlLower.includes('/drive/folders/') || urlLower.includes('/drive/u/')) {
          withFolderLinks++;
        } else if (urlLower.includes('/file/d/')) {
          withFileLinks++;
        } else if (urlLower.includes('transfer.it') || urlLower.includes('we.tl')) {
          withTransferLinks++;
        }
      }
    });
    
    console.log(`\n📊 ESTATÍSTICAS:`);
    console.log(`   Filmes com drive_video_url: ${withLinks}`);
    console.log(`   Links de PASTAS (erro 403): ${withFolderLinks}`);
    console.log(`   Links de ARQUIVOS (OK): ${withFileLinks}`);
    console.log(`   Links Transfer.it: ${withTransferLinks}`);
    
    if (sampleMovies.length > 0) {
      console.log(`\n📝 EXEMPLOS DE FILMES COM LINKS:`);
      sampleMovies.forEach((m, i) => {
        console.log(`   ${i + 1}. ${m.title} (ID: ${m.id})`);
        console.log(`      ${m.url}`);
      });
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('✅ Verificação concluída!\n');
    
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

quickCheck();
