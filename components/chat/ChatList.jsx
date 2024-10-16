import { ReadChat, UnreadChat } from '@/components/chat/Chats.tsx'
import Chat from '@/components/filters/Chat'
import Search from '@/components/filters/Search'
import { useState } from 'react'
import chatsFilter from '@/utils/chatsFilter'

export default function ChatList({ chats, setIdChat }) {
  const [searchName, setSearchName] = useState('')
  const [isUnread, setIsUnread] = useState(0)
  
  const filteredChats = chatsFilter(chats, searchName, isUnread)

  return (
    <>
      <Chat isUnread={isUnread} setIsUnread={setIsUnread} />
      <Search chats={chats} setSearchName={setSearchName}/>
      <section className='mt-8 flex flex-col gap-6 flex-grow overflow-y-auto no-scrollbar min-h-0'>
        {filteredChats.map(chat => (
          chat.unread === 0 ? (
            <ReadChat key={chat.id} desktop={true} chat={chat} set={setIdChat} />
          ) : (
            <UnreadChat key={chat.id} desktop={true} chat={chat} set={setIdChat} />
          )
        ))}
      </section>
    </>
  )
}
