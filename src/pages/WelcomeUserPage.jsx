import React from "react";

import { useUserAuth } from "../context/UserAuthContext";

import HeaderLogin from "../components/HeaderLogin";

const WelcomeUserPage = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div>
        <HeaderLogin user={user} />
        
      </div>

    </>
  );
};

export default WelcomeUserPage;
