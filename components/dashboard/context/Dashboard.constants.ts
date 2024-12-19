import { Cards, Chart, SummaryYearly, Top4Chats, TopChats, TopUser, TotalChats, User } from '../types'

export const EmptyUsers: User[] = []
export const EmptyChats: TotalChats = {
  totalChats: 0,
  growth: {
    current: 0,
    previous: 0,
    percentageIncrease: '',
  },
}
export const EmptyChart: Chart = {
  labels: [''],
  data: [0],
  total: 0,
  title: '',
}

export const EmptyTopChats: TopChats = {
  mostActive: {
    active_chats: 0,
    id: 0,
    username: '',
  },
  mostInactive: {
    id: 0,
    inactive_chats: 0,
    username: '',
  },
}

export const top4Chats: TopUser = {
  id: 0,
  percentage: '',
  total_chats: 0,
  username: '',
}

export const emptyCards: Cards = {
  inactiveChats: {
    title: 'Desactivo',
    current: 0,
    previous: 0,
    growthPercentage: 0,
  },
  activeChats: {
    title: 'Activo',
    current: 0,
    previous: 0,
    growthPercentage: 0,
  },
  messages: {
    title: 'Mensajes',
    current: 0,
    previous: 0,
    growthPercentage: 0,
  },
}

export const EmptyChartYearly: SummaryYearly = {
  labels: [0],
  data: [0],
  total: 0,
  title: '',
}

export const EmptyTop4Chats: Top4Chats = [top4Chats, top4Chats, top4Chats, top4Chats]
