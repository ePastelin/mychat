export default function formatDate(dateString, chat = false) {
  const date = new Date(dateString)
  const today = new Date()

  const isToday = (someDate, todayDate) => {
    return (
      someDate.getFullYear() === todayDate.getFullYear() &&
      someDate.getMonth() === todayDate.getMonth() &&
      someDate.getDate() === todayDate.getDate()
    )
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  return isToday(date, today) || !chat ? formatTime(date) : formatDate(date)
}
