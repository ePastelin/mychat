'use client'

import { fetcher } from "@/hooks/api/fetcher.ts"
import { useState } from "react"
import Form from "./form/Form"
import Cards from './list/Cards'
import useSWR from "swr"

export default function SendTemplate({setScreen}) {

    const API = process.env.NEXT_PUBLIC_API_ROUTE
    const [templates, setTemplates] = useState([])
    const [name, setName] = useState()
    const [id, setId] = useState()
    
    useSWR(`${API}/templates`, fetcher, {
        onSuccess: (data) => setTemplates(data)
      })


      console.log(templates)
    return(
        <>
        <div className="md:col-span-8 justify-center mt-12">
            <button onClick={() => setScreen(4)} className=" bg-blue-500 text-white rounded-md p-1 mb-4 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Crear Plantilla</button>
            <Cards templates={templates} setId={setId} setName={setName}/>
        </div>
        { id && <Form id={id} name={name}/>}
        </>
        
        
    )
    
}