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

import ntrpQuestions from '@Constants/ntrp/questions'

import media from '@Assets/styles/media'

import { useNtrpScoreActions, ntrpScoreState } from '../_app'

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
  const { setUserNtrpScore } = useNtrpScoreActions()
  const score = useRecoilValue(ntrpScoreState)

  const question = ntrpQuestions[Number(Router.query.id)]

  console.log()
  const handleNext = () => {
    Router.push(String(Number(Router.query.id) + 1))
  }
  const handlePrev = () => {
    Router.push(String(Number(Router.query.id) + -1))
  }
  const handleSubmit = () => {}

  const handleAnswerChange = (answer: IAnswer) => {
    // updateScore(question.id, question.weight * answer.weight)

    setUserNtrpScore({
      id: question.id,
      type: question.type,
      weight: question.weight,
      answer,
    })

    // console.log('question', question)
    // console.log(answer)
  }

  if (!question) return <div>더 이상 질문이 없습니다.</div>

  const { title, answers, skillName, tags, weight } = question

  return (
    <TestWrapper>
      <div>{JSON.stringify(score)}</div>
      <main>
        <Progress percent={20} />
        <Question title={title} />

        <Tag.TagContainer>
          <Tag title="포핸드" />
          <Tag title="스트로크" />
          <Tag title="안정성" />
        </Tag.TagContainer>
        <Answer sources={answers} onChange={handleAnswerChange} />
        <ActionButton
          text={{ next: '다음', prev: 'Prev', submit: 'Submit' }}
          isEnd={false}
          isStart={true}
          onPrev={handlePrev}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </main>
    </TestWrapper>
  )
}

export default Ntrp
