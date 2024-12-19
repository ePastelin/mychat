import { useEffect, useState } from 'react'
import { useDashboardContext } from '../context/Dashboard.context'
import { fetcher } from '@/hooks/api/fetcher'

export const useFetch = () => {
  const {
    setUsers,
    setChatSummary,
    setMessageSummary,
    setTop4Chats,
    setTopChats,
    setTotalChats,
    setCards,
    setChatsYearly,
    setMessagesYearly,
  } = useDashboardContext()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const year = new Date().getFullYear()

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      try {
        const users = await fetcher('/dashboard/users')
        const totalChats = await fetcher('/dashboard/chats/summary')
        const topChats = await fetcher('/dashboard/users/top-chats')
        const top4Users = await fetcher('/dashboard/users/top-4')
        const chatSummary = await fetcher(`/dashboard/chats/monthly-summary/${year}`)
        const messageSummary = await fetcher(`/dashboard/messages/monthly-summary/${year}`)
        const cards = await fetcher('/dashboard/cards')
        const messagesYearly = await fetcher('/dashboard/messages/yearly-summary')
        const chatsYearly = await fetcher('/dashboard/chats/yearly-summary')

        setUsers(users)
        setTotalChats(totalChats)
        setTopChats(topChats)
        setTop4Chats(top4Users)
        setChatSummary(chatSummary)
        setMessageSummary(messageSummary)
        setCards(cards)
        setMessagesYearly(messagesYearly)
        setChatsYearly(chatsYearly)

        setError(null)
      } catch (error) {
        console.error(error)
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { loading, error }
}
