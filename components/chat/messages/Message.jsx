import { Profile, MessageSection, Input } from "./index";
import useSWR from "swr";
import { useMessages } from "@/hooks/chat.js";
import { fetcher } from "@/hooks/api/fetcher";
import CircleLoader from "@/components/common/Loader";

const API = process.env.NEXT_PUBLIC_API_ROUTE;

export default function Message({ idChat, chat }) {
  const {
    message,
    setMessage,
    handleSendMessage,
    adjustTextareaHeight,
    textareaRef,
    handleSendMultimedia,
    setFile,
    messages,
    setMessages,
    lastMessageRef,
  } = useMessages(idChat);

  const { data, error } = useSWR(`${API}/chat/${idChat}`, fetcher, {
    onSuccess: (fetchedMessages) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [idChat]: fetchedMessages,
      }));
    },
  });

  if (error) return <div>Failed to load</div>;

  const { socio_name, isActive } = chat;

  return (
    <div className="h-screen md:col-span-8 w-full flex flex-col">
      <Profile name={socio_name} isActive={isActive} />
      {!data ? (
        <div className="messageLayout">
          <CircleLoader withSize="w-full" />
        </div>
      ) : (
        <MessageSection messages={messages || []} lastMessageRef={lastMessageRef} />
      )}

      <Input
        idChat={idChat}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        adjustTextareaHeight={adjustTextareaHeight}
        textareaRef={textareaRef}
        handleSendMultimedia={handleSendMultimedia}
        setFile={setFile}
        isActive={isActive}
      />
    </div>
  );
}
