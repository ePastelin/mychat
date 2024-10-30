import ProfilePhoto from '@/components/common/ProfilePhoto'

export default function Profile({name}: {name: string}) {
  return (
    <div className='profilebg'>
      <ProfilePhoto name={name} />
      <span className='font-semibold ml-4'>{name}</span>
    </div>
  )
}
