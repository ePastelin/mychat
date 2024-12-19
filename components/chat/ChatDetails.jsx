import Message from '@/components/chat/messages/Message'
import { memo } from 'react'

function ChatDetails({ idChat, chats }) {
  const chat = chats.find((c) => c.id === idChat)

  return idChat ? <Message idChat={idChat} chat={chat} /> : null
}

export default memo(ChatDetails)
