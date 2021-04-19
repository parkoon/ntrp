import { Dayjs } from 'dayjs'
import { memo } from 'react'
import styled, { css } from 'styled-components'

type DayProps = {
  disabled: boolean
  selected: boolean
  value: Dayjs
  onClick(value: any): void
}
∏
function Day({ onClick, value, selected, disabled }: DayProps) {
  const isCurrDate = (value: Dayjs): boolean => value.isSame(new Date(), 'date')

  const handleDayClick = (day: Dayjs) => {
    onClick(day)
  }

  return (
    <Wrapper>
      <D
        today={isCurrDate(value)}
        selected={selected}
        disabled={disabled}
        onClick={() => handleDayClick(value)}
      >
        {value.format('D')}
      </D>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
`

const D = styled.span<{ today: boolean; selected: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;

  ${({ today }) =>
    today &&
    css`
      background-color: ${({ theme }) => theme.color.lightGrey};
    `}

  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.main};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
      color: ${({ theme }) => theme.color.grey};
    `}

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.main};
  }
`

export default memo(Day)
