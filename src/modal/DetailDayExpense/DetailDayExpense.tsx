import { Dayjs } from 'dayjs'
import { darken } from 'polished'
import styled from 'styled-components'

import media from '@Assets/styles/media'

import { CommonModalProps } from '../types'

interface DetailDayExpenseProps extends CommonModalProps {}
function DetailDayExpense({ close }: DetailDayExpenseProps) {
  return <Wrapper>ㅋㅋ</Wrapper>
}

const Wrapper = styled.div`
  position: relative;
  width: 85vw;
  min-height: 50vh;
  background: ${({ theme }) => theme.color.white};
  border-radius: 7px;

  width: 85vw;

  ${media.small`
      width: 100vw;
      height: 90vh;
    `}
`

export default DetailDayExpense
