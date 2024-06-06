import { Header, ReadChat, UnreadChat } from '@/components/chat'
import { Footer } from '@/components/common'
import { Chat, Search } from '@/components/filters'

export default function Chats() {
  return (
    <div className=' overflow-hidden '>
      <Header />
      <Chat />
      <Search />
      <section className=' mx-6 mt-12 flex flex-col gap-6 mb-20'>
        <ReadChat />
        <UnreadChat />
        <ReadChat />
        <ReadChat />
        <UnreadChat />
        <UnreadChat />
        <UnreadChat />
        <UnreadChat />
      </section>
      <Footer />
    </div>
  )
}
