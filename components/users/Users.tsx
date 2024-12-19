import { useState } from 'react'
import { UserCard } from './components/userCard/UserCard'
import { UserForm } from './components/userForm'
import { useUsers } from './hooks'
import { schemaCreate, schemaUpdate } from './components/userForm/models'
import CircleLoader from '../common/Loader'
import { User } from './types'

export default function Users() {
  const { users, numbers, isLoading, desactivateUser, updateUser, createUser } = useUsers()
  const [showForm, setShowForm] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  if (isLoading) return <CircleLoader />

  const handleCreateUserClick = () => {
    setShowForm(false)
    setUser(undefined)
    setShowForm(true)
  }

  return (
    <div className='users-container'>
      <div className='user-left'>
        <button onClick={handleCreateUserClick} className='button-nav w-40'>
          Crear usuario
        </button>
        <div className='user-cards scrollbar-hidden'>
          {users.map((user) => (
            <UserCard
              user={user}
              key={user.id}
              numbers={numbers}
              setUser={setUser}
              setShowForm={setShowForm}
              desactivateUser={desactivateUser}
            />
          ))}
        </div>
      </div>

      {showForm ? (
        <UserForm
          key={user ? `edit-${user.id}` : 'create'}
          defaultValues={user ? user : undefined}
          onSubmit={user ? updateUser : createUser}
          schema={user ? schemaUpdate : schemaCreate}
          phoneNumbers={numbers}
        />
      ) : null}
    </div>
  )
}
