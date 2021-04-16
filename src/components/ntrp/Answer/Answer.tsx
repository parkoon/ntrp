import React, { useState } from 'react'

import { IAnswer } from '@Interfaces/Ntrp'

import AnswerItem from './AnswerItem'
import { Wrapper } from './styled'

type AnswerType = {
  sources: IAnswer[]
  currentAnswer?: IAnswer
  onChange(answer: IAnswer): void
}
function Answer({ sources, currentAnswer, onChange }: AnswerType) {
  const [answer, setAnswer] = useState<IAnswer>()

  const handleClick = (id: string) => {
    const selectedAnswer = sources.find((source) => source.id === id)
    setAnswer(selectedAnswer)
    onChange(selectedAnswer)
  }

  return (
    <Wrapper>
      {sources.map(({ id, title }) => (
        <AnswerItem
          key={id}
          title={title}
          checked={currentAnswer ? id === currentAnswer.id : id === answer?.id}
          onClick={() => handleClick(id)}
        />
      ))}
    </Wrapper>
  )
}

export default Answer
