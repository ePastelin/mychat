'use client'

// pages/chat.js
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { IoIosArrowBack, IoMdAttach } from 'react-icons/io'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef(null)

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'me' }])
      setMessage('')
    }
  }

  const handleReceiveMessage = () => {
    const incomingMessage = {
      text: 'This is a test message from the other person.',
      sender: 'other',
    }
    setMessages([...messages, incomingMessage])
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className='flex flex-col h-screen'>
      {/* Profile Section */}
      <div className='flex items-center p-4 bg-white shadow-inner-bottom'>
        <IoIosArrowBack className='text-2xl cursor-pointer' />
        <Image src='/images/profile.jpg' width={20} height={20} alt='Profile' className='w-10 h-10 rounded-full mx-4' />
        <span className='font-semibold'>La roca mala</span>
      </div>

      {/* Messages Section */}
      <div className='flex flex-col flex-grow p-4 overflow-auto bg-chatBackground'>
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div
              className={`p-2 rounded-lg max-w-xs md:max-w-md lg:max-w-lg shadow-dropshadow-message ${
                msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-senderMessage'
              }`}
              style={{
                wordWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className='flex items-center p-4 bg-gray-100'>
        <input
          type='text'
          className='flex-grow p-2 border rounded-lg mr-2'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your message'
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage()
            }
          }}
        />
        <IoMdAttach className='text-2xl cursor-pointer mr-4' />
        <button className='bg-blue-500 text-white p-2 rounded-lg mr-4' onClick={handleSendMessage}>
          Send
        </button>
        <button className='bg-green-500 text-white p-2 rounded-lg' onClick={handleReceiveMessage}>
          Simulate Incoming
        </button>
      </div>
    </div>
  )
}

export default Chat
