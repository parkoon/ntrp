import DayContainer from './Day'
import Header from './Header'
import WeekNames from './WeekNames'
import { CalendarProvider } from './context'

function Calendar() {
  return (
    <CalendarProvider>
      <Header />
      <WeekNames />
      <DayContainer />
    </CalendarProvider>
  )
}

export default Calendar
