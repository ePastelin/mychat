import { ReadChat, UnreadChat } from '@/components/chat/Chats.tsx'
import Chat from '@/components/filters/Chat'
import Search from '@/components/filters/Search'

export default function ChatList({ chats, setIdChat }) {
  return (
    <>
      <Chat />
      <Search />
      <section className='mt-8 flex flex-col gap-6 flex-grow overflow-y-auto no-scrollbar min-h-0'>
      {chats.map(chat => (
  <>
    {chat.unread === 0 ? <ReadChat desktop={true} chat={chat} set={setIdChat} /> : (
      <UnreadChat key={chat.id} desktop={true} chat={chat} set={setIdChat} />
    )}
  </>
))}
      </section>
    </>
  )
}
