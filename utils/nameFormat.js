export default function nameFormat(name) {
    const accents = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
      'ñ': 'n', 'Ñ': 'N'
    };
  
    return name 
      .replace(/ /g, '_') // Reemplaza espacios por guiones bajos
      .toLowerCase() // Convierte a minúsculas
      .split('') // Convierte la cadena en un array de caracteres
      .map(char => accents[char] || char) // Reemplaza los caracteres acentuados
      .join(''); // Une el array de nuevo en una cadena
  }

  export function formatName(name) {
    // Cambiar espacios por guiones bajos y convertir a minúsculas
    let formattedName = name.toLowerCase().replace(/_/g, ' ');
    
    // Convertir la primera letra en mayúscula
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    
    return formattedName;
  }