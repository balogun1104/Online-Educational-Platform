import React, { useState } from "react";
import styles from "./Login.module.css";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import HeaderAll from "../Header/HeaderAll";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await logIn(email, password);
      navigate("/welcomeuser");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/welcomeuser");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
    <HeaderAll />
    <div className={styles.container}>
      {error && <Alert variant="danger">{error}</Alert>}
      <h1 className={styles.title}>Login To Electronic Lesson-Note</h1>
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
        <button className={styles.button}>Login</button>

        <div className={styles.googleLogin}>
          <p className={styles.googleLoginText}>Sign in with Google</p>
          <GoogleButton onClick={handleGoogleLogin} />
        </div>

        <div className={styles.signup}>
          <Link to="/signup" className={styles.signupText}>
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
