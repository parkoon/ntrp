import styled from 'styled-components'

const Divider = styled.div<{ gutter?: number }>`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.lightGrey};
  margin-top: ${({ gutter }) => `${gutter}px`};
  margin-bottom: ${({ gutter }) => `${gutter}px`};
`

export default Divider
