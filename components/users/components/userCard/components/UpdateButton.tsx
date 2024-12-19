import { IoMdSend } from 'react-icons/io'

interface Props {
  handleUpdate: () => void
}

export const UpdateButton = ({ handleUpdate }: Props) => {
  return (
    <button className='user-card__button-update' onClick={handleUpdate}>
      Actualizar
      <div className='user-card__button-update__icon-container'>
        <IoMdSend className='user-card__button-update__icon' />
      </div>
    </button>
  )
}
