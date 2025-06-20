// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9GrbvmUT9_pAW8M6ZbQJsqBudgi_UO6E",
  authDomain: "amrr-cfcfc.firebaseapp.com",
  projectId: "amrr-cfcfc",
  storageBucket: "amrr-cfcfc.firebasestorage.app",
  messagingSenderId: "776250685322",
  appId: "1:776250685322:web:b2f4ea636c46ee4829fa73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);