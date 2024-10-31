'use client'

import Image from 'next/image'
import Form from '@/components/auth/Form'
import AuthenticateRouteLogin from '@/components/auth/AuthenticateRouteLogin'

function Home() {
  return (
    <main className='overflow-hidden h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Image src={'/images/logo.png'} alt='logo' width={300} height={228} className=' ' />
        <Form />
      </div>
    </main>
  )
}

export default AuthenticateRouteLogin(Home, {
  path: '/chats',
})
