// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIehOagJgg1yJgHSvWN20e6M5mL89LR_g",
  authDomain: "quickprep2-334a6.firebaseapp.com",
  projectId: "quickprep2-334a6",
  storageBucket: "quickprep2-334a6.firebasestorage.app",
  messagingSenderId: "74438608755",
  appId: "1:74438608755:web:d5545e00964ba8e2452706",
  measurementId: "G-SKK0P4463Q"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);