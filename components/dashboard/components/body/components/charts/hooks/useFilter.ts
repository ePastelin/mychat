import { useDashboardContext } from '@/components/dashboard/context/Dashboard.context'
import { fetcher } from '@/hooks/api/fetcher'

export const useFilter = () => {
  const { setChatSummary, setMessageSummary } = useDashboardContext()

  const messageFilter = async (year: string) => {
    const message = await fetcher(`/dashboard/messages/monthly-summary/${year}`)
    setMessageSummary(message)
  }

  const chatFilter = async (year: string) => {
    const chat = await fetcher(`/dashboard/chats/monthly-summary/${year}`)
    setChatSummary(chat)
  }

  return { messageFilter, chatFilter }
}
