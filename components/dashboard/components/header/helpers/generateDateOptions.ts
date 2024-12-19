import dayjs from 'dayjs'

export const generateDateOptions = (initialDate: Date) => {
  const options = []
  let currentDate = dayjs(initialDate)
  const today = dayjs()

  while (currentDate.isBefore(today)) {
    const nextMonth = currentDate.add(1, 'month')
    options.push(`${currentDate.format('MMM D')} - ${nextMonth.format('MMM D, YYYY')}`)
    currentDate = nextMonth
  }

  return options
}
