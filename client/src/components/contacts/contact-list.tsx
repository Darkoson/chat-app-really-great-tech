import React, { FC } from 'react'
import Contact from './contact';
import "./contacts.css"
import ContactSearch from './contact-search';

const ContactList :FC= () => {
  return (
    <div className="contact-list">
      <ContactSearch />

      <div className="chat-list">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default ContactList