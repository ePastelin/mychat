export default function PhoneSelector({ onSelect, setShow }) {
  const phoneNumbers = ['123-456-7890', '987-654-3210', '555-555-5555']

  return (
    <div className='phone-selector-menu'>
      {phoneNumbers.map((number) => (
        <div
          key={number}
          onClick={() => {
            onSelect(number)
            setShow(false)
          }}
          className='phone-number-option'
        >
          {number}
        </div>
      ))}
    </div>
  )
}
