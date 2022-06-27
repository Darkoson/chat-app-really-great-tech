import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectActiveContact } from "../../store/reducers/contacts-reducer";
import MessageContent from "./message-content";
import MessageHeader from "./message-header";
import MessageInput from "./message-input";
import "./messages.css";

const Messages: FC = () => {
  const activeContact = useSelector(selectActiveContact);
  return (
    <div className="messages">

      {activeContact ? (
        <div className="none">
          <MessageHeader />
          <MessageContent />
          <MessageInput />
        </div>
      ) : " nothing to display" }
      
    </div>
  );
};

export default Messages;
