import React from 'react'
import styled, { CSSProperties } from 'styled-components'

import FacebookLogin from './FacebookLogin'
import KakaoLogin from './KakaoLogin'
import NaverLogin from './NaverLogin'

type Props = {
  wrapperStyle?: CSSProperties
}
function SocialLogin({ wrapperStyle }: Props) {
  return (
    <Wrapper style={wrapperStyle}>
      <h3>SNS계정으로 간편 로그인/회원가입</h3>
      <Icons>
        <FacebookLogin />
        <NaverLogin />
        <KakaoLogin />
      </Icons>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 13px;
    line-height: 1.33;
    text-align: center;
    color: ${({ theme }) => theme.color.grey};
  }
`

const Icons = styled.div`
  margin-top: 12px;
  > a:not(:last-child) {
    margin-right: 12px;
  }
`

export default SocialLogin
