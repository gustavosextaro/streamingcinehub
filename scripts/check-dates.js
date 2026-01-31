const fs = require('fs');
const admin = require('firebase-admin');

// Initialize Firebase Admin
const serviceAccount = {
  projectId: "studio-1424581667-39f18",
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function analyzeDates() {
    const snapshot = await db.collection('movies').get();
    
    console.log(`Total de filmes: ${snapshot.size}\n`);
    
    const byDate = {};
    const byMonth = {};
    
    snapshot.forEach(doc => {
        const data = doc.data();
        if (data.createdAt) {
            const date = data.createdAt.toDate();
            const dateStr = date.toLocaleDateString('pt-BR');
            const monthStr = `${date.getMonth() + 1}/${date.getFullYear()}`;
            
            byDate[dateStr] = (byDate[dateStr] || 0) + 1;
            byMonth[monthStr] = (byMonth[monthStr] || 0) + 1;
        }
    });
    
    console.log('📅 Filmes por data:');
    Object.entries(byDate).sort().forEach(([date, count]) => {
        console.log(`   ${date}: ${count} filmes`);
    });
    
    console.log('\n📊 Filmes por mês:');
    Object.entries(byMonth).sort().forEach(([month, count]) => {
        console.log(`   ${month}: ${count} filmes`);
    });
}

analyzeDates().then(() => process.exit(0)).catch(console.error);
