import { rgba } from 'polished'
import React, { InputHTMLAttributes, forwardRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled, { CSSProperties } from 'styled-components'

type Props = {
  label?: string
  error?: boolean
  errorMessage?: string
  wrapperStyle?: CSSProperties
  searchIcon?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ error, errorMessage, label, wrapperStyle, searchIcon, ...props }, ref) => {
    const hasError = error && errorMessage
    return (
      <Wrapper style={wrapperStyle}>
        <fieldset>
          {label && <Label>{label}</Label>}

          <InputWrapper>
            {searchIcon && <SearchIcon />}

            <Input type="text" ref={ref} error={error} {...props} />
          </InputWrapper>
        </fieldset>
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    )
  }
)

const SearchIcon = () => (
  <AiOutlineSearch
    style={{
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      fontWeight: 'normal',
    }}
    size={24}
  />
)

const Wrapper = styled.div`
  width: 100%;
`

const InputWrapper = styled.fieldset`
  position: relative;
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
