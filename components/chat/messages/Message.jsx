import { useEffect, useState } from 'react';
import { fetcher } from '@/hooks/api/fetcher'
import {Profile, MessageSection, Input} from './index'
import useSWR, { mutate } from 'swr'
import { useChat, useMessages } from '@/hooks/chat.js';
const API = process.env.NEXT_PUBLIC_API_ROUTE

export default function Message({ idChat, chat}) {

    const [message, setMessage] = useState()

    const { messages, setMessages, textareaRef, handleSendMessage} = useMessages(idChat)
    const { messagesEndRef } = useChat(messages)

    const { data, error } = useSWR(`${API}/chat/${idChat}`, fetcher, {
        onSuccess: (fetchedMessages) => {
            // Actualiza los mensajes cuando los datos se cargan
            setMessages(fetchedMessages)
        }
    })

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading</div>


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
