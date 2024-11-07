"use client";

import { useWebSocket } from "@/context/WebSocketProvider";
import { useCallback, useEffect, useRef, useState } from "react";
import { sendMultimedia } from "./api/fetcher";
import { useChatContext } from "@/context/ChatContext";
import useSound from "use-sound";
const who = "/audio/who.mp3";

export const useChat = (idChat) => {
  const { messages } = useChatContext();

  const messagesEndRef = useRef(null);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: `${first ? "auto" : "smooth"}`,
      });
      setFirst(false);
    }
  }, [messages, messagesEndRef]);

  useEffect(() => {
    setFirst(true);
  }, [idChat]);

  return { messagesEndRef };
};

export const useChatInfo = (idChat) => {
  const [chats, setChats] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState();
  const { incomingMessage } = useWebSocket(); // Acceder a incomingMessage del contexto
  const [play] = useSound(who);

  useEffect(() => {
    const totalUnread = chats.reduce((prev, current) => {
      console.log(current.unread, "current");
      return prev + current.unread;
    }, 0);
    setUnreadMessages(totalUnread);
  }, [chats]);

  useEffect(() => {
    if (incomingMessage) {
      console.log(incomingMessage, "this is current")
      if (incomingMessage.isActive === 0) {
        
      }
      if (idChat != incomingMessage.idChat && incomingMessage.idChat) play();
      if (incomingMessage.message || incomingMessage.media) {
        const message = incomingMessage.media
          ? "Multimedia 📁"
          : incomingMessage.message;
        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === incomingMessage.idChat
              ? {
                  ...chat,
                  last_message: message,
                  unread:
                    incomingMessage.sender === 0 &&
                    incomingMessage.idChat !== idChat
                      ? chat.unread + 1
                      : chat.unread,
                  last_date: Date.now(),
                  isActive: incomingMessage.isActive === 0 && 0
                }
              : chat
          )
        );
      }
      if (incomingMessage.action === "message_read") {
        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === incomingMessage.idChat ? { ...chat, unread: 0 } : chat
          )
        );
      }
    }
  }, [incomingMessage]);

  return { chats, setChats, unreadMessages };
};

export const useMessages = (idChat) => {
  const [message, setMessage] = useState("");
  const { messages, setMessages } = useChatContext();
  const { incomingMessage, socket } = useWebSocket();
  const messagesRef = useRef(messages);
  const textareaRef = useRef(null);

  const lastMessageRef = useRef(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    messagesRef.current = messages[idChat];
  }, [messages, idChat]);

  useEffect(() => {
    isFirstLoad.current = true;
  }, [idChat]);

  useEffect(() => {
    if (incomingMessage && Number(incomingMessage.idChat) === idChat) {
      if (incomingMessage.idChat && incomingMessage.action !== "message_read") {
        console.log("incoming document", incomingMessage);
        setMessages((prevMessages) => ({
          ...prevMessages,
          [idChat]: [...(prevMessages[idChat] || []), incomingMessage],
        }));
      }
    }
  }, [incomingMessage]);

  useEffect(() => {
    if (incomingMessage && incomingMessage.status) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [idChat]: prevMessages[idChat].map((msg) =>
          msg.id === incomingMessage.idMessage ||
          msg.idMessage === incomingMessage.idMessage
            ? { ...msg, status: incomingMessage.status }
            : msg
        ),
      }));
    }
  }, [incomingMessage]);

  useEffect(() => {
    if (idChat && socket) {
      const unreadMessages = (messages[idChat] || []).filter(
        (message) =>
          message.sender === 0 &&
          message.status === "sent" &&
          idChat === message.idChat
      );

      unreadMessages.forEach((msg) => {
        socket.send(
          JSON.stringify({
            action: "message_read",
            idMessage: msg.id,
            idChat: idChat,
          })
        );
      });
    }
  }, [idChat, messages[idChat], socket]);

  const handleSendMessage = useCallback(() => {
    if (message.trim() && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ message, idChat }));
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  }, [message, idChat, socket]);

  const handleSendMultimedia = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("idChat", idChat);

    await sendMultimedia(formData);
  };

  const adjustTextareaHeight = (textareaRef) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: isFirstLoad.current ? "auto" : "smooth",
      });
      isFirstLoad.current = false;
    }
  }, [messages[idChat], idChat]);

  return {
    handleSendMessage,
    adjustTextareaHeight,
    messages: messages[idChat] || [],
    setMessages,
    message,
    setMessage,
    textareaRef,
    handleSendMultimedia,
    lastMessageRef,
  };
};
