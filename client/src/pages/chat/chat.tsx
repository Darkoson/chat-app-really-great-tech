import React from "react";
import "./chat.css";
import UserHeader from "../../components/user/user-header";
import ContactList from "../../components/contacts/contact-list";
import MessageHeader from "../../components/messages/message-header";
import Messages from "../../components/messages/messages";

const Chat = () => {
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
        <div className="header recipient-header">
          <MessageHeader />
        </div>
        <div className="recipient-messages">
          <Messages />
        </div>
      </div>
    </section>
  );
};

export default Chat;
