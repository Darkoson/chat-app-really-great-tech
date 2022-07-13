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
import {
  setBlockedIds,
  setContacts,
} from "../../shared/store/slices/contacts-slice";
import styled from "styled-components";

const UserHeader: FC = () => {
  const navigate = useNavigate();
  const { executeLogout } = useRemoteLogout();
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    executeLogout();
    dispatch(setCurrentUser(null));
    dispatch(setContacts([]));
    dispatch(setBlockedIds([]));
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Container className="header">
      <div className="user">
        <div className="user-info">
          <img src="./asset/user-img.jpg" alt="" />
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
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px 0px 0 0px;
  display: flex;
  align-items: center;

  .user {
    padding: auto 20px;
    display: flex;
    align-items: center;
    width: 100%;

    .user-info {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }
    .user-options {
      width: 30px;
    }
  }
`;

export default UserHeader;
