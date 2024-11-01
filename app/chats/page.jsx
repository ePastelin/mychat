"use client";

import { Header } from "@/components/chat";
import { Footer } from "@/components/common";
import Side from "@/components/common/side/Side";
import useSWR from "swr";
import { useState } from "react";
import { fetcher } from "@/hooks/api/fetcher";
import ChatList from "@/components/chat/ChatList";
import ChatDetails from "@/components/chat/ChatDetails";
import Create from "@/components/template/create/Create";
import SendTemplate from "@/components/template/sendTemplate/SendTemplate";
import Users from "@/components/users/Users";
import { useChatInfo } from "@/hooks/chat";
import CircleLoader from "@/components/common/Loader";

const API = process.env.NEXT_PUBLIC_API_ROUTE;

export default function Chats() {
  const [screen, setScreen] = useState(1);
  const [idChat, setIdChat] = useState(null);
  const { chats, setChats, unreadMessages } = useChatInfo(idChat);
  const {data, error} = useSWR(`${API}/chat`, fetcher, {
    onSuccess: (data) => {
      setChats(data?.chats || []);
    },
  });
  
  if (error) return <div>Failed to load</div>;
  if(!data) return <CircleLoader/>

  return (
    <>
      <div className="lg:hidden">
        <div className="overflow-hidden px-6 lg:hidden">
          <Header />
          <ChatList chats={chats} setIdChat={setIdChat} />
          <Footer />
        </div>
      </div>

      <div className="hidden lg:grid md:grid-cols-12">
        <Side setScreen={setScreen} screen={screen} unreadMessages={unreadMessages}/>
        {screen === 1 && (
          <>
            <div className="md:col-span-3 w-full h-screen px-4 bg-white flex flex-col">
              <ChatList chats={chats} setIdChat={setIdChat} />
            </div>

            <ChatDetails idChat={idChat} chats={chats} />
          </>
        )}

        {screen === 2 && <SendTemplate setScreen={setScreen} />}
        {screen === 3 && <Users />}
        {screen === 4 && <Create setScreen={setScreen} />}
      </div>
    </>
  );
}
