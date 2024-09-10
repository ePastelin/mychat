'use client'

import { useWebSocket } from '@/context/WebSocketProvider'
import { useEffect, useRef, useState } from 'react'

export const useChat = (messages, idChat) => {

  const messagesEndRef = useRef(null)
  const [first, setFirst] = useState(true)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: `${first ? 'auto' : 'smooth'}` })
      setFirst(false)
    }
  }, [messages, messagesEndRef])

  useEffect(() => {
    setFirst(true)
  }, [idChat])
  
  return { messagesEndRef }
}

export const useChatInfo = () => {
  const [chats, setChats] = useState([]);
  const { incomingMessage } = useWebSocket();  // Acceder a incomingMessage del contexto
  console.log(chats); 

  useEffect(() => {
    // console.log('entro a este useEffect', incomingMessage);
    
    if(incomingMessage) {
if (incomingMessage.message) {
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === incomingMessage.idChat
            ? { ...chat, last_message: incomingMessage.message, unread: incomingMessage.sender === 0 ? chat.unread + 1 : chat.unread, last_date: Date.now()}
            : chat
        )
      );
    }
    if(incomingMessage.action === 'message_read') {
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === incomingMessage.idChat
            ? { ...chat, unread: 0}
            : chat
        )
      );
    }
    }
    
  }, [incomingMessage]);

  return { chats, setChats };
};

export const useMessages = (idChat) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { incomingMessage, socket } = useWebSocket();  // Acceder a incomingMessage del contexto
  const messagesRef = useRef(messages);
  const textareaRef = useRef(null);



  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Manejo de mensajes entrantes desde WebSocket
  useEffect(() => {
    console.log(incomingMessage)
    if (incomingMessage && incomingMessage.idChat === idChat ) {

      if (incomingMessage.idChat && incomingMessage.action !== 'message_read') {
        setMessages((prevMessages) => [...prevMessages, incomingMessage]);
      }
    }
  }, [incomingMessage]);

  useEffect(() => {
    if (incomingMessage && incomingMessage.status ) {

      console.log(incomingMessage, "Aquí donde se cambia el esado", messages)

        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === incomingMessage.idMessage || msg.idMessage === incomingMessage.idMessage
              ? { ...msg, status: incomingMessage.status }
              : msg
          )
        );
      
    }
  }, [incomingMessage]);

  // Enviar mensajes de lectura cuando idChat coincide
  useEffect(() => {

    console.log('Estoy entrando a enviar la lectura', idChat)
    if (idChat && socket) {
      const unreadMessages = messages.filter(
        (message) => message.sender === 0 && message.status === 'sent' && idChat === message.idChat 
      );

      console.log(unreadMessages, 'Acá los mensajes sin leer')

      unreadMessages.forEach((msg) => {
        socket.send(JSON.stringify({
          action: 'message_read',
          idMessage: msg.id,
          idChat: idChat
        }));
      });
    }
  }, [idChat, messages]);

  // Manejar el envío de mensajes
  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = { message, idChat };

      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(newMessage));
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
