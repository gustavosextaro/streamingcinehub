import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import * as fs from 'fs';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUl9BLYTr4cwxkUJ_gDzzYrDnVDI-Qv58",
  authDomain: "cinehub-fa50c.firebaseapp.com",
  projectId: "cinehub-fa50c",
  storageBucket: "cinehub-fa50c.firebasestorage.app",
  messagingSenderId: "680598528226",
  appId: "1:680598528226:web:bde00a4fcdc3464a69ba98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface LinkAnalysis {
  movieId: string;
  title: string;
  link: string;
  linkType: 'folder' | 'file' | 'transfer' | 'unknown';
  isEmbeddable: boolean;
}

// Analyze link type
function analyzeDriveLink(url: string): { type: 'folder' | 'file' | 'transfer' | 'unknown', isEmbeddable: boolean } {
  if (!url) return { type: 'unknown', isEmbeddable: false };
  
  const cleanUrl = url.toLowerCase();
  
  // Transfer.it links
  if (cleanUrl.includes('transfer.it') || cleanUrl.includes('we.tl')) {
    return { type: 'transfer', isEmbeddable: false };
  }
  
  // Google Drive folder links - NOT embeddable
  if (cleanUrl.includes('/drive/folders/') || cleanUrl.includes('/drive/u/')) {
    return { type: 'folder', isEmbeddable: false };
  }
  
  // Google Drive file links - embeddable
  if (cleanUrl.includes('/file/d/') || cleanUrl.includes('drive.google.com') && cleanUrl.includes('/d/')) {
    return { type: 'file', isEmbeddable: true };
  }
  
  return { type: 'unknown', isEmbeddable: false };
}

async function checkDriveLinks() {
  console.log('\n🔍 ANALISANDO LINKS DO GOOGLE DRIVE\n' + '='.repeat(80));
  
  try {
    // Fetch ALL movies and filter locally
    const moviesRef = collection(db, 'movies');
    const snapshot = await getDocs(moviesRef);
    
    console.log(`\n📊 Total de filmes no banco: ${snapshot.size}`);
    
    const results: LinkAnalysis[] = [];
    const stats = {
      total: 0,
      folders: 0,
      files: 0,
      transfer: 0,
      unknown: 0,
      embeddable: 0,
      notEmbeddable: 0
    };
    
    let moviesWithLinks = 0;
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      const url = data.drive_video_url;
      
      // Skip movies without drive_video_url
      if (!url || url.trim() === '') {
        return;
      }
      
      moviesWithLinks++;
      const analysis = analyzeDriveLink(url);
      
      results.push({
        movieId: doc.id,
        title: data.title || 'Sem título',
        link: url,
        linkType: analysis.type,
        isEmbeddable: analysis.isEmbeddable
      });
      
      stats.total++;
      stats[analysis.type]++;
      
      if (analysis.isEmbeddable) {
        stats.embeddable++;
      } else {
        stats.notEmbeddable++;
      }
    });
    
    console.log(`📊 Filmes com links do Drive: ${moviesWithLinks}\n`);
    
    // Separate problematic links (folders)
    const folderLinks = results.filter(r => r.linkType === 'folder');
    const fileLinks = results.filter(r => r.linkType === 'file');
    const transferLinks = results.filter(r => r.linkType === 'transfer');
    const unknownLinks = results.filter(r => r.linkType === 'unknown');
    
    // Print statistics
    console.log('\n📈 ESTATÍSTICAS:');
    console.log('='.repeat(80));
    console.log(`Total de filmes analisados: ${stats.total}`);
    console.log(`\n✅ Links embedáveis (arquivos diretos): ${stats.files} (${(stats.files/stats.total*100).toFixed(1)}%)`);
    console.log(`❌ Links NÃO embedáveis (pastas): ${stats.folders} (${(stats.folders/stats.total*100).toFixed(1)}%)`);
    console.log(`📥 Links Transfer.it: ${stats.transfer} (${(stats.transfer/stats.total*100).toFixed(1)}%)`);
    console.log(`❓ Links desconhecidos: ${stats.unknown} (${(stats.unknown/stats.total*100).toFixed(1)}%)`);
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      statistics: stats,
      problematicLinks: {
        count: folderLinks.length,
        movies: folderLinks.map(m => ({
          id: m.movieId,
          title: m.title,
          link: m.link
        }))
      },
      workingLinks: {
        count: fileLinks.length,
        movies: fileLinks.map(m => ({
          id: m.movieId,
          title: m.title,
          link: m.link
        }))
      },
      transferLinks: {
        count: transferLinks.length,
        movies: transferLinks.map(m => ({
          id: m.movieId,
          title: m.title,
          link: m.link
        }))
      },
      unknownLinks: {
        count: unknownLinks.length,
        movies: unknownLinks.map(m => ({
          id: m.movieId,
          title: m.title,
          link: m.link
        }))
      }
    };
    
    fs.writeFileSync('link-analysis-report.json', JSON.stringify(report, null, 2));
    console.log('\n✅ Relatório salvo em: link-analysis-report.json');
    
    // Print problematic movies
    if (folderLinks.length > 0) {
      console.log('\n\n❌ FILMES COM LINKS PROBLEMÁTICOS (PASTAS):');
      console.log('='.repeat(80));
      console.log('Estes links apontam para PASTAS do Google Drive e causarão erro 403:\n');
      
      folderLinks.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title}`);
        console.log(`   ID: ${movie.movieId}`);
        console.log(`   Link: ${movie.link.substring(0, 80)}...`);
        console.log('');
      });
      
      // Save problematic list to separate file
      const problematicList = folderLinks.map((m, i) => 
        `${i + 1}. ${m.title}\n   ID: ${m.movieId}\n   Link: ${m.link}\n`
      ).join('\n');
      
      fs.writeFileSync('filmes-com-erro-403.txt', problematicList);
      console.log('\n📄 Lista detalhada salva em: filmes-com-erro-403.txt');
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('✅ Análise concluída!\n');
    
  } catch (error) {
    console.error('❌ Erro ao analisar links:', error);
    process.exit(1);
  }
}

checkDriveLinks();
