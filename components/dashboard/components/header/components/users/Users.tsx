import { useDashboardContext } from '@/components/dashboard/context/Dashboard.context'
import { UserCard } from './components'

export const Users = () => {
  const { users } = useDashboardContext()
  return <section className='dashboard__users-container'>{users && users.map((user) => <UserCard user={user} />)}</section>
}
