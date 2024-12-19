export default function Preview({ headerText, bodyText, footerText, buttons }) {
  return (
    <section className='preview__container'>
      <div className='preview__bubble'>
        {headerText && <p className='preview__bubble-text'>{headerText}</p>}

        {bodyText && <p className='preview__bubble-text'>{bodyText}</p>}

        {footerText && <p className='preview__bubble-text'>{footerText}</p>}

        {buttons &&
          buttons.length > 0 &&
          buttons.map((button, index) => (
            <button key={index} className='preview__bubble-button'>
              {button.text || 'Botón'}
            </button>
          ))}
      </div>
    </section>
  )
}
