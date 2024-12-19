import useSWR from 'swr'
import { Dispatch, SetStateAction, useState } from 'react'
import { fetcher } from '@/hooks/api/fetcher'
import { API } from '@/utils'
import { AdaptedNumber, User } from '../types'
import { convertRoleToString, numbersAdapter } from '../adapters'

interface Return {
  isLoading: boolean
}

type SetState<T> = Dispatch<SetStateAction<T[]>>

export const useFetchUsers = (setUsers: SetState<User>, setNumbers: SetState<AdaptedNumber>): Return => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useSWR(`${API}/auth/users`, fetcher, {
    onSuccess: (users) => {
      setUsers(users.users)
      const adaptedNumbers = numbersAdapter(users.numbers)
      convertRoleToString(setUsers)
      setNumbers(adaptedNumbers)
      setIsLoading(false)
    },
  })

  return { isLoading }
}
