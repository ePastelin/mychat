import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  number: String | number
  hasBackground?: boolean
}

export const ShowNumbers = ({ children, number, hasBackground = true }: Props) => {
  return (
    <div className={`show-numbers ${!hasBackground && 'show-numbers--no-bg'}`}>
      {children}
      <span>{number}</span>
    </div>
  )
}
