import { ReactNode, useState } from 'react'
import { GlobalContext } from './Global.context'
import { Number } from '@/components/users/types'

const EmpyGlobalState: Number[] = []

interface GlobalProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [numbers, setNumbers] = useState<Number[]>(EmpyGlobalState)
  return <GlobalContext.Provider value={{ numbers, setNumbers }}>{children}</GlobalContext.Provider>
}
