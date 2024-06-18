'use client'

import { Header, Input, MessageSection, Profile, ReadChat, UnreadChat } from '@/components/chat'

import { Footer } from '@/components/common'
import Side from '@/components/common/side/Side'
import { Chat, Search } from '@/components/filters'
import Template from '@/components/template/Template'
import { useChat } from '@/hooks/chat'
import { useRef, useState } from 'react'

export default function Chats() {
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)
  const [screen, setScreen] = useState(1)

  const { messages, setMessages, message, setMessage } = useChat(messagesEndRef)

  return (
    <>
      <div className='lg:hidden'>
        <div className='overflow-hidden px-6 lg:hidden'>
          <Header />
          <Chat />
          <Search />
          <section className='mt-12 flex flex-col gap-6 mb-20'>
            <ReadChat />
            <UnreadChat />
            <ReadChat />
            <ReadChat />
            <UnreadChat />
            <UnreadChat />
            <UnreadChat />
            <UnreadChat />
          </section>
        </div>
        <Footer />
      </div>
      <div className='hidden lg:grid md:grid-cols-12'>
        <Side setScreen={setScreen} screen={screen} />
        {screen === 1 && (
          <div className='md:col-span-3 w-full px-4 bg-white'>
            <Chat />
            <Search />
            <section className='mt-8 flex flex-col gap-6 h-[560px] overflow-y-auto no-scrollbar'>
              <ReadChat desktop={true} />
              <UnreadChat desktop={true} />
              <ReadChat desktop={true} />
              <ReadChat desktop={true} />
              <UnreadChat desktop={true} />
              <UnreadChat desktop={true} />
              <UnreadChat desktop={true} />
              <UnreadChat desktop={true} />
            </section>
          </div>
        )}
        {screen === 2 && <Template />}
        <div className='h-screen md:col-span-8 w-full flex flex-col'>
          <Profile />
          <MessageSection messages={messages} messagesEndRef={messagesEndRef} />
          <Input message={message} setMessage={setMessage} textareaRef={textareaRef} messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </>
  )
}
