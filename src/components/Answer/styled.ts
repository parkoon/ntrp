import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 520px;
`

export const ItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  margin-left: 12px;
`
export const ItemIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  width: 32px;
  height: 32px;

  border: ${(props) => `2px solid ${props.theme.color.lightGrey}`};
`

const HoverAndCheckedEffect = css`
  ${ItemIconWrapper} {
    background: ${(props) => props.theme.color.main};
    border-color: ${(props) => props.theme.color.main};
  }

  border-color: ${(props) => props.theme.color.main};
  transform: translateX(20px);
`

export const Item = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;

  cursor: pointer;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.23);
  border-radius: 7px;

  padding: 20px 15px;
  border: 2px solid #fff;

  transition: 0.3s;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover {
    ${HoverAndCheckedEffect}
  }

  ${(props) =>
    props.checked &&
    css`
      ${HoverAndCheckedEffect}
    `}
`
