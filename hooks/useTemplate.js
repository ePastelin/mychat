import { useState } from 'react'
import createTemplateFormater from '@/utils/createTemplateFormater'
import chatApi from '@/api/api'
import { createTemplate } from './api/fetcher'

export default function useTemplate() {
  const [templateName, setTemplateName] = useState('')
  const [headerText, setHeaderText] = useState('')
  const [bodyText, setBodyText] = useState()
  const [footerText, setFooterText] = useState('')
  const [headerExamples, setHeaderExamples] = useState({})
  const [bodyExamples, setBodyExamples] = useState({})
  const [footerExamples, setFooterExamples] = useState({})
  const [buttons, setButtons] = useState([])
  const [language, setLanguage] = useState('')
  const [category, setCategory] = useState('')
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleAddVariable = (setTextFunc, text, setExamplesFunc, examples) => {
    const newIndex = Object.keys(examples).length + 1
    setTextFunc(`${text} {{${newIndex}}}`)
    setExamplesFunc({ ...examples, [newIndex]: '' })
  }

  const handleRemoveVariable = (setTextFunc, text, setExamplesFunc, examples, indexToRemove) => {
    const newExamples = { ...examples }
    delete newExamples[indexToRemove]
    setExamplesFunc(newExamples)

    const newText = text.replace(` {{${indexToRemove}}}`, '')
    setTextFunc(newText)
  }

  const handleExampleChange = (index, value, setExamplesFunc, examples) => {
    setExamplesFunc({ ...examples, [index]: value })
  }

  const handleAddButton = () => {
    setButtons([...buttons, { type: '', text: '', phoneNumber: '', url: '' }])
  }

  const handleButtonChange = (index, field, value) => {
    const newButtons = [...buttons]
    newButtons[index][field] = value
    setButtons(newButtons)
  }

  const removeButton = (index) => {
    setButtons(buttons.filter((_, i) => i !== index))
  }

  const handleSendTemplate = async () => {
    setIsLoading(true);
    setIsSuccess(false);

    const body = createTemplateFormater({
      templateName,
      language,
      category,
      headerProps: {
        headerText,
        headerExamples
      },
      bodyProps: {
        bodyText,
        bodyExamples
      },
      footerProps: {
        footerText,
        footerExamples
      },
      buttonsProps: {
        buttons
      }
    });

    console.log(body)
    const response = await createTemplate(body) 
    setIsLoading(false);
    setIsSuccess(true);
    console.log(response)
    setSent(true);
  }

  return {
    templateName,
    setTemplateName,
    language,
    setLanguage,
    category,
    setCategory,
    handleSendTemplate,
    sent,
    isLoading,
    isSuccess,
    headerProps: {
      headerText,
      setHeaderText,
      headerExamples,
      setHeaderExamples,
      handleAddVariable,
      handleRemoveVariable,
      handleExampleChange,
    },
    bodyProps: {
      bodyText,
      setBodyText,
      bodyExamples,
      setBodyExamples,
      handleAddVariable,
      handleRemoveVariable,
      handleExampleChange,
    },
    footerProps: {
      footerText,
      setFooterText,
      footerExamples,
      setFooterExamples,
      handleAddVariable,
      handleRemoveVariable,
      handleExampleChange,
    },
    buttonsProps: {
      buttons,
      handleAddButton,
      handleButtonChange,
      removeButton,
    },
  }
}
