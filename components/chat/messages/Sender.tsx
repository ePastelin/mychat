import { useMessages } from '@/hooks/chat'
import { SenderProps } from '@/types/common/chat'

export default function Sender({ textareaRef, message, setMessage, setMessages, messages }: SenderProps) {
  const { handleSendMessage, adjustTextareaHeight } = useMessages()

  return (
    <textarea
      ref={textareaRef}
      className='sender'
      value={message}
      onChange={(e) => {
        setMessage(e.target.value)
        adjustTextareaHeight(textareaRef)
      }}
      placeholder='Escribe tu mensaje'
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          handleSendMessage(message, setMessages, setMessage, textareaRef, messages)
        }
      }}
      rows={1}
      style={{ overflow: 'hidden' }}
    />
  )
}
