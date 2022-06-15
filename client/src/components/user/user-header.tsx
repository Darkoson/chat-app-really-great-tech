import React, { FC } from "react";
import "./user.css";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { Link } from "react-router-dom";

const UserHeader: FC = () => {
  return (
    <div className="user-header">
      <div className="user-info">
        <img
          src="./asset/user-img.jpg"
          alt=""
          width="50px"
          height="50px"
          className="user-img"
        />
        <div className="user-profile">
          <h2 className="user-name">Thomas Darko</h2>
          <small className="user-email">darkothomas80@gmail.com</small>
        </div>
      </div>
      <div className=" user-options drop-down">
        <Popover
          placement="bottomRight"
          content={<Link to={"/signin"}>Logout</Link>}
          trigger="click">
          <MoreOutlined />
        </Popover>
      </div>
    </div>
  );
};

export default UserHeader;
