import { UnreadChat } from '@/components/chat/Chats.tsx'
import Chat from '@/components/filters/Chat'
import Search from '@/components/filters/Search'

export default function ChatList({ chats, setIdChat }) {
  return (
    <>
      <Chat />
      <Search />
      <section className='mt-8 flex flex-col gap-6 h-[560px] overflow-y-auto no-scrollbar'>
        {chats.map(chat => (
          <UnreadChat 
            key={chat.id} 
            desktop={true} 
            chat={chat} 
            set={setIdChat} 
          />
        ))}
      </section>
    </>
  )
}
