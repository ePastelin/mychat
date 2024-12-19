import { z } from 'zod'

export const schemaCreate = z
  .object({
    username: z.string().min(1, 'El username es obligatorio'),
    password: z.string().min(6, 'La contraseña debe ser mayor a 6 caracteres'),
    confirmPassword: z.string().min(6, 'La confirmación de contraseña ser mayor a 6'),
    role: z.string().min(1, 'Debes escoger un rol').max(3),
    phone_numbers: z.array(z.string()).nonempty('Debes seleccionar al menos un número'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no son iguales',
    path: ['confirmPassword'],
  })

export const schemaUpdate = z
  .object({
    username: z.string().min(1, 'El username es obligatorio').optional(),
    password: z.string().min(6, 'La contraseña debe ser mayor a 6 caracteres').optional(),
    confirmPassword: z.string().min(6, 'La confirmación de contraseña ser mayor a 6').optional(),
    role: z.string().min(1, 'Debes escoger un rol').max(3).optional(),
    phone_numbers: z.array(z.string()).nonempty('Debes seleccionar al menos un número'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no son iguales',
    path: ['confirmPassword'],
  })

export type FormValues = z.infer<typeof schemaCreate | typeof schemaUpdate>
