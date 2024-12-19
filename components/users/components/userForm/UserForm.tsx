import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormValues, roles } from './models'
import { Button, Input, Select } from './components'
import { User } from '@/types/user/user'
import { Schema } from 'zod'
import { AdaptedNumbers } from '../../types'
import { Dispatch, SetStateAction, useState } from 'react'
import MultiSelect from './components/MultiSelect'

interface Props {
  defaultValues?: User
  onSubmit: (values: FormValues, setIsLoading: Dispatch<SetStateAction<boolean>>, id?: number) => Promise<void>
  schema: Schema
  phoneNumbers: AdaptedNumbers
}

export const UserForm = ({ defaultValues, onSubmit, schema, phoneNumbers }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: defaultValues
      ? { ...defaultValues, password: 'default', confirmPassword: 'default' }
      : {
          username: '',
          password: '',
          confirmPassword: '',
          role: '',
          phone_numbers: [],
        },
  })

  const handleFormSubmit = async (values: FormValues) => {
    if (!defaultValues) await onSubmit(values, setIsLoading)
    else await onSubmit(values, setIsLoading, defaultValues.id)

    if (!defaultValues) {
      reset({
        username: '',
        password: '',
        confirmPassword: '',
        role: '',
        phone_numbers: [],
      })
    } else {
      reset(values)
    }
  }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='user-form'>
      <Input name='username' control={control} label='Nombre de usuario' error={errors.username} />
      <Input name='password' control={control} label='Contraseña' type='password' error={errors.password} />
      <Input name='confirmPassword' control={control} label='Repite la contraseña' type='password' error={errors.confirmPassword} />
      <Select name='role' control={control} label='Elige tu rol' error={errors.role} options={roles} />
      <MultiSelect
        name='phone_numbers'
        control={control}
        label='Escoge número telefónico'
        error={errors.phone_numbers}
        options={phoneNumbers}
      />
      <Button
        defaultMessage={defaultValues ? 'Actualizar' : 'Crear'}
        successMessage={defaultValues ? 'actualizado' : 'creado'}
        isLoading={isLoading}
        isSuccess={false}
      />
    </form>
  )
}
