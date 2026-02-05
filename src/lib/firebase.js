// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <--- Importante para el Login
import { getFirestore } from "firebase/firestore"; // <--- Importante para la DB

const firebaseConfig = {
  apiKey: "AIzaSyDME4XpsZCB2rrgHpB7n-JGFbbepqJ79zQ",
  authDomain: "billflow-cfdc8.firebaseapp.com",
  projectId: "billflow-cfdc8",
  storageBucket: "billflow-cfdc8.firebasestorage.app",
  messagingSenderId: "416326872173",
  appId: "1:416326872173:web:43c610c0de0cfbb4746364",
  measurementId: "G-L6GL9H0PX2",
};

// Evitamos que Firebase se inicialice más de una vez (común en Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// EXPORTAMOS las herramientas para usarlas en el Login y otros archivos
export const auth = getAuth(app);
export const db = getFirestore(app);
