import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import ActionButton from '@Components/ActionButton'
import Answer from '@Components/Answer'
import Progress from '@Components/Progress'
import Question from '@Components/Question'
import Tag from '@Components/Tag'

import media from '@Assets/styles/media'

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

function Home() {
  return (
    <TestWrapper>
      <main>
        <Progress percent={20} />
        <Question title="비슷한 수준의 사람들하고 베이스라인 랠리를 천천히 주고받을 수 있고 조금씩 스트로크를 함" />

        <Tag.TagContainer>
          <Tag title="포핸드" />
          <Tag title="포핸드" />
        </Tag.TagContainer>
        <Answer />
        <ActionButton
          text={{ next: 'Next', prev: 'Prev', submit: 'Submit' }}
          isEnd={false}
          isStart={true}
          onPrev={() => {}}
          onNext={() => {}}
          onSubmit={() => {}}
        />
      </main>
    </TestWrapper>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
