import React, { FC } from "react";
import styled from "styled-components";
import Robot from "../../robot.gif";

interface MessageWelcomeProps {
  firstname: string;
}
const MessageWelcome: FC<MessageWelcomeProps> = ({ firstname }) => {
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1> Welcome, {firstname}! </h1>
      <h3>Please select a contact to Start messaging.</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7a1e1e;
  flex-direction: column;
  height: 100%;
  img {
    height: 20rem;
  }
  h1 {
    color: #4e0eff;
    padding: 2rem 0;
  }
`;

export default MessageWelcome;
