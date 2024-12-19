import nameFormat from './nameFormat'

// utils/createTemplateJson.js

export default function createTemplateFormater({ templateName, language, category, headerProps, bodyProps, footerProps, buttonsProps }) {
  const { headerText, headerExamples } = headerProps
  const { bodyText, bodyExamples } = bodyProps
  const { footerText } = footerProps
  const { buttons } = buttonsProps

  const template = {
    name: nameFormat(templateName),
    category: category,
    language: language,
    allow_category_change: true,
    components: [],
  }

  // Agregar el HEADER solo si existe texto
  if (headerText) {
    const headerComponent = {
      type: 'HEADER',
      format: 'TEXT',
      text: headerText,
    }

    if (headerExamples && Object.keys(headerExamples).length > 0) {
      headerComponent.example = { header_text: Object.values(headerExamples) }
    }

    template.components.push(headerComponent)
  }

  // Agregar el BODY solo si existe texto
  if (bodyText) {
    const bodyComponent = {
      type: 'BODY',
      text: bodyText,
    }

    if (bodyExamples && Object.keys(bodyExamples).length > 0) {
      bodyComponent.example = { body_text: Object.values(bodyExamples) }
    }

    template.components.push(bodyComponent)
  }

  // Agregar el FOOTER solo si existe texto
  if (footerText) {
    template.components.push({
      type: 'FOOTER',
      text: footerText,
    })
  }

  // Agregar botones solo si existen
  if (buttons && buttons.length > 0) {
    const buttonComponents = buttons.map((button) => {
      const buttonComponent = { type: button.type, text: button.text }
      if (button.type === 'PHONE_NUMBER') {
        buttonComponent.phone_number = button.phoneNumber
      } else if (button.type === 'URL') {
        buttonComponent.url = button.url
      }
      return buttonComponent
    })

    template.components.push({
      type: 'BUTTONS',
      buttons: buttonComponents,
    })
  }

  return template
}
