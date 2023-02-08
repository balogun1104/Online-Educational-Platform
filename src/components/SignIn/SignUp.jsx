import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";


const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const  {signUp}  = useUserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('')
      await signUp(email, password);

    } catch (err) {
      setError(err.message)
    }
  };
  return (
    <div className={styles.container}>
       {error && <Alert variant="danger">{error}</Alert>}
      <h1 className={styles.title}>
        SignUp To Your Electronic Lesson-Note Account
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
