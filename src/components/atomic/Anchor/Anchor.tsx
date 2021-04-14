import React, { FC, AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

const Anchor: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.a`
  padding: 3px 5px;
  text-decoration: none;
  font-size: 15px;

  cursor: default;
  &:hover {
    text-decoration: underline;
  }
`
export default Anchor
