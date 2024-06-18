'use client'

import { IoPhonePortraitOutline } from 'react-icons/io5'
import { TbMessage2Minus } from 'react-icons/tb'
import { CgTemplate } from 'react-icons/cg'
import Option from '../footer/Option'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Options({ setScreen, screen }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showPhoneSelector, setShowPhoneSelector] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  const handleOptionClick = (option: any) => {
    setSelectedOption(option.id)
    if (option.number) {
      setScreen(option.number)
    } else if (option.id === 'phone-selector') {
      setShowPhoneSelector(!showPhoneSelector)
    }
  }

  const options = [
    { id: 'home', text: 'Mensajes', number: 1, icon: <TbMessage2Minus className='text-3xl text-text-100 z-10' /> },
    { id: 'template', text: 'Plantillas', number: 2, icon: <CgTemplate className='text-3xl text-text-50 z-10' /> },
  ]

  return (
    <footer className='flex flex-col items-center'>
      <p className='mb-6'>Opciones</p>
      <div className='h-auto flex flex-col gap-8'>
        {options.map((option) => (
          <Option key={option.id} text={option.text} selected={screen === option.number} onClick={() => handleOptionClick(option)}>
            {option.icon}
          </Option>
        ))}
      </div>
    </footer>
  )
}

