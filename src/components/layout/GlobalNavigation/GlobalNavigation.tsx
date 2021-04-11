import React from 'react'
import styled, { css } from 'styled-components'

function GlobalNavigation() {
  return (
    <Wrapper>
      <Item divider>로그인</Item>
      <Item divider>회원가입</Item>
      <Item divider>코트 찾기</Item>
      <Item divider>파트너 찾기</Item>
      <Item>코트 양도</Item>
    </Wrapper>
  )
}

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`

export const Item = styled.a<{ divider?: boolean }>`
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  padding: 2px;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 9px;

  ${({ divider }) =>
    divider &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 100%;
        bottom: 3px;
        margin-left: 8px;
        border-right: 1px solid ${({ theme }) => theme.color.darkGrey};
      }
    `}
`

export default GlobalNavigation
