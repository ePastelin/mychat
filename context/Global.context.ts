import { Number } from '@/components/users/types'
import { useContext, createContext, Dispatch, SetStateAction } from 'react'

interface GlobalContextType {
  numbers: Number[] | null
  setNumbers: Dispatch<SetStateAction<Number[]>>
}

export const GlobalContext = createContext<GlobalContextType>({
  numbers: null,
  setNumbers: () => {},
})

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context.numbers) {
    throw new Error('GlobalContext must be used within a GlobalContextProvider')
  }

  return context
}
