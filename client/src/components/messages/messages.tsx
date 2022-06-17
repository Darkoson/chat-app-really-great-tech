import React, { FC } from 'react'
import MessageContent from './message-content'
import MessageHeader from './message-header'
import MessageInput from './message-input'
import "./messages.css"

const Messages:FC = () => {
  return (
    <div className="messages">
      <MessageHeader />
      <MessageContent />
      <MessageInput />
    </div>
  );
}

export default Messages