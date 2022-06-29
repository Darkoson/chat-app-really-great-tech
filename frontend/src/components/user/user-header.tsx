import React, { FC } from "react";
import "./user.css";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import { useRemoteLogout } from "../../graphql/user/use-remote-logout";
import { useDispatch } from "react-redux";
import {
  selectCurrentUser,
  setCurrentUser,
} from "../../shared/store/slices/user-slice";
import { AppDispatch } from "../../shared/store/config";
import { useSelector } from "react-redux";

const UserHeader: FC = () => {
  const navigate = useNavigate();
  const { executeLogout } = useRemoteLogout();
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    executeLogout();
    dispatch(setCurrentUser(null));
    localStorage.clear();
    navigate("/login");
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
          <h2 className="user-name">
            {currentUser?.firstname + " " + currentUser?.lastname}
          </h2>
          <small className="user-email">{currentUser?.email}</small>
        </div>
      </div>
      <div className=" user-options drop-down">
        <Popover
          placement="bottomRight"
          content={<span onClick={(e) => handleLogout(e)}>Logout</span>}
          trigger="click">
          <MoreOutlined />
        </Popover>
      </div>
    </div>
  );
};

export default UserHeader;
