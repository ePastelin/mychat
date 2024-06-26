import { IoMdAttach, IoMdSend } from 'react-icons/io'
import Sender from './Sender'
import { InputProps } from '@/types/common/chat'
import { useMessages } from '@/hooks/chat'

export default function Input({ textareaRef, message, setMessage, messages, setMessages }: InputProps) {
  const { handleSendMessage } = useMessages()

  return (
    <div className='flex items-center p-2 relative'>
      <Sender textareaRef={textareaRef} message={message} setMessage={setMessage} setMessages={setMessages} messages={messages} />
      <IoMdAttach className='attach' />
      <div className='circle'>
        <IoMdSend
          className='text-white text-xl'
          onClick={() => handleSendMessage(message, setMessages, setMessage, textareaRef, messages)}
        />
      </div>
      {/* <button className='bg-green-500 text-white p-2 rounded-lg' onClick={handleReceiveMessage}>
          click
        </button> */}
    </div>
  )
}
