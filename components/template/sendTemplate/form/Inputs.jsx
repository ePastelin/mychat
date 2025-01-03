import { sendTemplate } from '@/hooks/api/fetcher'
import { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { mutate } from 'swr'

import Preview from './Preview'
import { useGlobalContext } from '@/context/Global.context'

const API = process.env.NEXT_PUBLIC_API_ROUTE

export default function Inputs({ templateData }) {
  console.log(templateData)
  const [toNumber, setToNumber] = useState('')
  const [socioName, setSocioName] = useState('')
  const [bodyParams, setBodyParams] = useState(templateData.body_examples || [])
  const [headerParams, setHeaderParams] = useState(templateData.header_examples || [])
  const [ourNumber, setOurNumber] = useState(null)

  const [isLoading, setIsLoading] = useState(false) // Estado para carga
  const [isSuccess, setIsSuccess] = useState(false) // Estado para éxito

  const templateName = templateData.name
  const languageCode = templateData.language_code

  useEffect(() => {
    // Cuando cambie templateData, reseteamos los parámetros del body y header
    setBodyParams(templateData.body_examples || [])
    setHeaderParams(templateData.header_examples || [])
    setIsSuccess(false) // Resetea el estado de éxito al cambiar de plantilla
  }, [templateData])

  const isFormValid = () => {
    return (
      toNumber.trim() !== '' && // Verifica que el número esté lleno
      // Si headerParams es un array vacío, pasa por defecto (o si tiene elementos)
      (headerParams.length === 0 || headerParams.some((param) => param.trim() !== '')) &&
      // Si bodyParams es un array vacío, pasa por defecto (o si tiene elementos)
      (bodyParams.length === 0 || bodyParams.some((param) => param.trim() !== '')) &&
      socioName.trim() !== '' && // Verifica que el nombre del socio esté lleno
      ourNumber !== null &&
      ourNumber !== 'Default'
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isFormValid()) {
      alert('Por favor, completa todos los campos necesarios.')
      return
    }

    setIsLoading(true) // Mostrar estado de carga al enviar

    let bodyMessage = templateData.body_variables
    bodyParams.forEach((param, index) => {
      const placeholder = `{{${index + 1}}}`
      bodyMessage = bodyMessage.replace(placeholder, param)
    })

    let headerMessage = templateData.header_variables
    headerParams.forEach((param, index) => {
      const placeholder = `{{${index + 1}}}`
      headerMessage = headerMessage.replace(placeholder, param)
    })

    const message = `${headerMessage} ${bodyMessage} ${templateData.footer}`

    const components = []
    if (headerParams.length && headerParams[0]) {
      components.push({
        type: 'header',
        parameters: [
          {
            type: 'text',
            text: headerParams[0],
          },
        ],
      })
    }
    if (bodyParams.length && bodyParams.some((param) => param)) {
      components.push({
        type: 'body',
        parameters: bodyParams.map((param) => ({
          type: 'text',
          text: param,
        })),
      })
    }

    const payload = {
      whatsapp: {
        messaging_product: 'whatsapp',
        to: toNumber,
        type: 'template',
        template: {
          name: templateName,
          language: {
            code: languageCode,
          },
          components: components,
        },
      },
      database: {
        message: message,
        socioName: socioName,
        ourNumber: ourNumber,
      },
    }

    try {
      console.log(JSON.stringify(payload))
      const res = await sendTemplate(payload)
      console.log(res)

      // Simulación de éxito si la respuesta es correcta
      mutate(`${API}/chat`)
      setIsSuccess(true)
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      setIsSuccess(false)
    } finally {
      setIsLoading(false) // Ocultar carga después de la respuesta
    }
  }

  const { numbers } = useGlobalContext()

  return (
    <div className='md:col-span-3 flex flex-col justify-center animate-slideUp px-6 h-screen'>
      <Preview
        headerText={templateData.header_variables}
        headerParams={headerParams}
        bodyText={templateData.body_variables}
        bodyParams={bodyParams}
        footerText={templateData.footer}
        buttons={templateData.buttons}
      />

      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='sendTemplateForm'>
          <label className='label'>Número de Destinatario</label>
          <input
            type='text'
            value={toNumber}
            onChange={(e) => setToNumber(e.target.value)}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm'
            placeholder='529989394821'
            required
          />
        </div>

        {headerParams.length > 0 && (
          <div className='sendTemplateForm'>
            <label>Parámetro del Header</label>
            <input
              type='text'
              value={headerParams[0] || ''}
              onChange={(e) => setHeaderParams([e.target.value])}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm'
              placeholder={templateData.header_examples[0] || ''}
            />
          </div>
        )}

        {bodyParams?.length > 0 &&
          bodyParams.map((param, index) => (
            <div key={index} className='sendTemplateForm'>
              <label>Parámetro del Body {index + 1}</label>
              <input
                type='text'
                value={param || ''}
                onChange={(e) => {
                  const newBodyParams = [...bodyParams]
                  newBodyParams[index] = e.target.value
                  setBodyParams(newBodyParams)
                }}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm'
                placeholder={templateData.body_examples?.[index] || ''}
              />
            </div>
          ))}

        <div className='sendTemplateForm'>
          <label>Nombre del Socio</label>
          <input
            type='text'
            value={socioName}
            onChange={(e) => setSocioName(e.target.value)}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm'
            placeholder='Glover'
            required
          />
        </div>

        <div className='sendTemplateForm'>
          <label>Número telefónico</label>
          <select
            name='phone_number'
            id='phone_number'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm mb-6'
            onChange={(e) => {
              console.log(e.target.value)
              setOurNumber(e.target.value)
              console.log(e.target.value)
            }}
          >
            <option value={'Default'} key={'Default'}>
              Selecciona un número
            </option>
            {numbers.map((number) => (
              <option value={number.idnumber} key={number.idnumber}>
                {number.number}
              </option>
            ))}
          </select>
        </div>

        <button
          type='submit'
          disabled={isLoading || !isFormValid()}
          className={`ml-4 w-4/5 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white transition ease-in-out delay-150 self-center ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : isSuccess
                ? 'bg-green-500 hover:bg-green-600'
                : !isFormValid()
                  ? ' bg-blue-500 opacity-50 cursor-not-allowed'
                  : ' bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
          } duration-300`}
        >
          {isLoading ? (
            <AiOutlineLoading className='animate-spin h-5 w-5 mr-3 text-white' viewBox='0 0 24 24' />
          ) : isSuccess ? (
            <span>&#x2714; Enviado</span>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </form>
    </div>
  )
}
