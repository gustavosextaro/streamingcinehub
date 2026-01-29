
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "fake-api-key",
  authDomain: "cinehub-prototype.firebaseapp.com",
  projectId: "cinehub-prototype",
  storageBucket: "cinehub-prototype.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

async function testWrite() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  // Try to write to a test document in movies collection
  try {
    console.log("Attempting to write to movies/test-id...");
    await setDoc(doc(db, 'movies', 'test-id'), {
      title: "Test Movie",
      status: "testing",
      createdAt: serverTimestamp()
    });
    console.log("Success!");
  } catch (e) {
    console.error("Write failed:", e);
  }
}

testWrite();
