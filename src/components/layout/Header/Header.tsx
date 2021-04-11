import React from 'react'
import styled from 'styled-components'

import Hamburger from '@Components/atomic/Hamburger'
import GlobalNavigation from '@Components/layout/GlobalNavigation'

import useResponsive from '@Hooks/useResponsive'

import Container from '../Container'

function Header() {
  const { medium } = useResponsive()

  return (
    <>
      <Wrapper>
        <Container>
          {medium && <Hamburger />}
          <TempLogo>LOGO</TempLogo>
          {!medium && <GlobalNavigation />}
          {medium && <div />}
        </Container>
      </Wrapper>
    </>
  )
}

const TempLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #e1e1e1;
`

export default Header
