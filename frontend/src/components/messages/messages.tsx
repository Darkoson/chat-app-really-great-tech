import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { User } from "../../interfaces";
import { selectActiveContact } from "../../shared/store/slices/contacts-slice";
import MessageContent from "./message-content";
import MessageHeader from "./message-header";
import MessageInput from "./message-input";
import MessageWelcome from "./message-welcome";

interface MessagesProps {
  currentUser: User;
}
const Messages: FC<MessagesProps> = ({ currentUser }) => {
  const activeContact = useSelector(selectActiveContact);

  const sendMessage = async (input: string): Promise<String> => {
    alert(input);
    return "";
  };

  return (
    <Container>
      {currentUser && activeContact ? (
        <div className="messages">
          <MessageHeader
            currentUserId={currentUser.id}
            currentContact={activeContact}
          />
          <MessageContent />

          <MessageInput handleSend={sendMessage} />
        </div>
      ) : (
        <MessageWelcome firstname={currentUser.firstname} />
      )}
    </Container>
  );
};

export default Messages;

const Container = styled.div`
  height: 100%;
  .messages {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
