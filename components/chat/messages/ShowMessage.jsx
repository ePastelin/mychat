import { useEffect, useState } from 'react';
import ShowDocument from './ShowDocument'

export default function ShowMessage ({ msg }) {
  const [mediaSrc, setMediaSrc] = useState('');

  useEffect(() => {
    let byteArray;
    if (Array.isArray(msg.media.data)) {
      byteArray = new Uint8Array(msg.media.data);
    } else if (msg.media.data instanceof Buffer) {
      byteArray = new Uint8Array(msg.media.data);
    } else {
      console.error('Tipo de dato no soportado para msg.media.data');
      return;
    }

    const blob = new Blob([byteArray], { type: msg.mimeType });
    const url = URL.createObjectURL(blob);
    setMediaSrc(url);

    // Cleanup URL object when component unmounts
    return () => URL.revokeObjectURL(url);
  }, [msg.media.data]);

  if (msg.type === 1) return <img src={mediaSrc} alt="Media" className="max-w-xs " />
  
  if (msg.type === 5) return <ShowDocument filename={msg.filename} mimeType={msg.mimeType} mediaSrc={mediaSrc}/> 
};
