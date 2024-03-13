// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhDkiUhheHh0FHWXpyRmy--vmsBOgvSG0",
  authDomain: "kenya-science-chat.firebaseapp.com",
  projectId: "kenya-science-chat",
  storageBucket: "kenya-science-chat.appspot.com",
  messagingSenderId: "817222233851",
  appId: "1:817222233851:web:53e3e45c8c7b106e7e8a5e",
  measurementId: "G-H7R377GY06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
