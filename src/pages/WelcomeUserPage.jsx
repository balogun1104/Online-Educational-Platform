import React from "react";

import { useUserAuth } from "../context/UserAuthContext";
import LogoutButtonHandle from "../components/Logout/LogoutButtonHandle";

const WelcomeUserPage = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div>
        {" "}
        welcome <br />
        {user.displayName ? user.displayName : user.email}
      </div>
      <img
        src={user.photoURL}
        alt={user.displayName ? user.displayName : user.email}
      />

      <LogoutButtonHandle />
    </>
  );
};

export default WelcomeUserPage;
