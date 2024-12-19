import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface User {
  id: number
  username: string
}

export interface DashboardProviderProps {
  children: ReactNode
}

export interface TotalChats {
  totalChats: number
  growth: {
    current: number
    previous: number
    percentageIncrease: string
  }
}

export interface Chart {
  labels: string[]
  data: number[]
  total: number
  title: string
}

export interface TopChats {
  mostActive: {
    id: number
    username: string
    active_chats: number
  }
  mostInactive: {
    id: number
    username: string
    inactive_chats: number
  }
}

export interface TopUser {
  id: number
  username: string
  total_chats: number
  percentage: string
}

export interface CardData {
  title: string
  current: number
  previous: number
  growthPercentage: number
}

export interface Cards {
  inactiveChats: CardData
  activeChats: CardData
  messages: CardData
}

export interface SummaryYearly {
  labels: number[]
  data: number[]
  total: number
  title: string
}

export type Top4Chats = [TopUser, TopUser, TopUser, TopUser]

export interface DashboardContextType {
  users: User[]
  setUsers: Dispatch<SetStateAction<User[]>>
  totalChats: TotalChats
  setTotalChats: Dispatch<SetStateAction<TotalChats>>
  chatSummary: Chart
  setChatSummary: Dispatch<SetStateAction<Chart>>
  topChats: TopChats
  setTopChats: Dispatch<SetStateAction<TopChats>>
  top4Chats: Top4Chats
  setTop4Chats: Dispatch<SetStateAction<Top4Chats>>
  messageSummary: Chart
  setMessageSummary: Dispatch<SetStateAction<Chart>>
  cards: Cards
  setCards: Dispatch<SetStateAction<Cards>>
  messagesYearly: SummaryYearly
  setMessagesYearly: Dispatch<SetStateAction<SummaryYearly>>
  chatsYearly: SummaryYearly
  setChatsYearly: Dispatch<SetStateAction<SummaryYearly>>
}
