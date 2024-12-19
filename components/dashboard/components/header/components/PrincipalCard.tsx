import { FaAngleDoubleUp } from 'react-icons/fa'
import { ShowNumbers } from '../../common'
import { useDashboardContext } from '@/components/dashboard/context/Dashboard.context'

export const PrincipalCard = () => {
  const { totalChats } = useDashboardContext()
  const { growth, totalChats: total } = totalChats
  return (
    <div className='principal-card'>
      <h2 className='principal-card__title'>Chats</h2>
      <section className='principal-card__increase'>
        <span className='principal-card__increase__number'>{total}</span>
        <ShowNumbers number={`${growth.percentageIncrease}%`}>
          <FaAngleDoubleUp />
        </ShowNumbers>
        <ShowNumbers number={growth.current} />
      </section>
      <span className='principal-card__dates'> Jun 1 1024 - July 4 2025</span>
    </div>
  )
}
