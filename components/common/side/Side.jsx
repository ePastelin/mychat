import { IoLogOut } from 'react-icons/io5'
import Option from './Options'
import useAuth from '@/hooks/auth/useAuth'
import Cookies from 'js-cookie'
import ProfilePhoto from '../ProfilePhoto'

export default function Side({ setScreen, screen, unreadMessages }) {
  const { handleLogout } = useAuth()
  const name = Cookies.get('name')

  return (
    <div className='flex flex-col h-screen justify-between items-center'>
      <section className='flex flex-col gap-4 px-5 py-12 bg-senderMessage items-center'>
        <div className='flex flex-col items-center gap-3'>
          <ProfilePhoto name={name} />
          <p className='text-sm text-text-50'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        </div>
        <div className='h-[1px] w-full bg-black mt-4' />
        <Option setScreen={setScreen} screen={screen} unreadMessages={unreadMessages} />
        <div className='h-[1px] w-full bg-black mt-4' />
      </section>
      <IoLogOut className='text-4xl text-red-500 z-10 mb-8 hover:cursor-pointer' onClick={handleLogout} />
    </div>
  )
}
