import { useDashboardContext } from '@/components/dashboard/context/Dashboard.context'
import { LargeInfoCard, ShortInfoCard } from './components'

export const SecondaryCards = () => {
  const { topChats, cards } = useDashboardContext()
  const { mostActive, mostInactive } = topChats
  const { activeChats, inactiveChats, messages } = cards

  return (
    <div className='secondary-cards'>
      <LargeInfoCard title='Top chats activos' number={mostActive.active_chats} username={mostActive.username} theme={'ligth'} />
      <LargeInfoCard title='Top chats desactivados' number={mostInactive.inactive_chats} username={mostInactive.username} theme={'dark'} />

      <ShortInfoCard title={inactiveChats.title} number={inactiveChats.current} porcent={inactiveChats.growthPercentage} />
      <ShortInfoCard title={activeChats.title} number={activeChats.current} porcent={activeChats.growthPercentage} />
      <ShortInfoCard title={messages.title} number={messages.current} porcent={messages.growthPercentage} />
    </div>
  )
}
