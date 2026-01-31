// Script para converter links de pastas do Google Drive em links de arquivos
// Execute este arquivo no console do navegador ou use: node convert-drive-links.js

const API_KEY = 'AIzaSyAwumTt_BB-V34bYwg2qv1SXSJCadnxQZs';

console.log('🔄 CONVERTENDO LINKS DE PASTAS PARA ARQUIVOS');
console.log('='.repeat(80));

// Helper functions
function isFolderLink(url) {
  const urlLower = url.toLowerCase();
  return urlLower.includes('/drive/folders/') || urlLower.includes('/drive/u/');
}

function extractFolderId(url) {
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

async function getFilesInFolder(folderId) {
  const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,size)`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    return data.files || [];
  } catch (error) {
    throw new Error(`Erro ao acessar pasta ${folderId}: ${error.message}`);
  }
}

function isVideoFile(file) {
  const videoMimeTypes = ['video/mp4', 'video/x-matroska', 'video/avi', 'video/quicktime', 'video/x-msvideo', 'video/webm'];
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

async function convertFolderToFileLink(folderUrl) {
  const folderId = extractFolderId(folderUrl);
  if (!folderId) {
    return { link: null, status: 'failed', error: 'ID não encontrado' };
  }
  
  try {
    const files = await getFilesInFolder(folderId);
    if (files.length === 0) {
      return { link: null, status: 'no_video_found', error: 'Pasta vazia' };
    }
    
    const videoFiles = files.filter(isVideoFile);
    if (videoFiles.length === 0) {
      return { link: null, status: 'no_video_found', error: `Nenhum vídeo (${files.length} arquivos)` };
    }
    
    if (videoFiles.length > 1) {
      videoFiles.sort((a, b) => (b.size || 0) - (a.size || 0));
      console.log(`⚠️  Múltiplos vídeos, selecionando maior: ${videoFiles[0].name}`);
    }
    
    const videoFile = videoFiles[0];
    const directLink = `https://drive.google.com/file/d/${videoFile.id}/view`;
    return { link: directLink, status: 'success' };
    
  } catch (error) {
    return { link: null, status: 'failed', error: error.message };
  }
}

// Main conversion function
async function runConversion() {
  try {
    // Import Firebase dynamically
    const { getFirestore, collection, getDocs, doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
    const { initializeApp, getApps, getApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
    
    // Initialize Firebase (use existing app if available)
    const firebaseConfig = {
      "projectId": "studio-1424581667-39f18",
      "appId": "1:183217664315:web:ae8d600409713ad7cc871e",
      "apiKey": "AIzaSyClQXWX6roCR6yNzL55UvjL22nJ3yXMejk",
      "authDomain": "studio-1424581667-39f18.firebaseapp.com",
      "measurementId": "",
      "messagingSenderId": "183217664315"
    };
    
    let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore(app);
    
    const snapshot = await getDocs(collection(db, 'movies'));
    const folderMovies = [];
    
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const url = data.drive_video_url;
      if (url && isFolderLink(url)) {
        folderMovies.push({ id: docSnap.id, title: data.title, url });
      }
    });
    
    console.log(`\n📁 Encontrados ${folderMovies.length} filmes com links de pastas\n`);
    
    let processed = 0;
    let successful = 0;
    let failed = 0;
    const results = [];
    
    for (const movie of folderMovies) {
      processed++;
      console.log(`[${processed}/${folderMovies.length}] 🎬 ${movie.title}`);
      
      const conversion = await convertFolderToFileLink(movie.url);
      
      if (conversion.status === 'success' && conversion.link) {
        await updateDoc(doc(db, 'movies', movie.id), {
          drive_video_url: conversion.link
        });
        console.log(`   ✅ Convertido!`);
        successful++;
      } else {
        console.log(`   ❌ ${conversion.error}`);
        failed++;
      }
      
      results.push({
        movieId: movie.id,
        title: movie.title,
        oldLink: movie.url,
        newLink: conversion.link,
        status: conversion.status,
        error: conversion.error
      });
      
      if (processed % 50 === 0) {
        console.log(`\n📊 Progresso: ${processed}/${folderMovies.length} (${successful} sucesso, ${failed} falhas)\n`);
      }
      
      // Delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('📊 ESTATÍSTICAS FINAIS');
    console.log('='.repeat(80));
    console.log(`Total: ${processed}`);
    console.log(`✅ Sucesso: ${successful} (${(successful/processed*100).toFixed(1)}%)`);
    console.log(`❌ Falhas: ${failed} (${(failed/processed*100).toFixed(1)}%)`);
    console.log('\n✅ Conversão concluída!');
    
    // Download report
    const report = {
      timestamp: new Date().toISOString(),
      statistics: { total: processed, successful, failed, successRate: (successful/processed*100).toFixed(2) + '%' },
      results
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversion-report.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    return { processed, successful, failed, report };
    
  } catch (error) {
    console.error('❌ Erro:', error);
    return { error: error.message };
  }
}

// Auto-run the conversion
runConversion();
