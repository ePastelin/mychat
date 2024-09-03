import Message from '@/components/chat/messages/Message'

export default function ChatDetails({ idChat, chats }) {
  const chat = chats.find(c => c.id === idChat)
  
  return idChat ? (
      <Message idChat={idChat} chat={chat} />
  ) : null
}
