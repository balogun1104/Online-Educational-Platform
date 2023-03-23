import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";



const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp(email, password).then(
      async(result) => {
        console.log(result)
        try {
          setError('')
          const docRef = await addDoc(collection(db, "users"), {
            fullName, 
            userId: `${result.user.uid}`
          })
          navigate("/welcomeuser")
          alert('New user Created successfully')
          console.log("Document created with ID: ",  docRef.id)
        } catch (error) {
          setError(error.message)
        }
      }
    )
//     const data = {
//       fullName
//     }

// try {
//   const user = await signUp(email, password) 
//   const {uid} = user.user
//   console.log(uid)
//   const res = await db.collection("users").doc(uid).set(data)
  
//   console.log(res)
  
//   navigate("/welcomeuser")
// } catch (error) {
//   setError(error.message)
// }
  
  };
  return (
    <div className={styles.container}>
      <Helmet>
        <title>E-LNOTE | SignUp</title>
      </Helmet>
      {error && <Alert variant="danger">{error}</Alert>}
      <h1 className={styles.title}>
        SignUp To Your Electronic Lesson-Note Account
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
      <input
          type="text"
          placeholder="Full Name"
          className={styles.input}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button}>Sign Up</button>

        <div className={styles.signup}>
          <Link to="/login" className={styles.signupText}>
            Already an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
