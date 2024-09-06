import { Profile, MessageSection, Input } from './index';
import useSWR from 'swr';
import { useChat, useMessages } from '@/hooks/chat.js';
import { fetcher } from '@/hooks/api/fetcher';

const API = process.env.NEXT_PUBLIC_API_ROUTE;

export default function Message({ idChat, chat }) {
  const { messages, setMessages, message, setMessage, handleSendMessage, adjustTextareaHeight, textareaRef} = useMessages(idChat);
  const { messagesEndRef } = useChat(messages);

  const { data, error } = useSWR(`${API}/chat/${idChat}`, fetcher, {
    onSuccess: (fetchedMessages) => {
      setMessages(fetchedMessages);
    }
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { socio_name } = chat;

  return (
    <div className="h-screen md:col-span-8 w-full flex flex-col">
      <Profile name={socio_name} />
      <MessageSection messages={messages} messagesEndRef={messagesEndRef} />
      <Input idChat={idChat} message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} adjustTextareaHeight={adjustTextareaHeight} textareaRef={textareaRef}/>
    </div>
  );
}

