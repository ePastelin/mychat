import { Dispatch, SetStateAction } from 'react'

export interface Input {
  placeholder: string
  focus: boolean
  maxLength: number
  value: string
  setValue: Dispatch<SetStateAction<any>>
  type: string
}
