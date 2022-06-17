import "./chat.css";
import UserHeader from "../../components/user/user-header";
import ContactList from "../../components/contacts/contact-list";
import Messages from "../../components/messages/messages";

const Chat = () => {
  return (
    <section className="chat">
      <div className="sidebar">
        <div className="header sidebar-header">
          <UserHeader />
        </div>
        <div className="sidebar-body">
          <ContactList />
        </div>
      </div>
      <div className="recipient">
        <Messages />
      </div>
    </section>
  );
};

export default Chat;
