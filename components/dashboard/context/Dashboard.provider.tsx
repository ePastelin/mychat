import { useState } from 'react'
import { Cards, Chart, DashboardProviderProps, SummaryYearly, Top4Chats, TopChats, TotalChats, User } from '../types'
import { DashboardContext } from './Dashboard.context'
import { emptyCards, EmptyChats, EmptyChart, EmptyTop4Chats, EmptyTopChats, EmptyUsers, EmptyChartYearly } from './Dashboard.constants'

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [users, setUsers] = useState<User[]>(EmptyUsers)
  const [totalChats, setTotalChats] = useState<TotalChats>(EmptyChats)
  const [chatSummary, setChatSummary] = useState<Chart>(EmptyChart)
  const [messageSummary, setMessageSummary] = useState<Chart>(EmptyChart)
  const [topChats, setTopChats] = useState<TopChats>(EmptyTopChats)
  const [top4Chats, setTop4Chats] = useState<Top4Chats>(EmptyTop4Chats)
  const [cards, setCards] = useState<Cards>(emptyCards)
  const [messagesYearly, setMessagesYearly] = useState<SummaryYearly>(EmptyChartYearly)
  const [chatsYearly, setChatsYearly] = useState<SummaryYearly>(EmptyChartYearly)

  const value = {
    users,
    setUsers,
    totalChats,
    setTotalChats,
    chatSummary,
    setChatSummary,
    messageSummary,
    setMessageSummary,
    topChats,
    setTopChats,
    top4Chats,
    setTop4Chats,
    cards,
    setCards,
    messagesYearly,
    setMessagesYearly,
    chatsYearly,
    setChatsYearly,
  }

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}
