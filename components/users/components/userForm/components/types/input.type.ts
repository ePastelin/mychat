import { Control, FieldError } from 'react-hook-form'
import { FormValues } from '../../models'

export interface InputProps {
  name: keyof FormValues
  control: Control<FormValues>
  label: string
  type?: string
  error?: FieldError
}

export interface SelectProps extends InputProps {
  options: option[]
}

type option = {
  value: string | number
  label: string
}
