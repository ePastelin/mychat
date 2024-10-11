export default function Chat({ isUnread, setIsUnread }: any) {
  return (
    <section className='mt-10 flex gap-4'>
      <div
        className={`rounded-2xl px-5 py-2 text-text-50 text-sm text-center ${isUnread === 0 ? 'bg-select' : 'bg-inputBackground hover:bg-slate-200'} hover:cursor-pointer`}
        onClick={() => setIsUnread(0)}
      >
        Todos
      </div>
      <div
        className={`rounded-2xl px-5 py-2 text-text-50 text-sm text-center ${isUnread === 1 ? 'bg-select' : 'bg-inputBackground hover:bg-slate-200'} hover:cursor-pointer`}
        onClick={() => setIsUnread(1)}
      >
        No leído
      </div>
    </section>
  )
}

