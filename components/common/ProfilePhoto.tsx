interface Props {
  name: string
  isActive?: boolean
}

export default function ProfilePhoto({ name, isActive = true }: Props) {
  const randomColor = getRandomColor(name)

  return (
    <div
      className='rounded-full h-10 w-10 flex items-center justify-center text-white'
      style={{ backgroundColor: isActive ? randomColor : '#bfc2c6' }}
    >
      {getInitials(name)}
    </div>
  )
}

export const ProfilePhotoDashboard = ({ name, isActive = true }: Props) => {
  const randomColor = getRandomColor(name)

  return (
    <div className='rounded-full text-sm h-6 w-6 flex items-center justify-center text-white' style={{ backgroundColor: randomColor }}>
      {getInitials(name)}
    </div>
  )
}
const getRandomColor = (name: String) => {
  const colors = [
    '#f4a261',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#2a9d8f',
    '#e9c46a',
  ]
  return colors[name.length - 2]
}

const getInitials = (name: String) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
  return initials.toUpperCase()
}
