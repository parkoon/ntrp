import { rgba } from 'polished'
import React, { InputHTMLAttributes, forwardRef } from 'react'
import styled, { CSSProperties } from 'styled-components'

type Props = {
  label: string

  error?: boolean
  errorMessage?: string
  wrapperStyle?: CSSProperties
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ error, errorMessage, label, wrapperStyle, ...props }, ref) => {
    const hasError = error && errorMessage
    return (
      <Wrapper style={wrapperStyle}>
        <fieldset>
          <Label>{label}</Label>
          <Input type="text" ref={ref} error={error} {...props} />
        </fieldset>
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    )
  }
)

const Wrapper = styled.div`
  width: 100%;
`

const Input = styled.input<{ error?: boolean }>`
  display: block;
  width: 100%;
  height: 42px;
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.grey};
  padding: 0 12px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 3px
      ${({ theme, error }) => rgba(error ? theme.color.error : theme.color.main, 0.4)};
  }

  border: none;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  border: 1px solid ${({ theme, error }) => (error ? theme.color.error : theme.color.border)};
`
const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 7px;
`
const ErrorMessage = styled.span`
  display: block;
  margin-top: 7px;
  color: ${({ theme }) => theme.color.error};
`

export default TextInput
