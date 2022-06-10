import React, { FC } from "react";
import logo from "./../../logo.png";

const Welcome: FC = () => {
  return (
    <div className="Welcome">
      Welcome
      <img src={logo} alt="" />
    </div>
  );
};

export default Welcome;
