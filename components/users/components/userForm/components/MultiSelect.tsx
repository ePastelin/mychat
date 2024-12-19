import { AdaptedNumber } from '@/components/users/types'
import { Controller } from 'react-hook-form'

interface MultiSelectProps {
  name: string
  control: any
  label: string
  error: any
  options: AdaptedNumber[]
}

const MultiSelect = ({ name, control, label, error, options }: MultiSelectProps) => {
  const handleSelect = (selectedOptions: string[], value: string) => {
    if (selectedOptions.includes(value)) {
      return selectedOptions.filter((option) => option !== value)
    }
    return [...selectedOptions, value]
  }

  return (
    <div className='user-form__multi-select__container'>
      <label className='user-form__label'>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div className='user-form__multi-select'>
              {options.map((option) => (
                <button
                  key={option.value}
                  type='button'
                  className={`user-form__multi-select__button ${field.value.includes(option.value) ? 'user-form__multi-select__button--selected' : ''}`}
                  onClick={() => field.onChange(handleSelect(field.value, option.value))}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {error && <span className='user-form__error-message'>{error.message}</span>}
          </>
        )}
      />
    </div>
  )
}

export default MultiSelect
