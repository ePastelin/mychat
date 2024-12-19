import { Controller } from 'react-hook-form'
import { SelectProps } from './types'

export const Select = ({ name, control, label, error, options }: SelectProps) => {
  return (
    <div className='user-form__select-container'>
      <label htmlFor={name} className='user-form__label'>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            id={name}
            {...field}
            className={`user-form__select ${error ? 'user-form--is-invalid' : ''}`}
            aria-invalid={!!error}
            onChange={(e) => field.onChange(e.target.value)} // Use directly without transformation
          >
            <option value=''>Seleccione una opción</option> {/* Opción predeterminada */}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <span className='user-form__error-message'>{error.message}</span>}
    </div>
  )
}
