import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  gutter?: number
  flex?: boolean
  hAlignment?: 'center' | 'flex-end' | 'flex-start'
}
const Box: FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.div<Props>`
  ${({ gutter }) =>
    gutter &&
    css`
      margin-bottom: ${gutter}px;
    `}

  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: ${({ hAlignment }) => hAlignment || 'flex-start'};

  background: rgba(0, 0, 0, 0.1);
`

export default Box
