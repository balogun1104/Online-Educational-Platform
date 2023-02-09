import React from "react";
import { useNavigate } from "react-router";

import { useUserAuth } from "../context/UserAuthContext";

const WelcomeUserPage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div> welcome <br />
      {
          user.displayName ? user.displayName : user.email
      }
      </div>
      <img src={user.photoURL} alt={  user.displayName ? user.displayName : user.email} />
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
};

export default WelcomeUserPage;
