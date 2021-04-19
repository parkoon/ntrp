import dayjs, { Dayjs } from 'dayjs'
import { createContext, FC, useContext, useEffect, useState } from 'react'

import buildCalendar from './util/build'

type CalendarContextType = {
  currDay: Dayjs
  calendar: Array<null | Dayjs>
  prevMonth(): void
  nextMonth(): void
  thisMonth(): void
}
const CalendarContext = createContext({} as CalendarContextType)

export const CalendarProvider: FC = ({ children }) => {
  const [currDay, setCurrDay] = useState(dayjs())
  const [calendar, setCalendar] = useState<Array<null | Dayjs>>([])

  const prevMonth = () => setCurrDay(currDay.subtract(1, 'month'))
  const nextMonth = () => setCurrDay(currDay.add(1, 'month'))
  const thisMonth = () => setCurrDay(dayjs())

  useEffect(() => {
    setCalendar(buildCalendar(currDay))
  }, [currDay])

  return (
    <CalendarContext.Provider value={{ currDay, calendar, prevMonth, nextMonth, thisMonth }}>
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendar() {
  const ctx = useContext(CalendarContext)
  return ctx
}
