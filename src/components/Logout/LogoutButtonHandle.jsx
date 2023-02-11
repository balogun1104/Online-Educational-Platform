import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import { Modal } from "react-bootstrap";
import styles from "./LogoutButtonHandler.module.css";

const LogoutButtonHandle = () => {
  const [showModal, setShowModal] = useState(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    setShowModal(false);
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button onClick={handleLogoutClick}>Logout</button>
     
        <Modal show={showModal}  className={styles.modalWrapper}>
         
          <h1>Are you sure you want to logout?</h1>
          <button onClick={handleLogout}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
         
        </Modal>
      
    </>
  );
};

export default LogoutButtonHandle;
