import styled from 'styled-components'

const WEEK_NAMES = ['일', '월', '화', '수', '목', '금', '토']
function WeekNames() {
  return (
    <Wrapper>
      {WEEK_NAMES.map((name, i) => (
        <span key={i}>{name}</span>
      ))}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 7px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.color.grey};
`

export default WeekNames
