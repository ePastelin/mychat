'use client'

import { InputText } from '@/components/common/Input'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <main className='overflow-hidden h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' ' />
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
          <InputText placeholder='Usuario' focus={true} maxLength={20} value={username} setValue={setUsername} type='text' />
          <InputText placeholder='contraseña' focus={false} maxLength={20} value={password} setValue={setPassword} type='password' />
          <Button>Enviar</Button>
        </form>
      </div>
    </main>
  )
}
