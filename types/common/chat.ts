export interface SenderProps {
  textareaRef: any
  message: string
  setMessage: any
  messages: [{ sender: string; text: string }]
  setMessages: any
  idChat: number
}

export type SendMenssage = (
  message: string,
  setMessages: any,
  setMessage: any,
  textareaRef: any,
  messages: [{ sender: string; text: string }],
  idChat: number,
) => void

export interface InputProps {
  textareaRef: any
  message: string
  setMessage: any
  messages: [{ sender: string; text: string }]
  setMessages: any
  idChat: number
  handleSendMessage: any
  adjustTextareaHeight: any
}

export interface Message {
  messages: [{ sender: number; message: string, status: string, date: Date, id: string }]
  messagesEndRef: any
}
