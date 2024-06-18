import Selection from './Selection'

export default function Option({
  children,
  text,
  selected,
  onClick,
}: {
  children: React.ReactNode
  text: string
  selected?: boolean
  onClick: () => void
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-1' onClick={onClick}>
      {selected && <Selection />}
      {children}
      <p className={`z-10 ${selected ? ' text-text-100' : 'text-text-50'}`}>{text}</p>
    </div>
  )
}
