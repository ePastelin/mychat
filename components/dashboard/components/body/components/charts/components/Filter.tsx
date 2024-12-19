import { FormEvent, useState } from 'react'
import { FilterOption } from '../types'
import { useFilter } from '../hooks/useFilter'

interface Props {
  title: string
}

export const Filter = ({ title }: Props) => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => 2024 + i)

  const { messageFilter, chatFilter } = useFilter()
  const [filterOption, setFilterOption] = useState(currentYear.toString())

  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    setFilterOption(e.currentTarget.value as FilterOption)
    if (title === 'Chats') {
      chatFilter(filterOption)
      return
    }
    if (title === 'Mensajes') {
      messageFilter(filterOption)
      return
    }
  }

  return (
    <select name='select-filter' id='filter' className='chart__filter-select' onChange={(e) => handleSelect(e)}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  )
}
