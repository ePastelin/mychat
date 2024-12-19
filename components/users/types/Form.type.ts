import { PhoneNumbers, Role, User } from '.'

interface UpdateUserData {
  id?: number
  username?: string
  password?: string
  role?: Role
  phone_numbers?: PhoneNumbers[]
}

interface CreateUserData extends User {}

export type Data = CreateUserData | UpdateUserData

export type UpdateUser = (data: Data, id: number) => void
