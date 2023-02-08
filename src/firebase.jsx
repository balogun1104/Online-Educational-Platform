
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDFvLahAJd2YiIBG0lErb1XBpLWDuUKgMs",
  authDomain: "elecronic-lesson-note.firebaseapp.com",
  projectId: "elecronic-lesson-note",
  storageBucket: "elecronic-lesson-note.appspot.com",
  messagingSenderId: "476313213505",
  appId: "1:476313213505:web:7d41a72d64377e9f54c4c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;