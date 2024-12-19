import { ProfilePhotoDashboard } from '@/components/common/ProfilePhoto'

interface Props {
  username: string
  number: number
  porcent: string
  grow: number
}

export const UserCard = ({ username, number, porcent, grow }: Props) => {
  return (
    <div className={'top-users__card'} style={{ flexGrow: grow }}>
      <ProfilePhotoDashboard name={username} />
      <p>{number}</p>
      <span className='text-xs ml-auto text-'>{porcent}%</span>
    </div>
  )
}
