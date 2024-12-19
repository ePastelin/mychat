import { formatName } from './nameFormat'

export default function chatsFilter(chats, searchName, isUnread) {
  return chats.filter((chat) => {
    const matchesName = !searchName || formatName(chat.socio_name).toLowerCase().includes(searchName.toLowerCase())
    const matchesUnread = isUnread === 0 || chat.unread === 1
    return matchesName && matchesUnread
  })
}
