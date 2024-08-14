import { fetcher } from '@/hooks/api/fetcher'
import {Profile, MessageSection, Input} from './index'
import useSWR, { mutate } from 'swr'
const API = process.env.NEXT_PUBLIC_API_ROUTE

export default function Message({message, messages, setMessage, textareaRef, setMessages, messagesEndRef, idChat, chat}) {

    const { data, error } = useSWR(`${API}/chat/${idChat}`, fetcher, {
        onSuccess: (fetchedMessages) => {
            // Actualiza los mensajes cuando los datos se cargan
            setMessages(fetchedMessages)
        }
    })

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading</div>

    // Al enviar un mensaje, lo agregas a messages
    const handleSendMessage = (newMessage) => {
        // Agrega el nuevo mensaje localmente
        setMessages([...messages, newMessage])

        // Aquí iría el código para enviar el mensaje al servidor...
        // Luego, vuelve a mutar el SWR para sincronizar con el backend
        mutate(`${API}/chat/${idChat}`, async () => {
            // Obtén los mensajes actualizados del servidor
            const updatedMessages = await fetcher(`${API}/chat/${idChat}`)
            return updatedMessages
        })
    }

    const {socio_name} = chat

    return (
        <div className='h-screen md:col-span-8 w-full flex flex-col'>
            <Profile name={socio_name} />
            <MessageSection messages={messages} messagesEndRef={messagesEndRef} />
            <Input 
                message={message} 
                setMessage={setMessage} 
                textareaRef={textareaRef} 
                messages={messages} 
                setMessages={setMessages} 
                idChat={idChat}
                onSendMessage={handleSendMessage} // Usa esta función cuando envíes un mensaje
            />
        </div>
    )
}
