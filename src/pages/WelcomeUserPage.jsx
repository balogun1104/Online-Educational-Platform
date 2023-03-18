import React from "react";

import { useUserAuth } from "../context/UserAuthContext";
<<<<<<< Updated upstream
import LogoutButtonHandle from "../components/Logout/LogoutButtonHandle";
import { Helmet } from "react-helmet";
=======

import HeaderLogin from "../components/HeaderLogin";
>>>>>>> Stashed changes

const WelcomeUserPage = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div>
<<<<<<< Updated upstream
      <Helmet>
        <title>E-LNOTE | Dashboard</title>
      </Helmet>
=======
        <HeaderLogin user={user}/>
>>>>>>> Stashed changes
        {" "}
        welcome <br />
        {user.displayName ? user.displayName : user.email}
      </div>
      <img
        src={user.photoURL}
        alt={user.displayName ? user.displayName : user.email}
      />

     
    </>
  );
};

export default WelcomeUserPage;
