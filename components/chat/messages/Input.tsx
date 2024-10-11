import { IoMdAttach, IoMdSend } from 'react-icons/io';
import Sender from './Sender';
import { InputProps } from '@/types/common/chat';

async function calculateSHA256(blob: any) {
  const arrayBuffer = await blob.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export default function Input({ message, setMessage, handleSendMessage, adjustTextareaHeight, textareaRef, handleSendMultimedia }: InputProps) {

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0]; // Obtener el archivo seleccionado

    if (file) {
      const blob = new Blob([file], { type: file.type });

      // Calcular el SHA-256 del archivo
      const hash = await calculateSHA256(blob);

      // Crear el payload para el envío
      const fileData = {
        filename: file.name,
        mimeType: file.type,
        sha256: hash,
        size: file.size,
        blob: file // O el contenido que necesites enviar a tu backend
      };

      console.log('Datos del archivo:', fileData);

      handleSendMultimedia(file, file.type)

      // Aquí puedes enviar fileData al backend o realizar la acción correspondiente
    }
  };

  return (
    <div className='flex items-center p-2 relative'>
      <Sender message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} adjustTextareaHeight={adjustTextareaHeight} textareaRef={textareaRef} />
      <label htmlFor="fileInput">
        <IoMdAttach className='attach' />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <div className='circle'>
        <IoMdSend
          className='text-white text-xl'
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
}


