'use client'

import Side from '@/components/common/side/Side'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { fetcher } from '@/hooks/api/fetcher'
import Create from '@/components/template/create/Create'
import SendTemplate from '@/components/template/sendTemplate/SendTemplate'
import Users from '@/components/users/Users'
import { useChatInfo } from '@/hooks/chat'
import CircleLoader from '@/components/common/Loader'
import { ChatContainer } from '@/components/chat/ChatContainer'
import { useGlobalContext } from '@/context/Global.context'
import Cookies from 'js-cookie'
import { Dashboard } from '@/components/dashboard'

const API = process.env.NEXT_PUBLIC_API_ROUTE

export default function Chats() {
  const [screen, setScreen] = useState(1)
  const [idChat, setIdChat] = useState(null)
  const { chats, setChats, unreadMessages } = useChatInfo(idChat)
  const { setNumbers } = useGlobalContext()
  const id = Cookies.get('idUser')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcher(`/auth/numbers/${id}`)
        setNumbers(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const { data, error } = useSWR(`${API}/chat`, fetcher, {
    revalidateOnFocus: true, // Revalida al volver a la ventana
    onSuccess: (data) => {
      setChats(data?.chats || [])
    },
  })

  if (error) return <div>Failed to load</div>
  if (!data) return <CircleLoader />

  return (
    <div className='global-container'>
      <Side setScreen={setScreen} screen={screen} unreadMessages={unreadMessages} />
      {screen === 1 && <ChatContainer chats={chats} idChat={idChat} setIdChat={setIdChat} />}
      {screen === 2 && <SendTemplate setScreen={setScreen} />}
      {screen === 3 && <Users />}
      {screen === 4 && <Create setScreen={setScreen} />}
      {screen === 5 && <Dashboard />}
    </div>
  )
}
