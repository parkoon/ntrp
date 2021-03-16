import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { IAnswer } from 'src/interfaces/Ntrp'
import styled from 'styled-components'

import ActionButton from '@Components/ActionButton'
import Answer from '@Components/Answer'
import Progress from '@Components/Progress'
import Question from '@Components/Question'
import Tag from '@Components/Tag'

import useNtrpQuestion from '@Hooks/useNtrpQuestion'

import media from '@Assets/styles/media'

import {
  useNtrpScoreActions,
  ntrpScoreState,
  useNtrpScoreValue,
  useCurrentNtrpAnswer,
  useNtrpScoreProgress,
} from '../_app'

const TestWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  max-width: 720px;
  margin: 0 auto;
  padding: 0 12px;
  ${media.medium`
    max-width: 520px;

  `}
  ${media.small`
    width: 100%;
  `}
`
function Ntrp() {
  const Router = useRouter()
  const id = Router.query.id
  const { setUserNtrpScore, calcUserNtrp } = useNtrpScoreActions()
  const currentAnswer = useCurrentNtrpAnswer(Number(id))
  const progress = useNtrpScoreProgress()

  console.log('currentAnswer', currentAnswer)

  const { question, last, first } = useNtrpQuestion(id as string)

  const handleNext = () => {
    Router.push(String(Number(id) + 1))
  }
  const handlePrev = () => {
    Router.push(String(Number(id) + -1))
  }
  const handleSubmit = () => {
    const result = calcUserNtrp()

    alert(result)
  }

  const handleAnswerChange = (answer: IAnswer) => {
    setUserNtrpScore({
      id: question.id,
      type: question.type,
      weight: question.weight,
      answer,
    })
  }

  if (!question) return <div>더 이상 질문이 없습니다.</div>

  const { title, answers, tags } = question

  return (
    <TestWrapper>
      {/* <div>{JSON.stringify(score)}</div> */}
      <main style={{ width: '100%' }}>
        <Progress percent={progress} />
        <Question title={title} />
        <Tag.TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </Tag.TagContainer>
        <Answer currentAnswer={currentAnswer} sources={answers} onChange={handleAnswerChange} />
        <ActionButton
          disabled={!currentAnswer}
          isEnd={last}
          isStart={first}
          onPrev={handlePrev}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </main>
    </TestWrapper>
  )
}

export default Ntrp
