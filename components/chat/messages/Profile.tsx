import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className='profilebg'>
      <Link href='/chats' className=' lg:hidden'>
        <IoIosArrowBack className='icon' />
      </Link>
      <Image src='/images/profile.jpg' width={20} height={20} alt='Profile' className='profilePhoto' />
      <span className='font-semibold'>La roca mala</span>
    </div>
  )
}
