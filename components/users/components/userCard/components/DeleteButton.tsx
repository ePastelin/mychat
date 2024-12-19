import { useState } from 'react'
import { IoMdTrash } from 'react-icons/io'

interface Props {
  handleDelete: () => void
}

export const DeleteButton = ({ handleDelete }: Props) => {
  const [confirmVisible, setConfirmVisible] = useState(false)

  const handleConfirm = () => {
    setConfirmVisible(true)
    handleDelete()
  }

  if (confirmVisible)
    return (
      <button onClick={handleConfirm} className='user-card__button-confirm'>
        ¿Seguro?
      </button>
    )

  return (
    <button onClick={() => setConfirmVisible(true)} className='user-card__button-delete'>
      <IoMdTrash className='user-card__button-delete__icon' />
    </button>
  )
}
