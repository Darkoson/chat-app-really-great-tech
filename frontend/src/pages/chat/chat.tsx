import React, { FC, useEffect } from "react";
import "./chat.css";
import UserHeader from "../../components/user/user-header";
import ContactList from "../../components/contacts/contact-list";
import Messages from "../../components/messages/messages";

import { gql, useQuery } from "@apollo/client";
import { User } from "../../interfaces";
import { setContacts } from "../../store/reducers/contacts-reducer";
import {
  selectCurrentUser,
  setCurrentUser,
} from "../../store/reducers/user-reducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/config";

export const MY_CONTACTS_QUERY = gql`
  query Query($id: ID) {
    getAllUserContacts(id: $id) {
      ok
      res {
        ... on Users {
          users {
            id
            email
            firstname
            lastname
          }
        }
        ... on Info {
          messages
        }
      }
    }
  }
`;

const Chat: FC = () => {
  const navigate = useNavigate();
  const { data } = useQuery(MY_CONTACTS_QUERY, {
    variables: { id: 1 },
  });

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    console.log("chat: current user = ", currentUser);
    if (!currentUser) {
      let jsonUser = localStorage.getItem("user");
      if (jsonUser) {
        let user = JSON.parse(jsonUser) as User;
        dispatch(setCurrentUser(user));
      } else {
        navigate("/login");
      }
    }
  
  }, [dispatch, currentUser, navigate]);


  useEffect(() => {
     
    if (data) {
      let users: User[] = data.getAllUserContacts.res.users;
      setContacts(users);
    }
  
  }, [data]);



  return (
    <section className="chat">
      <div className="sidebar">
        <div className="header sidebar-header">
          <UserHeader />
        </div>
        <div className="sidebar-body">
          <ContactList />
        </div>
      </div>
      <div className="recipient">
        <Messages />
      </div>
    </section>
  );
};

export default Chat;
