export default function Sender({ message, setMessage, handleSendMessage, adjustTextareaHeight, textareaRef }) {
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
          handleSendMessage()
        }
      }}
      rows={1}
      style={{ overflow: 'hidden' }}
    />
  )
}

