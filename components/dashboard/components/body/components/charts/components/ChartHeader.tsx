import { ReactNode } from 'react'
import { Filter } from './Filter'

interface Props {
  children: ReactNode
  title: string
  hasFilter?: boolean
}

export const ChartHeader = ({ children, title, hasFilter = true }: Props) => {
  return (
    <header>
      {children}
      <h3>{title}</h3>
      {hasFilter && <Filter title={title} />}
    </header>
  )
}
