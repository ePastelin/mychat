import Image from 'next/image'

function Chat({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className='flex justify-between h-12'>
        <div className='flex gap-4'>
          <Image src='/images/profile.jpg' alt='logo' width={200} height={200} className=' rounded-full h-10 w-10' />
          <div>
            <b className='text-sm'> Señor Juanito</b>
            <p className='text-xs'>Me pueden contestar por favor</p>
          </div>
        </div>
        <div className='flex flex-col items-end'>{children}</div>
      </section>
      <div className='h-[1px] bg-separator'></div>
    </>
  )
}

export function UnreadChat() {
  return (
    <Chat>
      <p className=' text-sm text-notification'>10:00 AM</p>
      <div className='rounded-full bg-notification w-6 h-6 mt-1 text-center text-white text-sm flex items-center justify-center'>3</div>
    </Chat>
  )
}

export function ReadChat() {
  return (
    <Chat>
      <p className=' text-sm text-text-50'>10:00 AM</p>
    </Chat>
  )
}
