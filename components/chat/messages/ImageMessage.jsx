import { useEffect, useState } from 'react';

const ImageViewer = ({ msg }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [documentSrc, setDocumentSrc] = useState('')

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

    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    const documentBlob = new Blob([byteArray], { type: 'image/jpeg' });
    const url = URL.createObjectURL(blob);
    const urlBlob = URL.createObjectURL(documentBlob)
    setImageSrc(url);
    setDocumentSrc(urlBlob)

    // Cleanup URL object when component unmounts
    return () => URL.revokeObjectURL(url);
  }, [msg.media.data]);

  if (msg.type === 1) return <img src={imageSrc} alt="Media" className="max-w-xs " />
  
  if (msg.type === 5) return <a href={documentSrc} download={msg.filename}>Descargar</a> 
};

export default ImageViewer;

