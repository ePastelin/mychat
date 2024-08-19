'use client'

import { Header, Input, MessageSection, Profile, ReadChat, UnreadChat } from '@/components/chat'
import { Footer } from '@/components/common'
import Side from '@/components/common/side/Side'
import useSWR from 'swr'
import { Chat, Search } from '@/components/filters'
import Template from '@/components/template/Template'
import Users from '@/components/users/Users'
import { useChat } from '@/hooks/chat.js'
import { useRef, useState } from 'react'
import { fetcher } from '@/hooks/api/fetcher'
import { Message } from '@/components/chat/messages'

const API = process.env.NEXT_PUBLIC_API_ROUTE

export default function Chats() {
  const { data, error, mutate } = useSWR(`${API}/chat`, fetcher)
  const [screen, setScreen] = useState(1)
  const [idChat, setIdChat] = useState(null)

  // Ensure chats is an empty array if data is not yet available
  const chats = data?.chats || []

  return (
    <>
      <div className='lg:hidden'>
        <div className='overflow-hidden px-6 lg:hidden'>
          <Header />
          <Chat />
          <Search />
          <section className='mt-12 flex flex-col gap-6 mb-20'>
            {/* Aquí va lo de los chats pero en versión mobile */}
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
              {chats.map((chat) => (
                <UnreadChat 
                  key={chat.id} 
                  desktop={true} 
                  chat={chat} 
                  set={setIdChat} 
                />
              ))}
            </section>
          </div>
        )}
        {screen === 2 && <Template />}
        {screen === 3 && <Users />}
        {idChat && (
          <Message 
            idChat={idChat} 
            chat={chats.find(c => c.id === idChat)} 
          />
        )}
      </div>
    </>
  )
}
