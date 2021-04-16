import styled, { css } from 'styled-components'

import media from '@Assets/styles/media'

const Container = styled.div<{ column?: boolean }>`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  display: flex;
  padding: 10px 60px;
  justify-content: space-between;
  flex: 1;

  ${media.medium`
      padding: 10px 12px;
  `}

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`

export default Container
