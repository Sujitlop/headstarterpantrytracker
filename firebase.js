// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTMHUPqxB0cmFERcMvEkV0W4BgwK-jKcI",
  authDomain: "headstarterpantryproject-6fe49.firebaseapp.com",
  projectId: "headstarterpantryproject-6fe49",
  storageBucket: "headstarterpantryproject-6fe49.appspot.com",
  messagingSenderId: "1044961104104",
  appId: "1:1044961104104:web:672b2995c4bdc90fff795d",
  measurementId: "G-D58Q93CPJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {app, firestore}