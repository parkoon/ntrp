import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import ActionButton from '@Components/ActionButton'
import Answer from '@Components/Answer'
import Progress from '@Components/Progress'
import Question from '@Components/Question'

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
  const { t } = useTranslation('common')
  return (
    <TestWrapper>
      {t('saying')}
      <main>
        <Progress percent={100} />
        <Question title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum placeat impedit" />
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
