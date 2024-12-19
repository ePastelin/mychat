export default function Preview({ headerText, headerParams, bodyText, bodyParams, footerText, buttons }) {
  const replaceVariables = (text, params) => {
    let result = text

    if (params && Array.isArray(params)) {
      params.forEach((param, index) => {
        const placeholder = `{{${index + 1}}}`
        result = result.replace(placeholder, param || placeholder)
      })
    }

    return result
  }

  return (
    <section className='preview__container  bg-chatBackground'>
      <div className='preview__bubble'>
        {headerText && <p className='preview__bubble-text'>{replaceVariables(headerText, headerParams)}</p>}

        {bodyText && <p className='preview__bubble-text'>{replaceVariables(bodyText, bodyParams)}</p>}

        {footerText && <p className='preview__bubble-text'>{footerText}</p>}

        {buttons &&
          buttons.map((button, index) => (
            <button key={index} className='preview__bubble-button'>
              {button.text || 'Botón'}
            </button>
          ))}
      </div>
    </section>
  )
}
