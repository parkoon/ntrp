import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ full?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.full ? `1fr` : `1fr 1fr`)};
  grid-column-gap: 12px;

  margin-top: 34px;
`

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;

  background-color: ${(props) => props.theme.color.main};
  color: #fff;

  border: none;
  outline: none;
  padding: 20px;
  border-radius: 7px;
  font-size: 20px;

  cursor: pointer;

  transition: 0.2s;

  ${({ disabled, theme }) =>
    disabled
      ? css`
          background: ${theme.color.lightGrey};
          cursor: no-drop;
        `
      : css`
          &:hover {
            background: ${darken(0.04, theme.color.main)};
          }
        `}
`
