import React, { FC } from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Header from '../Header'

type Props = {
  column?: boolean
}
const BaseLayout: FC<Props> = ({ children, column }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      {/* <Container column={column}>{}</Container> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default BaseLayout
