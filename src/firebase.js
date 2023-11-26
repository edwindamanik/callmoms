import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKCVYRfgyLxRGueDKfT4pmK81pi9q-QHs",
  authDomain: "chat-7ef34.firebaseapp.com",
  projectId: "chat-7ef34",
  storageBucket: "chat-7ef34.appspot.com",
  messagingSenderId: "310015435364",
  appId: "1:310015435364:web:6bff30a3b7fa9804ba3571"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();