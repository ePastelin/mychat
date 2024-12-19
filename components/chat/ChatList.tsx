import { ReadChat, UnreadChat } from '@/components/chat/Chats'
import Chat from '@/components/filters/Chat'
import Search from '@/components/filters/Search'
import { Dispatch, memo, SetStateAction, useState } from 'react'
import chatsFilter from '@/utils/chatsFilter'
import { Chat as IChat } from '@/types/common'

interface Props {
  chats: IChat[]
  setIdChat: Dispatch<SetStateAction<number>>
}

function ChatList({ chats = [], setIdChat }: Props) {
  const [searchName, setSearchName] = useState('')
  const [isUnread, setIsUnread] = useState(0)

  chats.sort((a, b) => {
    return new Date(b.last_date).getTime() - new Date(a.last_date).getTime()
  })

  const filteredChats = chatsFilter(chats, searchName, isUnread)

  return (
    <div className='col-span-3 w-full h-screen px-4 bg-white flex flex-col'>
      <Chat isUnread={isUnread} setIsUnread={setIsUnread} />
      <Search setSearchName={setSearchName} />
      <section className='mt-8 flex flex-col gap-6 flex-grow overflow-y-auto no-scrollbar min-h-0'>
        {filteredChats.map((chat: IChat) =>
          chat.unread === 0 ? (
            <ReadChat key={chat.id} desktop={true} chat={chat} set={setIdChat} />
          ) : (
            <UnreadChat key={chat.id} desktop={true} chat={chat} set={setIdChat} />
          ),
        )}
      </section>
    </div>
  )
}

export default memo(ChatList)
