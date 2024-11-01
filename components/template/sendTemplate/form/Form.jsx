import useSWR from "swr";
import { fetcher } from "@/hooks/api/fetcher";
import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import CircleLoader from "@/components/common/Loader";

export default function Form({ name, id }) {
  const API = process.env.NEXT_PUBLIC_API_ROUTE;

  // Estado local para manejar los datos de la plantilla actual
  const [templateData, setTemplateData] = useState(null);

  // Usamos SWR para hacer fetch a los datos
  const { data, error, isValidating } = useSWR(
    `${API}/templates/${id}`,
    fetcher,
    {
      revalidateOnFocus: false, // Opcional, para evitar refetch en cada enfoque
    }
  );

  // Este useEffect se ejecuta cuando los datos cambian
  useEffect(() => {
    if (data && data.length > 0) {
      // Actualiza el estado solo cuando hay datos válidos
      setTemplateData(data[0]);
    } else {
      // Si no hay datos, resetea el estado
      setTemplateData(null);
    }
  }, [data]);

  if (error) return <div>Error al cargar la plantilla</div>;
  if (isValidating) return <CircleLoader withSize="w-[25vw]"/>;

  return (
    <div className="md:col-span-3">
      {/* Solo renderiza Inputs si hay datos válidos */}
      {templateData ? (
        <Inputs templateData={templateData} />
      ) : (
        <div>No hay datos de plantilla disponibles.</div>
      )}
    </div>
  );
}
