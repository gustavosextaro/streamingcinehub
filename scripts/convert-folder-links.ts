import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import * as fs from 'fs';
import { config } from 'dotenv';

// Load environment variables
config();

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

// Google Drive API Key - será lida do .env
const DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

interface ConversionResult {
  movieId: string;
  title: string;
  oldLink: string;
  newLink: string | null;
  status: 'success' | 'failed' | 'no_video_found' | 'multiple_videos';
  error?: string;
}

// Extract folder ID from Drive URL
function extractFolderId(url: string): string | null {
  const patterns = [
    /\/folders\/([a-zA-Z0-9_-]+)/,
    /\/drive\/u\/\d+\/folders\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

// Check if URL is a folder link
function isFolderLink(url: string): boolean {
  const urlLower = url.toLowerCase();
  return urlLower.includes('/drive/folders/') || urlLower.includes('/drive/u/');
}

// Get files in a Google Drive folder using API
async function getFilesInFolder(folderId: string): Promise<any[]> {
  if (!DRIVE_API_KEY) {
    throw new Error('GOOGLE_DRIVE_API_KEY não configurada no .env');
  }
  
  const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${DRIVE_API_KEY}&fields=files(id,name,mimeType,size)`;
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API Error: ${response.status} - ${error}`);
    }
    
    const data = await response.json();
    return data.files || [];
  } catch (error: any) {
    throw new Error(`Erro ao acessar pasta ${folderId}: ${error.message}`);
  }
}

// Check if file is a video based on mimeType or extension
function isVideoFile(file: any): boolean {
  const videoMimeTypes = [
    'video/mp4',
    'video/x-matroska',
    'video/avi',
    'video/quicktime',
    'video/x-msvideo',
    'video/webm'
  ];
  
  const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.flv', '.wmv'];
  
  if (file.mimeType && videoMimeTypes.includes(file.mimeType.toLowerCase())) {
    return true;
  }
  
  if (file.name) {
    const nameLower = file.name.toLowerCase();
    return videoExtensions.some(ext => nameLower.endsWith(ext));
  }
  
  return false;
}

// Convert folder link to direct file link
async function convertFolderToFileLink(folderUrl: string): Promise<{ link: string | null; status: string; error?: string }> {
  const folderId = extractFolderId(folderUrl);
  
  if (!folderId) {
    return { link: null, status: 'failed', error: 'Não foi possível extrair ID da pasta' };
  }
  
  try {
    const files = await getFilesInFolder(folderId);
    
    if (files.length === 0) {
      return { link: null, status: 'no_video_found', error: 'Pasta vazia' };
    }
    
    // Filter video files
    const videoFiles = files.filter(isVideoFile);
    
    if (videoFiles.length === 0) {
      return { link: null, status: 'no_video_found', error: `Nenhum vídeo encontrado (${files.length} arquivos na pasta)` };
    }
    
    if (videoFiles.length > 1) {
      // If multiple videos, pick the largest one (probably the movie)
      videoFiles.sort((a, b) => (b.size || 0) - (a.size || 0));
      console.log(`⚠️  Múltiplos vídeos na pasta ${folderId}, selecionando o maior: ${videoFiles[0].name}`);
    }
    
    const videoFile = videoFiles[0];
    const directLink = `https://drive.google.com/file/d/${videoFile.id}/view`;
    
    return { link: directLink, status: 'success' };
    
  } catch (error: any) {
    return { link: null, status: 'failed', error: error.message };
  }
}

async function convertAllFolderLinks() {
  console.log('\n🔄 CONVERTENDO LINKS DE PASTAS PARA ARQUIVOS\n' + '='.repeat(80));
  
  if (!DRIVE_API_KEY) {
    console.error('\n❌ ERRO: GOOGLE_DRIVE_API_KEY não encontrada!');
    console.error('Por favor, configure sua API Key no arquivo .env:\n');
    console.error('GOOGLE_DRIVE_API_KEY=sua_api_key_aqui\n');
    process.exit(1);
  }
  
  console.log('✅ API Key configurada');
  console.log('\n📊 Buscando filmes com links de pastas...\n');
  
  try {
    // Fetch all movies
    const moviesRef = collection(db, 'movies');
    const snapshot = await getDocs(moviesRef);
    
    const results: ConversionResult[] = [];
    const folderMovies: any[] = [];
    
    // Find movies with folder links
    snapshot.forEach((doc) => {
      const data = doc.data();
      const url = data.drive_video_url;
      
      if (url && isFolderLink(url)) {
        folderMovies.push({
          id: doc.id,
          title: data.title,
          url: url
        });
      }
    });
    
    console.log(`📁 Encontrados ${folderMovies.length} filmes com links de pastas\n`);
    console.log('🚀 Iniciando conversão...\n');
    
    let processed = 0;
    let successful = 0;
    let failed = 0;
    
    for (const movie of folderMovies) {
      processed++;
      
      console.log(`[${processed}/${folderMovies.length}] 🎬 ${movie.title}`);
      console.log(`   Pasta: ${movie.url.substring(0, 60)}...`);
      
      const conversion = await convertFolderToFileLink(movie.url);
      
      const result: ConversionResult = {
        movieId: movie.id,
        title: movie.title,
        oldLink: movie.url,
        newLink: conversion.link,
        status: conversion.status as any,
        error: conversion.error
      };
      
      if (conversion.status === 'success' && conversion.link) {
        // Update Firestore
        await updateDoc(doc(db, 'movies', movie.id), {
          drive_video_url: conversion.link
        });
        
        console.log(`   ✅ Convertido: ${conversion.link.substring(0, 60)}...`);
        successful++;
      } else {
        console.log(`   ❌ Falha: ${conversion.error}`);
        failed++;
      }
      
      results.push(result);
      
      // Progress indicator
      if (processed % 50 === 0) {
        console.log(`\n📊 Progresso: ${processed}/${folderMovies.length} (${successful} sucesso, ${failed} falhas)\n`);
      }
      
      // Small delay to avoid API rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Statistics
    console.log('\n' + '='.repeat(80));
    console.log('📊 ESTATÍSTICAS FINAIS');
    console.log('='.repeat(80));
    console.log(`Total processado: ${processed}`);
    console.log(`✅ Convertidos com sucesso: ${successful} (${(successful/processed*100).toFixed(1)}%)`);
    console.log(`❌ Falhas: ${failed} (${(failed/processed*100).toFixed(1)}%)`);
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      statistics: {
        total: processed,
        successful,
        failed,
        successRate: (successful/processed*100).toFixed(2) + '%'
      },
      results: results
    };
    
    fs.writeFileSync('conversion-report.json', JSON.stringify(report, null, 2));
    console.log('\n✅ Relatório detalhado salvo em: conversion-report.json');
    
    // Save failed conversions to separate file
    const failedResults = results.filter(r => r.status !== 'success');
    if (failedResults.length > 0) {
      const failedList = failedResults.map((r, i) => 
        `${i + 1}. ${r.title}\n   ID: ${r.movieId}\n   Link: ${r.oldLink}\n   Erro: ${r.error}\n`
      ).join('\n');
      
      fs.writeFileSync('conversion-failed.txt', failedList);
      console.log('⚠️  Falhas detalhadas salvas em: conversion-failed.txt');
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('✅ Conversão concluída!\n');
    
  } catch (error) {
    console.error('❌ Erro fatal:', error);
    process.exit(1);
  }
}

// Run conversion
convertAllFolderLinks();
