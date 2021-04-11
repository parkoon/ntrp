import styled from 'styled-components'

import media from '@Assets/styles/media'

const Container = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  display: flex;
  padding: 10px 60px;
  justify-content: space-between;
  flex: 1;

  ${media.medium`
      padding: 10px 12px;
  `}
`

export default Container
