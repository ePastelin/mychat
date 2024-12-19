'use client'

import { fetcher } from '@/hooks/api/fetcher.ts'
import { useState } from 'react'
import Form from './form/Form'
import Cards from './list/Cards'
import useSWR from 'swr'
import Select from 'react-select'
import Cookies from 'js-cookie'
import { formatName } from '@/utils/nameFormat'
import { Autocomplete, TextField } from '@mui/material'
import { useChatContext } from '@/context/ChatContext'
import { ButtonNav } from '@/components/common/Button'

export default function SendTemplate({ setScreen }) {
  const API = process.env.NEXT_PUBLIC_API_ROUTE
  const role = Cookies.get('role')
  const { templates, setTemplates } = useChatContext()
  const [name, setName] = useState()
  const [id, setId] = useState()
  const [languages, setLanguages] = useState()
  const [categories, setCategories] = useState()
  const [status, setStatus] = useState()
  const [selectedStatus, setSelectedStatus] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchName, setSearchName] = useState('')

  useSWR(`${API}/templates`, fetcher, {
    onSuccess: (data) => {
      setTemplates(data.templates)
      setLanguages(data.languages)
      setCategories(data.categories)
      setStatus(data.status)
    },
  })

  return (
    <>
      <div className='md:col-span-8 justify-center h-screen'>
        <div className='flex pt-10 gap-3 w-full'>
          <Select
            placeholder='Filtrar por estado...'
            options={status}
            onChange={(option) => setSelectedStatus(option ? option.value : null)}
            isClearable
            className='template_select mb-4'
          />

          <Select
            placeholder='Filtrar por idioma...'
            options={languages}
            onChange={(option) => setSelectedLanguage(option ? option.value : null)}
            isClearable
            className='template_select mb-4'
          />

          <Select
            placeholder='Filtrar por categoría...'
            options={categories}
            onChange={(option) => setSelectedCategory(option ? option.value : null)}
            isClearable
            className='template_select mb-4'
          />

          <Autocomplete
            options={templates}
            getOptionLabel={(option) => formatName(option.name)}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '40px', // Ajusta la altura al tamaño deseado
                padding: '0 8px', // Ajusta el padding
                display: 'flex',
                alignItems: 'center', // Centra el contenido
              },
              '& .MuiInputLabel-root': {
                top: '-8px', // Ajusta la posición del label
              },
            }}
            className='!h-10 !text-xs grow'
            renderInput={(params) => <TextField {...params} label='Nombre' />}
            onChange={(e, v) => setSearchName(formatName(v ? v.name : ''))}
            cl
          />
        </div>

        {role == 1 && (
          <ButtonNav setScreen={setScreen} screen={4}>
            Crear Template
          </ButtonNav>
        )}

        {/* Pasar los filtros al componente Cards */}
        <Cards
          templates={templates}
          setId={setId}
          setName={setName}
          selectedStatus={selectedStatus}
          selectedLanguage={selectedLanguage}
          selectedCategory={selectedCategory}
          searchName={searchName}
        />
      </div>
      {id && <Form id={id} name={name} />}
    </>
  )
}
