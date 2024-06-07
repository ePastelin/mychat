'use client'

import { SendMenssage } from '@/types/common/chat'
import { useEffect, useState } from 'react'

export const useChat = (messagesEndRef: any) => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return { messages, message, setMessage, setMessages }
}

export const useMessages = () => {
  const handleReceiveMessage = (setMessages: any, messages: [{ sender: string; text: string }]) => {
    const incomingMessage = {
      text: 'This is a test message from the other person.',
      sender: 'other',
    }
    setMessages([...messages, incomingMessage])
  }

  const handleSendMessage: SendMenssage = (message, setMessages, setMessage, textareaRef, messages) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'me' }])
      setMessage('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const adjustTextareaHeight = (textareaRef: any) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return { handleSendMessage, handleReceiveMessage, adjustTextareaHeight }
}
