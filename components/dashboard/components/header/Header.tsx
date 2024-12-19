import { DateSelector, PrincipalCard } from './components'
import { SecondaryCards } from './components/secondaryCards'
import { TopUsers } from './components/topUsers'
import { Users } from './components/users'

export const Header = () => {
  return (
    <header className='dashboard-header'>
      <div className='h-24'>
        <Users />
        <DateSelector initialDate={new Date('2024-01-10T00:00:00Z')} />
      </div>
      <div>
        <PrincipalCard />
        <SecondaryCards />
      </div>
      <TopUsers />
    </header>
  )
}
