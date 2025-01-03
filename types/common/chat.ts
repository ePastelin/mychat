export interface Chat {
  chat_type: number
  id: number
  isActive: number
  last_date: Date
  last_message: string
  our_number: string
  socio_name: string
  socio_number: string
  unread: number
  user: number
}

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
  handleSendMultimedia: any
  setFile: any
  isActive: boolean
}

export interface Message {
  messages: [
    {
      sender: number
      message: string
      status: string
      date: Date
      id: string
      media: any
      type?: Number
      fileName?: String
      mimeType?: String
    },
  ]
  messagesEndRef: any
  lastMessageRef: any
}
