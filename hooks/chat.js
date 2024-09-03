'use client'

import { useEffect, useRef, useState } from 'react'

export const useChat = (messages) => {

  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, messagesEndRef])

  return { messagesEndRef }
}

export const useMessages = (idChat) => {
  const [message, setMessage] = useState()
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(null);

const textareaRef = useRef(null);

useEffect(() => {
  const ws = new WebSocket('wss://mychatapi-oxk8.onrender.com/');

  setSocket(ws);

  ws.onopen = () => {
    console.log('WebSocket conectado');
  };

  ws.onmessage = (event) => {
    const incomingMessage = JSON.parse(event.data);
    console.log(incomingMessage)
      
    if (incomingMessage.status && !incomingMessage.idChat) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === incomingMessage.idMessage
            ? { ...msg, status: incomingMessage.status }
            : msg
        )
      );
    }
    
    if (incomingMessage.idChat) {
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    }
  }
  

  ws.onerror = (error) => {
    console.error('WebSocket Error:', error);
  };

  return () => {
    ws.close();
  };
}, [idChat]);

const handleSendMessage = async (message, setMessage) => {
  if (message.trim()) {
    const newMessage = { message, idChat };

    if (socket && socket.readyState === WebSocket.OPEN) {
      // Enviar el mensaje al backend
      socket.send(JSON.stringify(newMessage));

      // Esperar el ID del mensaje desde el backend y actualizar el estado del mensaje con él
      setSocket.onmessage = (event) => {
        const incomingMessage = JSON.parse(event.data);
        if (incomingMessage.id) {
          setMessages([...messages, { id: incomingMessage.id, message, sender: 1, status: 'sent', date: incomingMessage.date }]);
          
        }
      };
      setMessage('');

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  }
};

  const adjustTextareaHeight = (textareaRef) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return { handleSendMessage, adjustTextareaHeight, messages, setMessages, message, setMessage, textareaRef}
}
