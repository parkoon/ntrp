import React from 'react'
import styled from 'styled-components'

import LoginForm from '@Components/login/LoginForm/LoginForm'

function Login() {
  return (
    <Main>
      <Wrapper>
        <LoginForm />
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

export default Login
