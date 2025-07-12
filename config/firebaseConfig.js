// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-designer-d4579.firebaseapp.com",
  projectId: "ai-room-designer-d4579",
  storageBucket: "ai-room-designer-d4579.firebasestorage.app",
  messagingSenderId: "977916545653",
  appId: "1:977916545653:web:f30d696cc6d639be33863c",
  measurementId: "G-LBR0YZT2DS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
