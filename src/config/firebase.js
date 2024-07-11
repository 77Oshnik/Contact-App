// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA_8nofRhlyO-G8zdSvNpd41imGNOlWqs",
  authDomain: "contact-app-66d38.firebaseapp.com",
  projectId: "contact-app-66d38",
  storageBucket: "contact-app-66d38.appspot.com",
  messagingSenderId: "680289003282",
  appId: "1:680289003282:web:a955f44f95dcea7eb8f5cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)