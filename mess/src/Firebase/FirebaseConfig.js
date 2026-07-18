// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore,getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzCbH1AzYpl1judOF7OtMquqFbmUdUnFM",
  authDomain: "react-practice-5d1e4.firebaseapp.com",
  projectId: "react-practice-5d1e4",
  storageBucket: "react-practice-5d1e4.firebasestorage.app",
  messagingSenderId: "788753690928",
  appId: "1:788753690928:web:31eec61e0bf732e154d8f5",
  measurementId: "G-Y4LS7TLSHD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)