import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectActiveContact } from "../../shared/store/slices/contacts-slice";
import { selectCurrentUser } from "../../shared/store/slices/user-slice";
import MessageContent from "./message-content";
import MessageHeader from "./message-header";
import MessageInput from "./message-input";
import "./messages.css";

const Messages: FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const activeContact = useSelector(selectActiveContact);
  return (
    <div className="messages">
      {currentUser && activeContact ? (
        <div className="none">
          <MessageHeader
            currentUserId={currentUser.id}
            currentContact={activeContact}
          />
          <MessageContent />
          <MessageInput />
        </div>
      ) : (
        " nothing to display"
      )}
    </div>
  );
};

export default Messages;
