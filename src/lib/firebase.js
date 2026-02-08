// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <--- Importante para el Login
import { getFirestore } from "firebase/firestore"; // <--- Importante para la DB

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Evitamos que Firebase se inicialice más de una vez (común en Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// EXPORTAMOS las herramientas para usarlas en el Login y otros archivos
export const auth = getAuth(app);
export const db = getFirestore(app);
