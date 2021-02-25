import React, { useState } from 'react'

import AnswerItem from './AnswerItem'
import { Wrapper } from './styled'

const answers = [
  {
    id: 1,
    title: 'Morning',
  },
  {
    id: 2,
    title: 'Afternoon',
  },
  {
    id: 3,
    title: 'Evening',
  },
  {
    id: 4,
    title: 'Night',
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
