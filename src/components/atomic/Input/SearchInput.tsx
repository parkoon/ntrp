import React, { forwardRef, InputHTMLAttributes } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled, { CSSProperties } from 'styled-components'

type Props = {
  wrapperStyle?: CSSProperties
} & InputHTMLAttributes<HTMLInputElement>

const SearchInput = forwardRef<HTMLInputElement, Props>(({ wrapperStyle, ...props }, ref) => {
  return (
    <Wrapper style={wrapperStyle}>
      <fieldset>
        <FieldSet>
          <SearchIcon />
          <Input type="text" ref={ref} {...props} />
        </FieldSet>
      </fieldset>
    </Wrapper>
  )
})

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

const FieldSet = styled.fieldset`
  position: relative;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 42px;
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.grey};
  padding: 0 12px 0 28px;
  outline: none;
  border: none;
`

export default SearchInput
