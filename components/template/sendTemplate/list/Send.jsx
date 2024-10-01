import { IoMdSend } from 'react-icons/io'

export default function Send({status, setId, id, setName, name}) {

    const selectTemplate = () => {
        setId(id)
        setName(name)
    } 

    if (status === 'Aprobado') return (
        <div className="flex w-full justify-end mt-4">
        <button className=" text-text-50 flex items-center gap-2 hover:translate-x-1 transition-transform duration-300" onClick={selectTemplate}>
            Enviar plantilla
            <div className='bg-approved rounded-lg p-1 '>
                <IoMdSend className='text-2xl  text-white '/>   
            </div>
        </button>
        </div>
        
    ) 
}