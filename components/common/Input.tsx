import { Input } from '@/types/common'
import { Dispatch, SetStateAction } from 'react'

const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<any>>) => {
  setValue(e.target.value)
}

export function InputText({ placeholder, focus, maxLength, value, setValue, type }: Input) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={true}
      autoFocus={focus}
      value={value}
      onChange={(e) => handleInput(e, setValue)}
      maxLength={maxLength}
      className='login'
    />
  )
}
