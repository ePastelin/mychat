import { Dispatch, SetStateAction } from 'react'
import { AdaptedNumbers, User } from '../../types'
import { roles } from '../userForm/models'
import { DeleteButton, UpdateButton, RoleBadge } from './components'

export const UserCard = ({
  user,
  numbers,
  setUser,
  setShowForm,
  desactivateUser,
}: {
  user: User
  numbers: AdaptedNumbers
  setUser: Dispatch<SetStateAction<User | undefined>>
  setShowForm: Dispatch<SetStateAction<boolean>>
  desactivateUser: (id: number) => Promise<void>
}) => {
  const role = roles.find((role) => role.value === user.role.toString())
  const phoneNumbers = numbers.filter((number) => user.phone_numbers.includes(number.value))

  const handleUpdate = () => {
    setUser(user)
    setShowForm(true)
  }

  const handleDelete = async () => {
    await desactivateUser(user.id)
  }

  return (
    <div className='user-card'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <h3 className='text-title text-lg'>{user.username}</h3>
          {role && <RoleBadge role={role.label} />}
        </div>

        <div className='flex flex-col mt-3'>
          <p className='text-subtitle-100'>Números:</p>
          <div className='user-card__numbers-list'>
            {phoneNumbers.map((number) => (
              <p>{number.label}</p>
            ))}
          </div>
        </div>
      </div>

      <div className='user-card__buttons'>
        <DeleteButton handleDelete={handleDelete} />
        <UpdateButton handleUpdate={handleUpdate} />
      </div>
    </div>
  )
}
