import { Message } from '@/types/common/chat'

export default function MessageSection({ messages, messagesEndRef }: Message) {
  return (
    <div className='messageLayout'>
      {messages.map((msg, index) => (
        <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-2`}>
          <div
            className={`messageBubble ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-senderMessage'}`}
            style={{
              wordWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
