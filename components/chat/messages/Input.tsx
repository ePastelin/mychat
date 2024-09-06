import { IoMdAttach, IoMdSend } from 'react-icons/io'
import Sender from './Sender'
import { InputProps } from '@/types/common/chat'

export default function Input({ message, setMessage, handleSendMessage, adjustTextareaHeight, textareaRef }: InputProps) {

  console.log(`${message}, Entró a Input`)
  return (
    <div className='flex items-center p-2 relative'>
      <Sender message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} adjustTextareaHeight={adjustTextareaHeight} textareaRef={textareaRef} />
      <IoMdAttach className='attach' />
      <div className='circle'>
        <IoMdSend
          className='text-white text-xl'
          onClick={handleSendMessage}
        />
      </div>
    </div>
  )
}
