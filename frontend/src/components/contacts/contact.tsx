import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
    <div
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
    </div>
  );
};

export default Contact;
