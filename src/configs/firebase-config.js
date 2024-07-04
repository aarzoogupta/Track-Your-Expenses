// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7u127uuCg7YHbfNQei7BxHNVu5FcADPE",
  authDomain: "expense-tracker-d31b0.firebaseapp.com",
  projectId: "expense-tracker-d31b0",
  storageBucket: "expense-tracker-d31b0.appspot.com",
  messagingSenderId: "231545186521",
  appId: "1:231545186521:web:b89e87e88bfb94f7d236c8",
  measurementId: "G-X989Z5QN0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);