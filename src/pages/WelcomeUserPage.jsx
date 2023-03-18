import React from "react";

import { useUserAuth } from "../context/UserAuthContext";
import LogoutButtonHandle from "../components/Logout/LogoutButtonHandle";
import { Helmet } from "react-helmet";

const WelcomeUserPage = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div>
      <Helmet>
        <title>E-LNOTE | Dashboard</title>
      </Helmet>
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
