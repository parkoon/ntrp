import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IoInfiniteSharp } from 'react-icons/io5'
import styled, { css } from 'styled-components'

type Value = { min: number; max: number }
type Props = {
  min: number
  max: number
  unit?: string
  step?: number
  onChange?(value: Value): void
  onComplete?(value: Value): void
}

const THUMB_SIZE = 25
function RangeSlider({ min, max, unit, step = 1, onComplete, onChange }: Props) {
  const leftInput = useRef<HTMLInputElement>(null)
  const rightInput = useRef<HTMLInputElement>(null)

  const [leftValue, setLeftValue] = useState(min)
  const [rightValue, setRightValue] = useState(max)

  const isInfinity = useMemo(() => rightValue === max, [rightValue, max])

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
      <Result>
        <span>{`${leftValue}${unit}`}</span>
        <span style={{ margin: '0 7px' }}>~</span>
        {!isInfinity ? <span>{`${rightValue}${unit}`}</span> : <IoInfiniteSharp size={18} />}
      </Result>

      <SliderWrapper>
        <Input
          ref={leftInput}
          type="range"
          min={min}
          max={max}
          step={step}
          value={leftValue}
          onChange={(e) => setLeftValue(Math.min(Number(e.target.value), Number(rightValue) - 1))}
          onMouseUp={() => onComplete?.({ min: leftValue, max: rightValue })}
        />
        <Input
          ref={rightInput}
          type="range"
          min={min}
          max={max}
          step={step}
          value={rightValue}
          onChange={(e) => setRightValue(Math.max(Number(e.target.value), Number(leftValue) + 1))}
          onMouseUp={() => onComplete?.({ min: leftValue, max: rightValue })}
        />
        <Slider>
          <Track />
          <Range leftWeight={leftPercentage} rightWeight={rightPercentage}></Range>
          <ThumbLeft weight={leftPercentage}></ThumbLeft>
          <ThumbRight weight={rightPercentage}></ThumbRight>
        </Slider>

        <GuidLine>
          <GuideLineText>{`${min}${unit}`}</GuideLineText>
          <GuideLineText center>{`${max / 2}${unit}`}</GuideLineText>
          <GuideLineText right>
            <IoInfiniteSharp size={18} />
          </GuideLineText>
        </GuidLine>
      </SliderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const SliderWrapper = styled.div`
  position: relative;
`

const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.main};
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
  margin: ${THUMB_SIZE}px ${THUMB_SIZE / 2}px;
`

const GuidLine = styled.div`
  display: flex;
  justify-content: space-between;
`

const GuideLineText = styled.span<{ center?: boolean; right?: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.color.grey};
  min-width: 24px;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    height: 7px;
    width: 1px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.color.grey};
  }

  ${({ center }) =>
    center &&
    css`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}
  ${({ right }) =>
    right &&
    css`
      position: absolute;
      right: 0;
    `}
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
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;
  box-shadow: rgb(157 157 157 / 20%) 0px 2px 5px 0px;
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
  transform: translate(-${THUMB_SIZE / 2}px, -10px);
`
const ThumbRight = styled(Thumb)`
  right: ${({ weight }) => `${weight}%`};
  transform: translate(${THUMB_SIZE / 2}px, -10px);
`

export default RangeSlider
