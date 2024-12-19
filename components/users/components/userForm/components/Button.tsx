import { AiOutlineLoading } from 'react-icons/ai'
import { ButtonProps } from './types'

export const Button = ({ isLoading, isSuccess, defaultMessage, successMessage }: ButtonProps) => {
  console.log('This is the loader: ', isLoading)
  return (
    <button
      type='submit'
      disabled={isLoading}
      className={`user-form__button ${isLoading ? ' bg-primary-50' : isSuccess && 'success'} duration-300`}
    >
      {isLoading ? (
        <AiOutlineLoading className='animate-spin h-5 w-5 mr-3 text-white self-center' />
      ) : isSuccess ? (
        <span>&#x2714;Usuario {successMessage}</span>
      ) : (
        <span>{defaultMessage} usuario</span>
      )}
    </button>
  )
}
