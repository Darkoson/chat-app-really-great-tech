import React, { FC,  useState } from "react";
import Contact from "./contact";
import "./contacts.css";
import ContactSearch from "./contact-search";
//import useContacts from "../../graphql/queries/use-contacts";
// import { GQLResult } from "../../interfaces";
//import { gql, useQuery } from "@apollo/client";
import { User } from "../../interfaces";
import { useSelector } from "react-redux";
import {  
  selectContacts,
} from "../../store/reducers/contacts-reducer";

 
const ContactList: FC  = ( ) => {
  const allContacts = useSelector(selectContacts);

  const [displayedContacts, setDisplayedContacts] =
    useState<User[]>(allContacts);


  const filterContacts = (event: React.ChangeEvent<HTMLInputElement>) => {
    let search = event.target.value.trim().toLocaleUpperCase();
    if (search !== "") {
      let matchedContacts = allContacts.filter((contact) => {
        return (
          contact.firstname.toLocaleUpperCase().includes(search) ||
          contact.lastname.toLocaleUpperCase().includes(search)
        );
      });

      setDisplayedContacts(matchedContacts);
    } else {
      setDisplayedContacts(allContacts);
    }
  };

  return (
    <div className="contact-list">
      <ContactSearch handleChange={filterContacts} />

      <div className="chat-list">
        {displayedContacts.map((pers, i) => (
          <Contact key={i} person={pers} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
