import { Message } from '@/types/common/chat'



export default function MessageSection({ messages, messagesEndRef }: Message) {

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return '✓'; // Puedes reemplazarlo por un ícono o una imagen
      case 'delivered':
        return '✓✓'; // Puedes reemplazarlo por un ícono o una imagen
      case 'read':
        return '✓✓'; // Cambia el color a azul
      default:
        return '';
    }
};

return (
  <div className='messageLayout'>
    {messages.map((msg, index) => (
      <div key={index} className={`flex ${msg.sender === 1 ? 'justify-end' : 'justify-start'} mb-2`}>
        <div className={`messageBubble ${msg.sender === 1 ? 'bg-blue-500 text-white' : 'bg-senderMessage'}`} 
          style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
          {msg.message}
          <div className="bottom-0 right-0 text-xs text-gray-300 mr-2 flex items-center space-x-1 self-end">
            <span>{new Date(msg.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            {msg.sender === 1 && (
              <div className='flex items-center'>
              <span className={`${msg.status === 'read' ? 'text-cyan-200' : 'text-senderMessage'}`}>
              {getStatusIcon(msg.status)}
            </span>
              </div>
            
          )}
          </div>
        </div>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
)
}
