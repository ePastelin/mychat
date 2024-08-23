import Image from 'next/image'

function Chat({ children, desktop, name, lastMessage, id, set }: { children: React.ReactNode; desktop?: boolean; name: string, lastMessage: string, id: number, set: any }) {
  return (
    <>
      <div className='flex justify-between h-12 lg:h-20 lg:items-center hover:cursor-pointer' onClick={() => set(id)}>
        <div className='flex gap-4'>
          <Image src='/images/profile.jpg' alt='logo' width={200} height={200} className=' rounded-full h-10 w-10' />
          <div>
            <b className='text-sm'>{name}</b>
            <p className='text-xs'>{lastMessage}</p>
          </div>
        </div>
        <div className='flex flex-col items-end'>{children}</div>
      </div>
      <div className='h-[1px] bg-separator'></div>
    </>
  )
}

export function UnreadChat({ desktop, chat, set }: { desktop?: boolean; chat: any; set: any }) {
  // console.log(chat)
  const {socio_name, last_message, id} = chat
  return (
    <Chat desktop={desktop} name={socio_name} lastMessage={last_message} id={id} set={set}>
      <p className='text-sm text-notification'>10:00 AM</p>
      <div className='rounded-full bg-notification w-6 h-6 mt-1 text-center text-white text-sm flex items-center justify-center'>3</div>
    </Chat>
  )
}

export function ReadChat({ desktop, chat, set }: { desktop?: boolean; chat: any; set:any }) {
  const {socio_name, last_message, id} = chat
  return (
    <Chat desktop={desktop} name={socio_name} lastMessage={last_message} id={id} set={set}>
      <p className=' text-sm text-text-50'>10:00 AM</p>
    </Chat>
  )
}
