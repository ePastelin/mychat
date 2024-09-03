'use client'

import { Header } from '@/components/chat'
import { Footer } from '@/components/common'
import Side from '@/components/common/side/Side'
import useSWR from 'swr'
import { useState } from 'react'
import { fetcher } from '@/hooks/api/fetcher'
import ChatList from '@/components/chat/ChatList'
import ChatDetails from '@/components/chat/ChatDetails'
import Template from '@/components/template/Template'
import Users from '@/components/users/Users'

const API = process.env.NEXT_PUBLIC_API_ROUTE

export default function Chats() {
  const { data } = useSWR(`${API}/chat`, fetcher)
  const [screen, setScreen] = useState(1)
  const [idChat, setIdChat] = useState(null)

  const chats = data?.chats || []

  return (
    <>
      <div className='lg:hidden'>
        <div className='overflow-hidden px-6 lg:hidden'>
          <Header />
          <ChatList chats={chats} setIdChat={setIdChat} />
          <Footer />
        </div>
      </div>
      
      <div className='hidden lg:grid md:grid-cols-12'>
        <Side setScreen={setScreen} screen={screen} />

        {screen === 1 && (
          <>
            <div className='md:col-span-3 w-full px-4 bg-white'>
              <ChatList chats={chats} setIdChat={setIdChat} />
            </div>

            <ChatDetails idChat={idChat} chats={chats} />
          </>
        )}

        {screen === 2 && <Template />}
        {screen === 3 && <Users />}
      </div>
    </>
  )
}


