import { Dispatch, SetStateAction } from 'react'
import ChatDetails from './ChatDetails'
import ChatList from './ChatList'
import { Chat } from '@/types/common'

interface Props {
  idChat: number
  setIdChat: Dispatch<SetStateAction<number>>
  chats: Chat[]
}

export const ChatContainer = ({ idChat, setIdChat, chats }: Props) => {
  return (
    <>
      <ChatList chats={chats} setIdChat={setIdChat} />
      <ChatDetails idChat={idChat} chats={chats} />
    </>
  )
}
