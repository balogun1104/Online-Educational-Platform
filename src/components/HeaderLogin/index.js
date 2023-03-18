import React, { useRef } from "react";
import { Container } from "reactstrap";
import "../Header/header.css";
import { Link } from "react-router-dom";
import LogoutButtonHandle from "../../components/Logout/LogoutButtonHandle";
import { useUserAuth } from "../../context/UserAuthContext";

const HeaderLogin = () => {
  const { user } = useUserAuth();

  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <div>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> E-LNote
            </h2>
          </div>



          <div className="nav d-flex align-items-center gap-5">

          <LogoutButtonHandle />
            <img
              src={user.photoURL}
              alt={user.displayName ? user.displayName : user.email}
            />
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogin;
