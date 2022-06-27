import React, { FC } from "react";
import { useSelector } from "react-redux";
import { User } from "../../interfaces";
import { selectActiveContactId, updateSelectedContactId } from "../../store/reducers/contacts-reducer";

interface ContactProps{
  person:User
}

const Contact: FC<ContactProps> = ({ person }) => {
  
  const activeId = useSelector(selectActiveContactId);
  
  
  return (
    <div
      className={"contact " + (person.id === activeId ? "selected" : "")}
      onClick={() => updateSelectedContactId(person.id)}>
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
    </div>
  );
};

export default Contact;
