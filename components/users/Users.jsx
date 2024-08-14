import { createNumber, createUser, fetcher, fetcherDelete, updateUser } from '@/hooks/api/fetcher'
import { MdDeleteOutline } from 'react-icons/md'
import { MdOutlineEdit } from 'react-icons/md'
import useSWR from 'swr'
import Form, { FormCreate, FormNumber } from './Form'
import FormContent, { FormContentCreate, FormContentNumber } from './FormContent'
import { useState } from 'react'

const API = process.env.NEXT_PUBLIC_API_ROUTE

const deleteUser = async (id, users, mutate) => {
  // Mutación optimista: actualiza los datos locales antes de confirmar la eliminación
  mutate(
    users.filter((user) => user.id !== id),
    false,
  )

  try {
    const res = await fetcherDelete(`${API}/auth/users/${id}`)
    console.log('Delete response:', res)

    if (res.status !== 200) {
      // Si la eliminación no es exitosa, volver a los datos originales
      mutate(users, false)
    } else {
      // Si la eliminación es exitosa, revalidar los datos desde el servidor
      mutate()
    }
  } catch (error) {
    console.error('Error deleting user:', error)
    // Si ocurre un error, volver a los datos originales
    mutate(users, false)
  }
}

export default function Users() {
  const [open, setOpen] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)
  const [openNumber, setOpenNumber] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const { data, error, mutate } = useSWR(`${API}/auth/users`, fetcher)
  const [edit, setEdit] = useState(null)
  const [editNumber, setEditNumber] = useState(null)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading</div>

  console.log('Fetched data:', data)
  const numbers = data.numbers
  console.log('Numbers:', numbers)

  const handleEditClick = (user) => {
    setSelectedUser(user)
    setOpen(true)
  }

  return (
    <div className='md:col-span-3 w-full px-4 bg-white'>
      <section className='mt-8 flex flex-col gap-6 h-[560px] overflow-y-auto no-scrollbar mx-3'>
        {data.users &&
          data.users.map((user) => (
            <div key={user.id} className='w-full flex items-center gap-4 justify-between'>
              <b className='text-sm'>{user.username}</b>{' '}
              <div className='flex gap-3'>
                <MdDeleteOutline className='text-red-500 text-4xl cursor-pointer' onClick={() => deleteUser(user.id, data.users, mutate)} />
                <MdOutlineEdit className='text-blue-500 text-4xl cursor-pointer' onClick={() => handleEditClick(user)} />
              </div>
            </div>
          ))}
      </section>
      <Form open={open} setOpen={setOpen} setEdit={setEdit} edit={edit} id={selectedUser && selectedUser.id} updateById={updateUser}>
        {selectedUser && <FormContent user={selectedUser} numbers={data.numbers} setEdit={setEdit} />}
      </Form>
      <button onClick={() => setOpenCreate(true)} className='buttonLogin w-full'>
        Agregar usuario
      </button>
      <FormCreate open={openCreate} setOpen={setOpenCreate} edit={edit} setEdit={setEdit} create={createUser}>
        <FormContentCreate setEdit={setEdit} numbers={numbers} />
      </FormCreate>
      <button onClick={() => setOpenNumber(true)} className=' mt-6 w-full text-orange-400'>
        Agregar número
      </button>
      <FormNumber open={openNumber} setOpen={setOpenNumber} setNumber={setEditNumber} number={editNumber} createNumber={createNumber}>
        <FormContentNumber numbers={editNumber} setNumber={setEditNumber} />
      </FormNumber>
    </div>
  )
}
