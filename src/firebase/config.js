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
  apiKey: "AIzaSyBEi_k_D_WzRsQs4a9yo_nF8PyisRDFPos",
  authDomain: "elearning-5.firebaseapp.com",
  projectId: "elearning-5",
  storageBucket: "elearning-5.appspot.com",
  messagingSenderId: "66995400230",
  appId: "1:66995400230:web:9c1f97d9c95d08b74c80e7",
  measurementId: "G-J3RXVHBJ00"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentification = getAuth(app);
