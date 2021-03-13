import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import AnswerItem from './AnswerItem'
import { Wrapper } from './styled'

const answers = [
  {
    id: 1,
    title: '매우 그렇다',
  },
  {
    id: 2,
    title: '그렇다',
  },
  {
    id: 3,
    title: '보통이다',
  },
  {
    id: 4,
    title: '그렇지 않다',
  },
  {
    id: 5,
    title: '매우 그렇지 않다',
  },
]

function Answer() {
  const [checkedAnswer, setCheckedAnswer] = useState<number | undefined>()

  const handleClick = (id: number) => {
    setCheckedAnswer(id)
  }
  return (
    <Wrapper>
      {answers.map((answer) => (
        <AnswerItem
          key={answer.id}
          answer={answer}
          checked={answer.id === checkedAnswer}
          onClick={() => handleClick(answer.id)}
        />
      ))}
    </Wrapper>
  )
}

export default Answer
