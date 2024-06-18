import Image from 'next/image'
import { IoLogOut, IoPhonePortraitOutline } from 'react-icons/io5'
import Option from './Options'

export default function Side({ setScreen, screen }) {
  return (
    <div className='flex flex-col h-screen justify-between items-center'>
      <section className='flex flex-col gap-4 px-5 py-12 bg-senderMessage items-center'>
        <div className='flex flex-col items-center gap-3'>
          <section className=' border-2 border-border rounded-full w-16 h-16 flex justify-center items-center'>
            <Image src='/images/profile.jpg' alt='logo' width={200} height={200} className=' rounded-full h-14 w-14' />
          </section>
          <p className='text-sm text-text-50'>Eduardo Leal</p>
        </div>
        <div className='h-[1px] w-full bg-black mt-4' />
        <Option setScreen={setScreen} screen={screen} />
        <div className='h-[1px] w-full bg-black mt-4' />
        <p className=' mt-2 mb-4'>Teléfonos</p>
        <section>
          <div className='flex flex-col items-center gap-2'>
            <IoPhonePortraitOutline className='text-4xl text-text-50 z-10' />
            <p>9048</p>
          </div>
        </section>
      </section>
      <IoLogOut className='text-4xl text-red-500 z-10 mb-8' />
    </div>
  )
}
