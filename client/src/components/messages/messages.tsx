import React, { FC } from 'react'
import MessageContent from './message-content'
import MessageInput from './message-input'
import "./messages.css"

const Messages:FC = () => {
  return (
      <div className='messages'>
          <MessageContent/>
          <MessageInput/>
    </div>
  )
}

export default Messages