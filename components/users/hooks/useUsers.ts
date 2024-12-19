import { Dispatch, SetStateAction, useState } from 'react'
import { User, AdaptedNumbers } from '../types'
import { useFetchUsers } from './useFetchUsers'
import { fetcherPost, fetcherPatch } from '@/hooks/api/fetcher'
import { FormValues } from '../components/userForm/models'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [numbers, setNumbers] = useState<AdaptedNumbers>([])

  const { isLoading } = useFetchUsers(setUsers, setNumbers)

  type DesactivateUserData = undefined

  interface DesactivateUserResponse {
    ok: boolean
    message: string
  }

  const desactivateUser = async (id: number): Promise<void> => {
    try {
      await fetcherPatch<DesactivateUserData, DesactivateUserResponse>(`/auth/users/desactivate/${id}`, undefined)

      setUsers((users) => users.filter((user) => user.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser: (values: FormValues, setIsLoading: Dispatch<SetStateAction<boolean>>, id?: number) => Promise<void> = async (
    data,
    setIsLoading,
    id,
  ) => {
    setIsLoading(true)

    try {
      delete data.confirmPassword

      const user = await fetcherPatch<FormValues, User>(`/auth/users/${id}`, data)
      setUsers((prevUsers) => prevUsers.map((existingUser) => (existingUser.id === id ? user : existingUser)))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const createUser: (values: FormValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => Promise<void> = async (data, setIsLoading) => {
    setIsLoading(true)

    try {
      delete data.confirmPassword

      const user = await fetcherPost<FormValues, User>('/auth/create', data)
      setUsers((users) => [...users, user])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { users, numbers, isLoading, desactivateUser, updateUser, createUser }
}
