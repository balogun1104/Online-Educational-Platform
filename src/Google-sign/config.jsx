
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDY5JhdvHcyVFxsD9j9VjgPELKk0sEUO8Q",
  authDomain: "signup-login-auth-4bd93.firebaseapp.com",
  projectId: "signup-login-auth-4bd93",
  storageBucket: "signup-login-auth-4bd93.appspot.com",
  messagingSenderId: "208005698678",
  appId: "1:208005698678:web:c41a9f6199381f493f7b57",
  measurementId: "G-ZB7JTJKL2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider}