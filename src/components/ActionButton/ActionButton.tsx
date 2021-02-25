import React from 'react'

import { Wrapper, Button } from './styled'

type ActionButtonProps = {
  text: {
    prev: string
    next: string
    submit: string
  }
  isStart: boolean
  isEnd: boolean
  onSubmit(): void
  onPrev(): void
  onNext(): void
}
function ActionButton({ text, isStart, isEnd, onSubmit, onPrev, onNext }: ActionButtonProps) {
  const { next, prev, submit } = text

  if (isStart) {
    return (
      <Wrapper full={isStart}>
        <Button onClick={onPrev}>{next}</Button>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Button onClick={onNext}>{prev}</Button>

      {isEnd ? <Button>{next}</Button> : <Button onClick={onSubmit}>{submit}</Button>}
    </Wrapper>
  )
}

export default ActionButton
