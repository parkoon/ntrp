import { darken } from 'polished'
import React, { FC } from 'react'
import styled from 'styled-components'

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  height: 50px;
  padding: 13px 15px;
  font-size: 17px;
  text-align: center;
  border-radius: ${({ theme }) => theme.border.radius};
  font-weight: 700;
  cursor: pointer;

  transition: 0.15s;

  &:hover {
    background: ${({ theme }) => darken(0.05, theme.color.main)};
  }
`

export default Button
