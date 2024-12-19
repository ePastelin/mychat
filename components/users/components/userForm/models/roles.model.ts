type Role = 'Cobranza' | 'Administrador'

interface Roles {
  value: string
  label: Role
}

export const roles: Roles[] = [
  {
    value: '1',
    label: 'Administrador',
  },
  {
    value: '2',
    label: 'Cobranza',
  },
]
