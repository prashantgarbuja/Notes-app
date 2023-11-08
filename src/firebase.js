// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGZbEKCSNH1yX3rPFJj4rviH7WDKFHLFc",
  authDomain: "notes-app-64414.firebaseapp.com",
  projectId: "notes-app-64414",
  storageBucket: "notes-app-64414.appspot.com",
  messagingSenderId: "629161167461",
  appId: "1:629161167461:web:44fd40cb636d6fc2c4d48c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
