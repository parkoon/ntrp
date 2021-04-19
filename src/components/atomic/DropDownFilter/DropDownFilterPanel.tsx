import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  visible: boolean
  title?: string
  subtitle?: string
}
const DropDownFilterPanel: FC<Partial<Props>> = ({ children, visible, title, subtitle }) => {
  return (
    <Wrapper visible={visible}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ visible: boolean }>`
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 30%);
  padding: 16px 18px 16px 22px;
  min-height: 34px;
  width: 460px;
  position: absolute;
  top: calc(100% + 7px);
  left: 0px;
  background: ${({ theme }) => theme.color.white};
  transition: 0.2s;
  transform: translateY(-20%);
  visibility: hidden;
  opacity: 0;

  /** 부모를 기준으로 -1, visible 및 transform 처리 되면서 부모를 가리지 않는다. */
  z-index: -1;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    `}
`

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 7px;
`
const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 24px;
`

export default DropDownFilterPanel
