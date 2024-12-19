import { ProfilePhotoDashboard } from '@/components/common/ProfilePhoto'
import { User } from '@/components/dashboard/types'

interface Props {
  user: User
}

export const UserCard = ({ user }: Props) => {
  return (
    <button className='dashboard__user-card'>
      <ProfilePhotoDashboard name={user.username} />
      <p className='dashboard__user-card__username'>{user.username}</p>
    </button>
  )
}
