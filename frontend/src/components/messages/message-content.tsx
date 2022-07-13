import React, { FC } from "react";
import styled from "styled-components";

const MessageContent: FC = () => {
  return (
    <Container>
      <div className="other">
        <strong>Hello Dear</strong>
      </div>
      <div className="you">
        <strong>Yes sweety, how are you doing ?</strong>
      </div>
    </Container>
  );
};

export default MessageContent;

const Container = styled.div`
  flex-grow: 1;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.5rem;
      border-radius: 1rem;
    }
  }
  .other,
  .you {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .other {
    align-self: flex-start;
    background-color: #fff;
    box-shadow: 1px 1px 3px var(--borderColor);
  }
  .you {
    align-self: flex-end;
  }
`;
