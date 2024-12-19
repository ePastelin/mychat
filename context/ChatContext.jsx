import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState({})
  const [templates, setTemplates] = useState([])

  return (
    <ChatContext.Provider
      value={{
        chats,
        setChats,
        messages,
        setMessages,
        templates,
        setTemplates,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChatContext = () => {
  return useContext(ChatContext)
}
