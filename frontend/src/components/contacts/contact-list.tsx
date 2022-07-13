import React, { FC, useEffect, useState } from "react";
import Contact from "./contact";
// import "./contacts.css";
import ContactSearch from "./contact-search";
//import useContacts from "../../graphql/queries/use-contacts";
// import { GQLResult } from "../../interfaces";
//import { gql, useQuery } from "@apollo/client";
import { User } from "../../interfaces";
// import { useRemoteContacts } from "../../graphql/contacts/use-remote-contacts";
import {
  selectContacts,
  setContacts,
} from "../../shared/store/slices/contacts-slice";
import { AppDispatch } from "../../shared/store/config";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";

export interface ContactListProps {
  currentUserId: number;
}
const ContactList: FC<ContactListProps> = ({ currentUserId }) => {
  const dispatch = useDispatch<AppDispatch>();
  // const { executeContacts } = useRemoteContacts();
  const contacts = useSelector(selectContacts);
  const [displayedContacts, setDisplayedContacts] = useState<User[]>(contacts);

  useEffect(() => {
    if (contacts.length === 0) {
      let localContacts: User[];
      let jsonContact = localStorage.getItem("contacts");
      localContacts = jsonContact ? JSON.parse(jsonContact) : [];
      dispatch(setContacts(localContacts));
    }
    setDisplayedContacts(contacts);
  }, [contacts]);

  // useEffect(() => {
  //   executeContacts(currentUserId).then((result: GQLResult) => {
  //     if (result.ok && "users" in result.res) {
  //       let remoteContacts = result.res.users;
  //       dispatch(setContacts(remoteContacts));
  //       setDisplayedContacts(remoteContacts);
  //     } else {
  //       console.log("no contacts found");
  //     }
  //   });
  // }, [currentUserId]);

  const filterContacts = (event: React.ChangeEvent<HTMLInputElement>) => {
    let search = event.target.value.trim().toLocaleUpperCase();
    if (search !== "") {
      let matchedContacts = contacts.filter((contact) => {
        return (
          contact.firstname.toLocaleUpperCase().includes(search) ||
          contact.lastname.toLocaleUpperCase().includes(search)
        );
      });

      setDisplayedContacts(matchedContacts);
    } else {
      setDisplayedContacts(contacts);
    }
  };

  return (
    <Container className="contact-list">
      <ContactSearch handleChange={filterContacts} />

      <div className="chat-list">
        {displayedContacts.map((pers) => (
          <Contact key={pers.id} person={pers} />
        ))} 
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .chat-list {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 2rem;
        border-radius: 1rem;
      }
    }
  }
`;

export default ContactList;
