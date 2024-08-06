'use client'

import { InputText } from '@/components/common/Input'
import { useState } from 'react'
import Button from '@/components/common/Button'
import { login } from '@/hooks/api/fetcher'

export default function Form() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  return (
    <form className='flex flex-col items-center' onSubmit={(e) => login(username, password, e, setError)}>
      <InputText
        placeholder='Usuario'
        focus={true}
        maxLength={20}
        value={username}
        setValue={setUsername}
        type='text'
        setError={setError}
      />
      <InputText
        placeholder='contraseña'
        focus={false}
        maxLength={20}
        value={password}
        setValue={setPassword}
        type='password'
        setError={setError}
      />
      {error && <p className='error'>Contraseña o usuario inválido</p>}

      <Button>Enviar</Button>
    </form>
  )
}
