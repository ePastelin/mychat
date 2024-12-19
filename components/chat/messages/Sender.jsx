export default function Sender({ message, setMessage, handleSendMessage, adjustTextareaHeight, textareaRef, isActive }) {
  return (
    <textarea
      ref={textareaRef}
      className='sender'
      value={message}
      onChange={(e) => {
        setMessage(e.target.value)
        adjustTextareaHeight(textareaRef)
      }}
      placeholder={`${isActive ? 'Escribe tu mensaje' : 'El usuario desactivó el chat'}`}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          handleSendMessage()
        }
      }}
      rows={1}
      style={{ overflow: 'hidden' }}
      disabled={!isActive && true}
    />
  )
}
