import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { Chat } from "../../interfaces";

export interface MessageContentProps {
  currentUserId: number;
  chats: Chat[];
}
const MessageContent: FC<MessageContentProps> = ({ currentUserId, chats }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // const scrollRef = useRef<HTMLDivElement>();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <Container>

      {chats.map((chat) => {
        return (
          <div
            ref={scrollRef}
            key={chat.id}
            className={`${chat.senderId === currentUserId ? "you" : "other"}`}>
            <strong>{chat.message}</strong>
          </div>
        );
      })}
    </Container>
  );
};

export default MessageContent;

const Container = styled.div`
  flex-grow: 1;
  display: block;
  /* max-height: 300px; */
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5rem;
    &-thumb {
      background-color: #ffffff39;
      width: 5rem;
      border-radius: 1rem;
    }
  }

  .other,
  .you {
    padding: 0.5rem 2rem;
    border-radius: 15px;
    display: flex;
    /* min-width: 150px; */
    overflow-wrap: break-word;
  }
  .other {
    align-self: flex-start;
    background-color: #fff;
    box-shadow: 1px 1px 3px var(--borderColor);
  }
  .you {
    justify-content: end;
    align-self: flex-end;
    background-color: var(--borderColor);
    box-shadow: 1px 1px 3px #c5fcf9;
  }
`;
