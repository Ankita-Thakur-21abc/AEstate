// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRApCyMFIOOkJIQU-1qlkLce70GTsQb8",
  authDomain: "mern-state-309a2.firebaseapp.com",
  projectId: "mern-state-309a2",
  storageBucket: "mern-state-309a2.firebasestorage.app",
  messagingSenderId: "368810135283",
  appId: "1:368810135283:web:48c40ce27a925788bd7186",
  measurementId: "G-1PMXZF91KR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);