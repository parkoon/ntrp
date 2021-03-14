import React, { useState, useEffect } from 'react'
import { IAnswer } from 'src/interfaces/Ntrp'

import AnswerItem from './AnswerItem'
import { Wrapper } from './styled'

type AnswerType = {
  sources: IAnswer[]
  onChange(answer: IAnswer): void
}
function Answer({ sources, onChange }: AnswerType) {
  const [checkedAnswer, setCheckedAnswer] = useState<string | undefined>()

  const handleClick = (id: string) => {
    setCheckedAnswer(id)
    onChange(sources.find((source) => source.id === id))
  }

  return (
    <Wrapper>
      {sources.map(({ id, title }) => (
        <AnswerItem
          key={id}
          title={title}
          checked={id === checkedAnswer}
          onClick={() => handleClick(id)}
        />
      ))}
    </Wrapper>
  )
}

export default Answer
