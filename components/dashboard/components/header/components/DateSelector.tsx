import { FaChevronDown } from 'react-icons/fa'
import { generateDateOptions } from '../helpers'

interface Props {
  initialDate: Date
}

export const DateSelector = ({ initialDate }: Props) => {
  const dateOptions = generateDateOptions(initialDate)

  return (
    <div className='date-selector__container'>
      <select>
        {dateOptions.map((date, index) => (
          <option value={date} key={index}>
            {date}
          </option>
        ))}
      </select>
      <FaChevronDown className='date-select__icon' />
    </div>
  )
}
