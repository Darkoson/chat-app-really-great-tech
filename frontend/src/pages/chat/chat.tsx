import React, { FC, useEffect } from "react";
// import "./chat.css";
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
import styled from "styled-components";
import { selectActiveContact } from "../../shared/store/slices/contacts-slice";

const Chat: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector(selectCurrentUser);
  const currentContact = useSelector(selectActiveContact);

  useEffect(() => {
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
    <Container>
      {currentUser && (
        <section>
          <div className="sidebar">
            <UserHeader />
            <ContactList currentUserId={currentUser.id} />
          </div>
          <div className="main-chat">
            <Messages
              currentUser={currentUser}
              currentContact={currentContact}
            />
            
          </div>
        </section>
      )}
    </Container>
  );
};

const Container = styled.div`
  section {
    margin: 0px 20px;
    display: grid;
    grid-template-columns: 350px 1fr;
    height: 100vh;
    .sidebar {
      border: 0.1px solid blue;
      border-radius: 10px 0px 0 0px;
      height: 100vh;
    }
    .main-chat {
      border: 0.1px solid blue;
      border-radius: 0px 10px 0 0px;
      height: 100vh;
    }
  }
`;

export default Chat;
