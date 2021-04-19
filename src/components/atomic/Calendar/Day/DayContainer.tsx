import dayjs from 'dayjs'
import { useState } from 'react'
import styled from 'styled-components'

import { useCalendar } from '../context'
import Day from './Day'

function DayContainer() {
  const { calendar } = useCalendar()
  const [selectedDay, setSelectedDay] = useState()

  return (
    <Wrapper>
      {calendar.map((day, index) =>
        day ? (
          <Day
            key={day.format('YYYY-MM-DD')}
            value={day}
            onClick={(day) => {
              setSelectedDay(day)
            }}
            disabled={day.isBefore(dayjs(), 'day')}
            selected={day.isSame(selectedDay)}
          />
        ) : (
          <div key={index} />
        )
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`

export default DayContainer
