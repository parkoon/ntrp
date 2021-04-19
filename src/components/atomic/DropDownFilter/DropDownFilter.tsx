import { rgba } from 'polished'
import React, { cloneElement, FC, useEffect, useRef, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import styled, { css } from 'styled-components'

type Props = {
  title: string
}
const DropDownFilter: FC<Props> = ({ children, title }) => {
  const [checked, setChecked] = useState(false)

  const wrapperRef = useRef(null)

  const handleDocumentClick = (e: MouseEvent) => {
    if (!wrapperRef.current) return
    if (!wrapperRef.current.contains(e.target)) {
      setChecked(false)
    }
  }

  useEffect(() => {
    checked && document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [checked])

  return (
    <Wrapper ref={wrapperRef}>
      <Box checked={checked}>
        <span>{title}</span>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Arrow />
      </Box>
      <>
        {cloneElement(children as React.ReactElement<any>, {
          visible: checked,
          ...(children as React.ReactElement<any>).props,
        })}
      </>
    </Wrapper>
  )
}

const Arrow = styled(AiOutlineLeft)`
  transition: 0.15s;
  transform: rotate(-90deg);
`

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;

  background: red;
`

const Checkbox = styled.input`
  display: none;
  &:checked ~ ${Arrow} {
    transform: rotate(90deg);
  }
`

const Box = styled.label<{ checked: boolean }>`
  user-select: none;
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 12px;
  cursor: pointer;
  transition: 0.15s;

  span {
    margin-right: 7px;
  }

  ${({ checked }) =>
    checked
      ? css`
          color: ${({ theme }) => theme.color.main};
          font-weight: bold;
          border-color: ${({ theme }) => theme.color.main};
        `
      : css`
          &:hover {
            box-shadow: 0 0 0 3px ${({ theme }) => rgba(theme.color.main, 0.4)};
          }
        `}
`

const Panel = styled.div<{ visible: boolean }>`
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
  transform: translateY(-50%);
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

export default DropDownFilter
