import { Input } from '@/types/common'
import { Dispatch, SetStateAction } from 'react'

const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: Dispatch<SetStateAction<any>>,
  setError: Dispatch<SetStateAction<any>>,
) => {
  setValue(e.target.value)
  setError(false)
}

export function InputText({ placeholder, focus, maxLength, value, setValue, type, setError }: Input) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={true}
      autoFocus={focus}
      value={value}
      onChange={(e) => handleInput(e, setValue, setError)}
      maxLength={maxLength}
      className='inputText'
    />
  )
}
