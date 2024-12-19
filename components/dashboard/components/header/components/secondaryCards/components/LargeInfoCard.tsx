import { ProfilePhotoDashboard } from '@/components/common/ProfilePhoto'
import { MdNavigateNext } from 'react-icons/md'

interface Props {
  title: string
  number: string | number
  username: string
  theme: 'dark' | 'ligth'
}

export const LargeInfoCard = ({ title, number, username, theme }: Props) => {
  return (
    <div className={`large-info-card ${theme === 'ligth' ? 'large-info-card--ligth' : 'large-info-card--dark'}`}>
      <h2>{title}</h2>
      <span>{number}</span>
      <section className='large-info-card__footer'>
        <ProfilePhotoDashboard name={username} />
        <span>{username}</span>
        <div>
          <MdNavigateNext />
        </div>
      </section>
    </div>
  )
}
