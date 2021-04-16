import React from 'react'

import { Wrapper, Button } from './styled'

type ActionButtonProps = {
  isStart: boolean
  isEnd: boolean
  disabled: boolean
  onSubmit(): void
  onPrev(): void
  onNext(): void
}
function ActionButton({ isStart, isEnd, disabled, onSubmit, onPrev, onNext }: ActionButtonProps) {
  if (isStart) {
    return (
      <Wrapper full={isStart}>
        <Button disabled={disabled} onClick={onNext}>
          다음으로
        </Button>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Button onClick={onPrev}>이전으로</Button>

      {isEnd ? (
        <Button disabled={disabled} onClick={onSubmit}>
          측정하기
        </Button>
      ) : (
        <Button disabled={disabled} onClick={onNext}>
          다음으로
        </Button>
      )}
    </Wrapper>
  )
}

export default ActionButton
