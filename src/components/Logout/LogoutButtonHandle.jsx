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
     
     {/* <div className={styles.modalWrapper}> */}
        <Modal show={showModal}  className={styles.modal}>
         
          <h1>Are you sure you want to logout?</h1>
          <button className={styles.bottonModal} onClick={handleLogout}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
         
        </Modal>
      {/* </div> */}
    </>
  );
};

export default LogoutButtonHandle;
