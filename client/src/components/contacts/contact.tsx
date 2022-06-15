import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="contact">
      <div className="chat-user">
        <img
          src="./asset/JonathanKwofie-img.jpg"
          alt=""
          width="40px"
          height="40px"
        />
        <div className="chat-profile">
          <h3 className="chat-name">Jonathan Kwofie</h3>
          <small>The last time I saw you was ...</small>
        </div>
      </div>
      <small className="state last-seen">1hr ago</small>
    </div>
  );
};

export default Contact;
