import React from "react";

import { useUserAuth } from "../context/UserAuthContext";

import HeaderLogin from "../components/HeaderLogin";
import LessonNote from "../components/Lesson-Note";

const WelcomeUserPage = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div>
        <HeaderLogin user={user} />
        <LessonNote />
      </div>

    </>
  );
};

export default WelcomeUserPage;
