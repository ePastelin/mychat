import { Message } from '@/types/common/chat';
import ShowMessage from './ShowMessage'
import { memo } from 'react';

function MessageSection({ messages, messagesEndRef }: Message) {

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return '✓✓'; // Cambia el color a azul
      default:
        return '';
    }
  };

  return (
    <div className='messageLayout'>
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.sender === 1 ? 'justify-end' : 'justify-start'} mb-2`}>
          <div
            className={`messageBubble ${msg.sender === 1 ? 'bg-blue-500 text-white' : 'bg-senderMessage'}`}
            style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}
          >
            {/* Si existe media, mostrar la imagen */}
            {msg.media ? (
              <ShowMessage msg={msg}/>
            ) : (
              msg.message
            )}

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
  );
}

export default memo(MessageSection) 