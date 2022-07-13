import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { User } from "../../interfaces";
import { AppDispatch } from "../../shared/store/config";
import {
  selectActiveContactId,
  updateSelectedContactId,
} from "../../shared/store/slices/contacts-slice";

interface ContactProps {
  person: User;
}

const Contact: FC<ContactProps> = ({ person }) => {
  const activeId = useSelector(selectActiveContactId);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (id: number) => {
    dispatch(updateSelectedContactId(id));
  };

  return (
    <Container
      className={"contact " + (person.id === activeId ? "active-contact" : "")}
      onClick={() => handleClick(person.id)}>
      <div className="chat-user">
        <img
          src="./asset/JonathanKwofie-img.jpg"
          alt=""
          width="40px"
          height="40px"
        />
        <div className="chat-profile">
          <h3 className="chat-name">
            {person.firstname + " " + person.lastname}
          </h3>
          <small>The last time I saw you was ...</small>
        </div>
      </div>
      <small className="state last-seen">1hr ago</small>
    </Container>
  );
};

export default Contact;


const Container = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-top: 0.2px solid var(--lightBlue);
  transition: 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--lightBlue);
  }

  .active-contact {
    background-color: var(--lightBlue);
  }

  .chat-user {
    display: flex;
    align-items: center;
  }

  .chat-user img {
    margin-right: 0.8rem;
  }

  .chat-name {
    font-size: 0.8rem;
  }

  .chat-profile small {
    font-size: 0.8rem;
  }

  .state {
    width: 100%;
    font-size: 0.8rem;
  }

  .online,
  .typing {
    color: var(--green);
    font-weight: bold;
  }

  .last-seen {
    color: var(--blue);
  }

  .blocked {
    color: rgb(143, 143, 143);
  }

  .muted {
    color: #2698fb6b;
  }
`;

