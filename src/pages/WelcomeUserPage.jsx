import React from "react";

import { useUserAuth } from "../context/UserAuthContext";

import HeaderLogin from "../components/HeaderLogin";

const WelcomeUserPage = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div>
        <HeaderLogin user={user}/>
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
