import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [matricNumber, setMatricNumber] = useState("");

  function signUp(email, password, matricNumber) {
    return createUserWithEmailAndPassword(auth, email, password, matricNumber);
  }

  function logIn(email, password, matricNumber) {
    return signInWithEmailAndPassword(auth, email, password, matricNumber);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
     const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      setMatricNumber(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ matricNumber, user, signUp, logIn, logOut, googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
