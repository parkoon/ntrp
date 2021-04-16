import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

type Value = { min: number; max: number }
type Props = {
  min: number
  max: number
  onChange?(value: Value): void
  onComplete?(value: Value): void
}

const THUMB_SIZE = 25
function RangeSliderTwo({ min, max, onComplete, onChange }: Props) {
  const leftInput = useRef<HTMLInputElement>(null)
  const rightInput = useRef<HTMLInputElement>(null)

  const [leftValue, setLeftValue] = useState(0)
  const [rightValue, setRightValue] = useState(100)

  const [] = useState(false)

  const leftPercentage = useMemo(() => (100 * (leftValue - min)) / (max - min), [
    leftValue,
    min,
    max,
  ])
  const rightPercentage = useMemo(() => 100 - (100 * (rightValue - min)) / (max - min), [
    rightValue,
    min,
    max,
  ])

  useEffect(() => {
    onChange?.({
      min: leftValue,
      max: rightValue,
    })
  }, [leftValue, rightValue])

  return (
    <Wrapper>
      <Input
        ref={leftInput}
        type="range"
        min="0"
        max="100"
        value={leftValue}
        onChange={(e) => setLeftValue(Math.min(Number(e.target.value), Number(rightValue) - 1))}
        onMouseUp={() => onComplete?.({ min: leftValue, max: rightValue })}
        step="10"
      />
      <Input
        ref={rightInput}
        type="range"
        min="0"
        max="100"
        value={rightValue}
        onChange={(e) => setRightValue(Math.max(Number(e.target.value), Number(leftValue) + 1))}
        onMouseUp={() => onComplete?.({ min: leftValue, max: rightValue })}
        step="10"
      />

      <Slider>
        <Track />
        <Range leftWeight={leftPercentage} rightWeight={rightPercentage}></Range>
        <ThumbLeft weight={leftPercentage}></ThumbLeft>
        <ThumbRight weight={rightPercentage}></ThumbRight>
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  position: absolute;
  pointer-events: none;
  appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0;

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    appearance: none;
    cursor: pointer;
  }
`

const Slider = styled.div`
  position: relative;
  z-index: 1;
  height: 5px;
  margin: ${THUMB_SIZE / 2}px;
`
const Track = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.lightGrey};
`
const Range = styled.div<{ leftWeight: number; rightWeight: number }>`
  position: absolute;
  z-index: 2;
  left: ${({ leftWeight }) => `${leftWeight}%`};
  right: ${({ rightWeight }) => `${rightWeight}%`};
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.main};
`
const Thumb = styled.div<{ weight: number; hover?: boolean; active?: boolean }>`
  position: absolute;
  z-index: 3;
  width: ${THUMB_SIZE}px;
  height: ${THUMB_SIZE}px;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  ${({ hover }) =>
    hover &&
    css`
      box-shadow: 0 0 0 20px rgba(98, 0, 238, 0.1);
    `}
  ${({ active }) =>
    active &&
    css`
      box-shadow: 0 0 0 40px rgba(98, 0, 238, 0.2);
    `}
`

const ThumbLeft = styled(Thumb)`
  left: ${({ weight }) => `${weight}%`};
  transform: translate(-15px, -10px);
`
const ThumbRight = styled(Thumb)`
  right: ${({ weight }) => `${weight}%`};
  transform: translate(15px, -10px);
`

export default RangeSliderTwo
