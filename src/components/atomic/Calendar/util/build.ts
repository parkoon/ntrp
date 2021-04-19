import { Dayjs } from 'dayjs'
import { CalendarArr } from '../types'

function buildCalendar(value: Dayjs): CalendarArr {
  const startOfMonth = value.startOf('month')
  const endOfMonth = value.endOf('month')

  const beforeEmptyDays = Array.from({ length: startOfMonth.day() }).fill(null)
  const nextEmptyDays = Array.from({ length: 6 - endOfMonth.day() }).fill(null)

  const daysInMonthArr = Array.from({ length: value.daysInMonth() })
    .fill(0)
    .map((_, i) => startOfMonth.add(i, 'day'))

  return [...beforeEmptyDays, ...daysInMonthArr, ...nextEmptyDays] as CalendarArr
}

export default buildCalendar
