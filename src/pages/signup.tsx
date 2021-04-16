import React from 'react'
import styled from 'styled-components'

import SignUpForm from '@Components/signup/SignUpForm'

function SignUp() {
  return (
    <Main>
      <Wrapper>
        <SignUpForm />
      </Wrapper>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 360px;
`

export default SignUp
