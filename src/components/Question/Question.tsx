import React from 'react'

import { Wrapper, Title } from './styled'

type QuestionProps = {
  title: string
}
function Question({ title }: QuestionProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Question
