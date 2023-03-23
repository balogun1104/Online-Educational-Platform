
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBha5vfiPCpxlsCK9TO-M73FgtTS5o08Ns",
  authDomain: "electronic-lesson-no.firebaseapp.com",
  projectId: "electronic-lesson-no",
  storageBucket: "electronic-lesson-no.appspot.com",
  messagingSenderId: "793599837993",
  appId: "1:793599837993:web:5d12820fffece3eeed5938",
  measurementId: "G-L8T71H0RFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)
 const auth = getAuth(app);
export {
  db,
  auth
};

// Import the functions you need from the SDKs you need
