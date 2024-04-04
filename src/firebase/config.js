// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import "firebase/firestore";

import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComUqLpIYsyYn2whWimpy92AyFziaBeNU",
  authDomain: "elearning-3-d361e.firebaseapp.com",
  projectId: "elearning-3-d361e",
  storageBucket: "elearning-3-d361e.appspot.com",
  messagingSenderId: "950643687034",
  appId: "1:950643687034:web:6b9ec9ece8a1979f8745c3",
  measurementId: "G-EJ4BW8YNT5",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentification = getAuth(app);
