import { Dispatch, SetStateAction } from 'react'
import { Role, User } from '../types'

export const convertRoleToString = (setUsers: Dispatch<SetStateAction<User[]>>): void => {
  setUsers((users) =>
    users.map((user) => ({
      ...user,
      role: user.role.toString() as Role,
    })),
  )
}
