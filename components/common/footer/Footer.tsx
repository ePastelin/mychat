'use client'

import { IoPhonePortraitOutline } from 'react-icons/io5'
import { TbMessage2Minus } from 'react-icons/tb'
import { CgTemplate } from 'react-icons/cg'
import Option from './Option'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import PhoneSelector from './PhoneSelector'

export default function Footer() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showPhoneSelector, setShowPhoneSelector] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)

  const handleOptionClick = (option: any) => {
    setSelectedOption(option.id)
    if (option.redirect) {
      router.push(option.redirect)
    } else if (option.id === 'phone-selector') {
      setShowPhoneSelector(!showPhoneSelector)
    }
  }

  const options = [
    { id: 'home', text: 'Mensajes', redirect: '/chats', icon: <TbMessage2Minus className='text-4xl text-text-100 z-10' /> },
    { id: 'phone-selector', text: 'Number', icon: <IoPhonePortraitOutline className='text-4xl text-text-50 z-10' /> },
    { id: 'template', text: 'Plantillas', redirect: '/templates', icon: <CgTemplate className='text-4xl text-text-50 z-10' /> },
  ]

  return (
    <footer className='fixed bottom-0 w-full bg-white h-20 shadow-inner-top'>
      <div className='container h-full grid grid-cols-3'>
        {options.map((option) => (
          <Option key={option.id} text={option.text} selected={pathname === option.redirect} onClick={() => handleOptionClick(option)}>
            {option.icon}
          </Option>
        ))}
        {showPhoneSelector && (
          <div className='phone-selector'>
            <PhoneSelector onSelect={(phone) => console.log(phone)} setShow={setShowPhoneSelector} />
          </div>
        )}
      </div>
    </footer>
  )
}
