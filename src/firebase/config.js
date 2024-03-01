
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwKJGlWC0dk8SCcuNh1n9SVU4ykcMz9cA",
  authDomain: "book-list-with-firebase-d9407.firebaseapp.com",
  projectId: "book-list-with-firebase-d9407",
  storageBucket: "book-list-with-firebase-d9407.appspot.com",
  messagingSenderId: "646050055900",
  appId: "1:646050055900:web:cf14bdaee0f772e9f21619"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);