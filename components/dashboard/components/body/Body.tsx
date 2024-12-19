import { BarChart } from './components/charts'
import { PiChatsCircle } from 'react-icons/pi'
import { FiMessageSquare } from 'react-icons/fi'
import { useDashboardContext } from '../../context/Dashboard.context'

export const Body = () => {
  const { chatSummary, messageSummary, chatsYearly, messagesYearly } = useDashboardContext()

  !chatSummary && <div>...</div>

  return (
    <div className='dashboard-body'>
      <BarChart {...chatSummary}>
        <PiChatsCircle className='bar-container__icon' />
      </BarChart>
      <BarChart {...messageSummary}>
        <FiMessageSquare className='bar-container__icon' />
      </BarChart>
      <BarChart {...chatsYearly} hasFilter={false}>
        <PiChatsCircle className='bar-container__icon' />
      </BarChart>
      <BarChart {...messagesYearly} hasFilter={false}>
        <FiMessageSquare className='bar-container__icon' />
      </BarChart>
    </div>
  )
}
