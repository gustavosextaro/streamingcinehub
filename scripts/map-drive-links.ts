import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';

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

// Normalize title for matching
function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' ')         // Normalize spaces
    .trim();
}

// Simple fuzzy match score (0-1)
function getSimilarity(str1: string, str2: string): number {
  const s1 = normalizeTitle(str1);
  const s2 = normalizeTitle(str2);
  
  if (s1 === s2) return 1.0;
  
  // Check if one contains the other
  if (s1.includes(s2) || s2.includes(s1)) return 0.9;
  
  // Simple word overlap
  const words1 = s1.split(' ');
  const words2 = s2.split(' ');
  const commonWords = words1.filter(w => words2.includes(w));
  
  if (words1.length === 0 || words2.length === 0) return 0;
  return commonWords.length / Math.max(words1.length, words2.length);
}

// Normalize URL to ensure it has https:// protocol
function normalizeUrl(url: string): string {
  url = url.trim();
  
  // If URL already has protocol, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Add https:// if missing
  return 'https://' + url;
}

async function mapDriveLinks() {
  console.log('\n🎬 MAPEANDO LINKS DO GOOGLE DRIVE\n' + '='.repeat(80));
  
  // Read drive.txt
  const driveFilePath = path.join(process.cwd(), 'drive.txt');
  if (!fs.existsSync(driveFilePath)) {
    console.error('❌ Arquivo drive.txt não encontrado!');
    return;
  }
  
  const content = fs.readFileSync(driveFilePath, 'utf-8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  console.log(`📄 Total de linhas no arquivo: ${lines.length}`);
  
  // Split into titles and links (aproximadamente metade cada)
  const midpoint = Math.floor(lines.length / 2);
  const titles = lines.slice(0, midpoint);
  const links = lines.slice(midpoint);
  
  console.log(`📝 Títulos encontrados: ${titles.length}`);
  console.log(`🔗 Links encontrados: ${links.length}\n`);
  
  if (titles.length !== links.length) {
    console.warn(`⚠️  AVISO: Número de títulos (${titles.length}) diferente de links (${links.length})`);
    console.warn(`    Usando o menor número: ${Math.min(titles.length, links.length)}\n`);
  }
  
  // Create title->link mapping
  const titleLinkMap = new Map<string, string>();
  const count = Math.min(titles.length, links.length);
  
  for (let i = 0; i < count; i++) {
    titleLinkMap.set(titles[i], links[i]);
  }
  
  // Get all movies from Firestore
  const moviesRef = collection(db, 'movies');
  const snapshot = await getDocs(moviesRef);
  
  console.log(`🎥 Filmes no banco de dados: ${snapshot.size}\n`);
  
  let updated = 0;
  let notFound = 0;
  let skipped = 0;
  const notFoundTitles: string[] = [];
  
  for (const movieDoc of snapshot.docs) {
    const movieData = movieDoc.data();
    const movieTitle = movieData.title || movieData.original_title;
    
    if (!movieTitle) {
      skipped++;
      continue;
    }
    
    // Try exact match first
    let matchedLink = titleLinkMap.get(movieTitle);
    
    // If not found, try fuzzy matching
    if (!matchedLink) {
      let bestMatch: { title: string; score: number; link: string } | null = null;
      
      for (const [title, link] of titleLinkMap.entries()) {
        const score = getSimilarity(movieTitle, title);
        if (score > 0.85 && (!bestMatch || score > bestMatch.score)) {
          bestMatch = { title, score, link };
        }
      }
      
      if (bestMatch) {
        matchedLink = bestMatch.link;
        console.log(`🔍 Fuzzy match: "${movieTitle}" → "${bestMatch.title}" (${(bestMatch.score * 100).toFixed(0)}%)`);
      }
    }
    
    if (matchedLink) {
      // Update Firestore document with normalized URL
      await updateDoc(doc(db, 'movies', movieDoc.id), {
        drive_video_url: normalizeUrl(matchedLink)
      });
      updated++;
      
      if (updated % 50 === 0) {
        console.log(`✅ Processados: ${updated}/${snapshot.size}`);
      }
    } else {
      notFound++;
      notFoundTitles.push(movieTitle);
    }
  }
  
  // Generate report
  const report = {
    totalMovies: snapshot.size,
    updated,
    notFound,
    skipped,
    successRate: ((updated / snapshot.size) * 100).toFixed(2) + '%',
    notFoundTitles: notFoundTitles.slice(0, 50) // Primeiros 50
  };
  
  fs.writeFileSync('mapping-report.json', JSON.stringify(report, null, 2));
  
  console.log('\n' + '='.repeat(80));
  console.log('📊 RELATÓRIO FINAL\n');
  console.log(`✅ Filmes atualizados:    ${updated} (${report.successRate})`);
  console.log(`❌ Filmes não encontrados: ${notFound}`);
  console.log(`⏭️  Filmes ignorados:      ${skipped}`);
  console.log(`\n📄 Relatório completo salvo em: mapping-report.json\n`);
  console.log('='.repeat(80) + '\n');
}

mapDriveLinks().catch(console.error);
