import dayjs from 'dayjs'
import { darken } from 'polished'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styled from 'styled-components'

import { useCalendar } from '../context'

function CalendarHeader() {
  const { prevMonth, nextMonth, currDay, thisMonth } = useCalendar()

  const isSameMonth = currDay.isSame(dayjs(), 'month')

  const handleAction = (type: 'PREV' | 'NEXT' | 'THIS_MONTH') => {
    if (type === 'PREV') return prevMonth()
    if (type === 'NEXT') return nextMonth()
    if (type === 'THIS_MONTH') return thisMonth()
  }

  return (
    <Wrapper>
      <Action onClick={() => !isSameMonth && handleAction('PREV')}>
        <AiOutlineLeft size={18} />
      </Action>

      <Current>{currDay.format('YYYY.MM')}</Current>
      <Action onClick={() => handleAction('NEXT')}>
        <AiOutlineRight size={18} />
      </Action>
    </Wrapper>
  )
}

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`

export const BackButton = styled.button`
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 2px 4px;
  margin-left: 7px;

  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => darken(0.04, theme.color.main)};
  }
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};
  transition: 0.15s;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.lightGrey};
  }
  padding: 12px;
`
export const Current = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`

export default CalendarHeader
