import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import "../Header/header.css";
import { Link } from "react-router-dom";
import LogoutButtonHandle from "../../components/Logout/LogoutButtonHandle";
import { useUserAuth } from "../../context/UserAuthContext";
import { Avatar, Dropdown, Image, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const HeaderLogin = () => {
  const { user } = useUserAuth();

  const menu = (
    <Menu>
      <Menu.Item key="1">{user.displayName}</Menu.Item>
      <Menu.Item key="2">{user.email}</Menu.Item>
      <Menu.Item key="3">
        {" "}
        <LogoutButtonHandle />{" "}
      </Menu.Item>
    </Menu>
  );

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

          <div className="">
            <Dropdown overlay={menu} placement="bottomRight">
              <Avatar>
                {<img src={user.photoURL} /> ? (
                  <img src={user.photoURL} />
                ) : (
                  <Avatar icon={<UserOutlined />} />
                )}
              </Avatar>
            </Dropdown>
           <Image 
           src={user.photoURL}/>
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
