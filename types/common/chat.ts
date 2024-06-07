export interface SenderProps {
  textareaRef: any
  message: string
  setMessage: any
  messages: [{ sender: string; text: string }]
  setMessages: any
}

export type SendMenssage = (
  message: string,
  setMessages: any,
  setMessage: any,
  textareaRef: any,
  messages: [{ sender: string; text: string }],
) => void

export interface InputProps {
  textareaRef: any
  message: string
  setMessage: any
  messages: [{ sender: string; text: string }]
  setMessages: any
}

export interface Message {
  messages: [{ sender: string; text: string }]
  messagesEndRef: any
}
