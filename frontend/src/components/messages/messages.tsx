import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { io, Socket } from "socket.io-client";

import { useRemoteSendMessage } from "../../graphql/messages/use-remote-send-message";
import { Chat, User } from "../../interfaces";
import MessageContent from "./message-content";
import MessageHeader from "./message-header";
import MessageInput from "./message-input";
import MessageWelcome from "./message-welcome";
import { useRemoteGetMessages } from "../../graphql/messages/use-remote-get-messages";

interface MessagesProps {
  currentUser: User;
  currentContact: User | undefined;
}

const host = "http://localhost:4000";

const Messages: FC<MessagesProps> = ({ currentUser, currentContact }) => {
  const socket = useRef<Socket>();
  const { executeSendMessage } = useRemoteSendMessage();

  const { executeGetMessages } = useRemoteGetMessages();
  const [incomingMessage, setIncomingMessage] = useState<Chat>();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    socket.current = io(host);
    socket.current.emit("add-user", currentUser.id);
  }, [currentUser]);

  const sendMessage = async (message: string): Promise<void> => {
    let chat: Chat = {
      id: 0,
      created_at: new Date(),
      message,
      senderId: currentUser.id,
      receiverId: currentContact ? currentContact.id : 0,
    };
    executeSendMessage(chat);
    socket.current?.emit("send-message", chat);
    setChats([...chats, chat]);
  };

  useEffect(() => {
    if (currentContact) {
      executeGetMessages(currentUser.id, currentContact.id).then((data) => {
        if (data.ok && "chats" in data.res) {
          setChats(data.res.chats);
        }
      });
    }
  }, [currentContact]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("receive-message", (incoming: Chat) => {
        setIncomingMessage(incoming);
      });
    }
  }, []);

  useEffect(() => {
    incomingMessage && setChats((prev) => [...prev, incomingMessage]);
  }, [incomingMessage]);

  return (
    <Container>
      {currentContact ? (
        <div className="messages">
          <MessageHeader
            currentUserId={currentUser.id}
            currentContact={currentContact}
          />
          <MessageContent currentUserId={currentUser.id} chats={chats} />

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
