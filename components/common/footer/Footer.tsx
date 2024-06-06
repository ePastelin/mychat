import { IoPhonePortraitOutline } from 'react-icons/io5'
import { TbMessage2Minus } from 'react-icons/tb'
import { CgTemplate } from 'react-icons/cg'
import Option from './Option'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 w-full bg-white h-20 shadow-inner-top'>
      <div className='container h-full grid grid-cols-3'>
        <Option text='8930' selected={true}>
          <IoPhonePortraitOutline className='text-4xl text-text-100 z-10' />
        </Option>
        <Option text='Mensajes' selected={false}>
          <TbMessage2Minus className='text-4xl text-text-50 z-10' />
        </Option>
        <Option text='plantillas' selected={false}>
          <CgTemplate className='text-4xl text-text-50 z-10' />
        </Option>
      </div>
    </footer>
  )
}
