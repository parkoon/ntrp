import React from 'react'
import styled from 'styled-components'

function Hamburger() {
  return (
    <Wrapper>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  )
}

export const Wrapper = styled.button`
  user-select: none;
  outline: none;
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const Line = styled.span`
  display: block;
  width: 18px;
  height: 2px;
  position: relative;
  background: ${({ theme }) => theme.color.main};
  border-radius: 3px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`
export default Hamburger
