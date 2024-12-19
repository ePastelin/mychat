import { ShowNumbers } from '@/components/dashboard/components/common'
import { FaAngleDoubleUp } from 'react-icons/fa'

interface Props {
  title: string
  number: number
  porcent: number
}

export const ShortInfoCard = ({ title, number, porcent }: Props) => {
  return (
    <div className='short-info-card'>
      <h2>{title}</h2>
      <ShowNumbers number={number} />
      <ShowNumbers number={`${porcent}%`} hasBackground={false}>
        <FaAngleDoubleUp />
      </ShowNumbers>
    </div>
  )
}
