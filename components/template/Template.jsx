'use client'
import { useState } from 'react'

export default function Template() {
  const [plantilla, setPlantilla] = useState('')
  const [idioma, setIdioma] = useState('')
  const [sent, setSent] = useState(false)

  const handleSelect = (e, set) => {
    set(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className='md:col-span-3 px-4'>
      <section className='flex'>
        <select
          name='plantilla'
          className='w-4/6 h-10 rounded-2xl bg-inputBackground p-2 text-sm text-icons mt-9'
          onChange={(e) => handleSelect(e, setPlantilla)}
        >
          <option value=''>Plantilla</option>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </select>
        <select
          name='Idioma'
          className='w-2/6 h-10 rounded-2xl bg-inputBackground p-2 text-sm text-icons mt-9 ml-4'
          onChange={(e) => handleSelect(e, setIdioma)}
        >
          <option value=''>Idioma</option>
          <option value='1'>Español</option>
          <option value='2'>Inglés</option>
          <option value='3'>Portugués</option>
        </select>
      </section>
      <section className='bg-chatBackground h-auto mt-6 py-6 rounded-2xl flex justify-center items-center'>
        <div className=' w-60 bg-blue-500 h-auto py-5 px-3 rounded-3xl shadow-dropshadow-message'>
          <h1 className=' text-sm text-white'>¿Conocen los beneficios de VCM Capital?</h1>
          <p className=' text-gray-200 mt-3'>
            Hola, Rodrigo. Nos comunicamos por este medio para hacerte la mención que ya falta menos para el verano y puedes agendar una
            cita con nosotros para poder reservar el hotel de tus sueños y tener un buen descanso.
          </p>
          <footer className='text-gray-200 mt-3 text-sm'>¿No te interesa? Toca "Detener promociones"</footer>
        </div>
      </section>
      <section className='mt-2'>
        <input type='text' className='w-full h-10 rounded-xl p-2 text-sm text-icons mt-6 border border-icons pl-4' placeholder='Nombre' />
        <input type='text' className='w-full h-10 rounded-xl p-2 text-sm text-icons mt-6 border border-icons pl-4' placeholder='Número' />
      </section>
      {sent ? (
        <button className='w-full h-12 rounded-2xl bg-green-500 text-white text-sm mt-10 shadow-dropshadow-message'>Enviado</button>
      ) : (
        <button
          className='w-full h-12 rounded-2xl bg-sendTemplate text-white text-sm mt-10 shadow-dropshadow-message'
          onClick={() => setSent(true)}
        >
          Enviar
        </button>
      )}
    </div>
  )
}
