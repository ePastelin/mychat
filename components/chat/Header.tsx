import Image from 'next/image'
import { IoLogOut } from 'react-icons/io5'

export default function Header() {
  return (
    <header className='flex px-6 pt-6 justify-between items-center'>
      <div className='flex justify-center items-center gap-4 '>
        <section className=' border-2 border-border rounded-full w-14 h-14 flex justify-center items-center'>
          <Image src='/images/profile.jpg' alt='logo' width={200} height={200} className=' rounded-full h-12 w-12' />
        </section>
        <p className='text-sm text-text-50'>Eduardo Leal</p>
      </div>
      <IoLogOut className=' text-4xl text-red-500' />
    </header>
  )
}
