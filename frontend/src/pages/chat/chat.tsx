import React, { FC, useEffect } from "react";
import "./chat.css";
import UserHeader from "../../components/user/user-header";
import ContactList from "../../components/contacts/contact-list";
import Messages from "../../components/messages/messages";

import { User } from "../../interfaces";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/store/config";
import {
  selectCurrentUser,
  setCurrentUser,
} from "../../shared/store/slices/user-slice";
 
const Chat: FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectCurrentUser);
  

  useEffect(() => {
    // console.log("chat: current user = ", currentUser);
    if (!currentUser) {
      let jsonUser = localStorage.getItem("user");
      if (jsonUser) {
        let user = JSON.parse(jsonUser) as User;
        dispatch(setCurrentUser(user));
      } else {
        navigate("/login");
      }
    }
  }, [currentUser]);

 

  return (
    <section className="chat">
      <div className="sidebar">
        <div className="header sidebar-header">
          <UserHeader />
        </div>
        <div className="sidebar-body">
          <ContactList currentUserId={currentUser? currentUser.id:0} />
        </div>
      </div>
      <div className="recipient">
        <Messages />
      </div>
    </section>
  );
};

export default Chat;
