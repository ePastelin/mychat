import { Controller } from 'react-hook-form'
import { InputProps } from './types'

export const Input = ({ name, control, label, type, error }: InputProps) => {
  return (
    <div className='user-form__input-container'>
      <label htmlFor={name} className='user-form__label'>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <input
              id={name}
              type={type}
              {...field}
              className={`user-form__input ${error ? 'user-form--is-invalid' : ''}`}
              aria-invalid={!!error}
            />
          )
        }}
      />
      {error && <span className='user-form__error-message'>{error.message}</span>}
    </div>
  )
}
