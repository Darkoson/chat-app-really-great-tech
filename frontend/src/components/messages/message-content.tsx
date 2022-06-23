import React, { FC } from "react";

const MessageContent: FC = () => {
  return (
    <div className="message-content">
      <div className="chat-history">
        <div className="other">
          <p>
            <strong>Hello Dear</strong>
          </p>
        </div>
        <div className="you">
          <p>
            <strong>Yes sweety, how are you doing ?</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
