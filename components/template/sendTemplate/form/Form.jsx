import useSWR from "swr";
import { fetcher } from "@/hooks/api/fetcher";
import { useState } from "react";
import Inputs from "./Inputs"

export default function Form({name, id}) {

const API = process.env.NEXT_PUBLIC_API_ROUTE

    const { data, error } = useSWR(`${API}/templates/${id}`, fetcher);
    if (error) return <div>Error al cargar la plantilla</div>;
    if (!data) return <div>Cargando...</div>;

      console.log('This is my data:', data, id)

  return <div className="md:col-span-3">
   <Inputs templateData={data[0]}/> 
  </div>;
}
