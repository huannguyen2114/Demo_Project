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
  apiKey: "AIzaSyB0jFTvGYqrUDzPQqQN_uTUWe645gYa8Lg",
  authDomain: "elearning-4-f7ada.firebaseapp.com",
  projectId: "elearning-4-f7ada",
  storageBucket: "elearning-4-f7ada.appspot.com",
  messagingSenderId: "818208617847",
  appId: "1:818208617847:web:f066583b5d1032fcb31d72",
  measurementId: "G-ZB1VBD3D0Q"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentification = getAuth(app);
