'use client'

import { Input, MessageSection, Profile } from '@/components/chat'
import { useChat } from '@/hooks/chat'
// pages/chat.js
import { useRef } from 'react'

const Chat = () => {
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  const { messages, setMessages, message, setMessage } = useChat(messagesEndRef)

  return (
    <div className='flex flex-col h-screen'>
      <Profile />
      <MessageSection messages={messages} messagesEndRef={messagesEndRef} />
      <Input message={message} setMessage={setMessage} textareaRef={textareaRef} messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default Chat
