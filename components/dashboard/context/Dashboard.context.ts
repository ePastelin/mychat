import { createContext, useContext } from 'react'
import { DashboardContextType } from '../types'
import { emptyCards, EmptyChart, EmptyChartYearly, EmptyChats, EmptyTop4Chats, EmptyTopChats, EmptyUsers } from './Dashboard.constants'

export const DashboardContext = createContext<DashboardContextType>({
  users: EmptyUsers,
  setUsers: () => {},
  totalChats: EmptyChats,
  setTotalChats: () => {},
  chatSummary: EmptyChart,
  setChatSummary: () => {},
  topChats: EmptyTopChats,
  setTopChats: () => {},
  top4Chats: EmptyTop4Chats,
  setTop4Chats: () => {},
  messageSummary: EmptyChart,
  setMessageSummary: () => {},
  cards: emptyCards,
  setCards: () => {},
  chatsYearly: EmptyChartYearly,
  setChatsYearly: () => {},
  messagesYearly: EmptyChartYearly,
  setMessagesYearly: () => {},
})

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)

  if (!context?.users || !context?.totalChats) throw new Error('Dashboard Context must be used within a Dashboard Provider')

  return context
}
