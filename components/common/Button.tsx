export default function Button({ children }: { children: any }) {
  return (
    <button type='submit' value='Submit' className='buttonLogin'>
      {children}
    </button>
  )
}
