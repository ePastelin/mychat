import { useDashboardContext } from '@/components/dashboard/context/Dashboard.context'
import { UserCard } from './components'

export const TopUsers = () => {
  const { top4Chats } = useDashboardContext()
  console.log(top4Chats)

  return (
    <section className='top-users'>
      {top4Chats[0].id !== 0 &&
        top4Chats.map((user, index) => (
          <UserCard
            key={user.id}
            username={user.username}
            number={user.total_chats}
            porcent={user.percentage}
            grow={top4Chats.length - index}
          />
        ))}
    </section>
  )
}
