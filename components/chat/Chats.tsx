import formatDate from "@/utils/formatDate";
import truncateText from "@/utils/truncateText";
import ProfilePhoto from "../common/ProfilePhoto";

function Chat({
  children,
  name,
  lastMessage,
  id,
  set,
}: {
  children: React.ReactNode;
  desktop?: boolean;
  name: string;
  lastMessage: string;
  id: number;
  set: any;
}) {
  return (
    <>
      <div
        className="flex justify-between h-12 lg:h-20 lg:items-center hover:cursor-pointer hover:bg-slate-100/50 rounded-md duration-200"
        onClick={() => set(id)}
      >
        <div className="flex gap-4">
          <ProfilePhoto name={name} />
          <div>
            <b className="text-sm">{name}</b>
            <p className="text-xs">{truncateText(lastMessage, 27)}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">{children}</div>
      </div>
      <div className="h-[1px] bg-separator"></div>
    </>
  );
}

export function UnreadChat({
  desktop,
  chat,
  set,
}: {
  desktop?: boolean;
  chat: any;
  set: any;
}) {
  const { socio_name, last_message, id, unread } = chat;
  return (
    <Chat
      desktop={desktop}
      name={socio_name}
      lastMessage={last_message}
      id={id}
      set={set}
    >
      <p className="text-sm text-notification">
        {formatDate(chat.last_date, true)}
      </p>
      <div className="rounded-full bg-notification w-6 h-6 mt-1 text-center text-white text-sm flex items-center justify-center animate-scaleIn">
        {unread < 100 ? unread : "+99"}
      </div>
    </Chat>
  );
}

export function ReadChat({
  desktop,
  chat,
  set,
}: {
  desktop?: boolean;
  chat: any;
  set: any;
}) {
  const { socio_name, last_message, id } = chat;
  return (
    <Chat
      desktop={desktop}
      name={socio_name}
      lastMessage={last_message}
      id={id}
      set={set}
    >
      <p className=" text-sm text-text-50">
        {formatDate(chat.last_date, true)}
      </p>
    </Chat>
  );
}


