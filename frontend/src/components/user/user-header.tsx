import React, { FC } from "react";
import "./user.css";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import useLogout from "../../graphql/queries/use-logout";

const UserHeader: FC = () => {
  const navigate = useNavigate()
  const { executeLogout } = useLogout()

  const handleLogout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    executeLogout();
    localStorage.clear();
    navigate("/signin");
  };
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
          content={
            <span onClick={(e) => handleLogout(e)} >
              Logout
            </span>
          }
          trigger="click">
          <MoreOutlined />
        </Popover>
      </div>
    </div>
  );
};

export default UserHeader;
