type Role = 'Cobranza' | 'Administrador'

export const RoleBadge = ({ role }: { role: Role }) => {
  const roleColor = {
    Cobranza: 'bg-pending', // Naranja suave
    Administrador: 'bg-approved', // Verde esmeralda
  }

  const color = roleColor[role]

  return <p className={`rounded-md self-center px-4 py-1 ${color} text-white`}>{role}</p>
}
