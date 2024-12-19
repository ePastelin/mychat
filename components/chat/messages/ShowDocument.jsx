import { FaFileWord, FaFilePdf, FaFileExcel, FaFileImage, FaFileAlt } from 'react-icons/fa'

const fileIconMap = {
  pdf: <FaFilePdf className='text-2xl text-red-500' />,
  doc: <FaFileWord className='text-2xl text-blue-400' />,
  docx: <FaFileWord className='text-2xl text-blue-400' />,
  xls: <FaFileExcel className='text-2xl text-green-500' />,
  xlsx: <FaFileExcel className='text-2xl text-green-500' />,
}

export default function ShowDocument({ filename, mimeType, mediaSrc }) {
  const extension = filename.split('.').pop().toLowerCase()

  const fileIcon = fileIconMap[extension] || <FaFileAlt className='text-2xl text-gray-500' />

  return (
    <a href={mediaSrc} download={filename} className='flex h-12 items-center gap-2 bg-slate-400 bg-opacity-10 p-4 rounded-md'>
      {fileIcon}
      <p>{filename}</p>
    </a>
  )
}
