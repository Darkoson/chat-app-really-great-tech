import React, { FC } from "react";
import "./welcome.css";
import logo from "./../../logo.png";
import { Outlet } from "react-router-dom";

const Welcome: FC = () => {
  return (
    <div className="Welcome">
      <div className="wrapper">
        <div className="brand-area">
          <img src={logo} alt="" />
        </div>
        <div className="title-area">
          <h1 className="title">
            Best Online Messaging <br />
            Application
          </h1>
        </div>
        <div className="form-area">
          <div className="form-bg">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
