import React, { useEffect, useState } from "react";
import { provider, auth } from "./config";
import { signInWithPopup } from "firebase/auth";
import GoogleSign from "./GoogleSign";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState("");
  const signInHandler = () => {
    signInWithPopup(auth, provider).then((data) => {
      setSignInValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);
    });
    
  };
  
 

  useEffect(() => {
    localStorage.getItem("email");
  });


  return (
    <div>
      {signInValue ? (
        <GoogleSign/>
      ) : (
        <button onClick={signInHandler}>Sign In With Google</button>
      )}
    </div>
  );
};

export default SignIn;
