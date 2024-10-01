export default function StatusBadge ({ status }) {
    const statusColors = {
      Pendiente: 'bg-pending',  // Naranja suave
      Aprobado: 'bg-approved',   // Verde esmeralda
      Rechazado: 'bg-refused',  // Rojo coral
      Deshabilitado: 'bg-archived' // Púrpura grisáceo
    };
  
    // Obtener el color según el status_name
    const color = statusColors[status]
  
    return (
      <p className={`rounded-md self-center px-4 py-1 ${color} text-white`}>
        {status}
      </p>
    );
  };