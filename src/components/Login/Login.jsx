import React from "react";
import styles from "./Login.module.css";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login To Electronic Lesson-Note</h1>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>

        <div className={styles.googleLogin}>
          <p className={styles.googleLoginText}>Sign in with Google</p>
          <GoogleButton />
        </div>

        <div className={styles.signup}>
          <Link to="/signup" className={styles.signupText}>
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
