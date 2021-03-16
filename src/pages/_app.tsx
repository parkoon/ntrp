import { produce } from 'immer'
import {
  atom,
  RecoilRoot,
  useSetRecoilState,
  useRecoilValue,
  selector,
  selectorFamily,
} from 'recoil'
import { ThemeProvider } from 'styled-components'

import DebugObserver from '@Components/DebugObserver'

import { IAnswer } from '@Interfaces/Ntrp'

import questions from '@Constants/ntrp/questions'

import GlobalStyles from '@Assets/styles/globalStyles'
import theme from '@Assets/styles/theme'

export type UserNtrp = {
  id: number
  type: 'stroke' | 'volley'
  answer: IAnswer
  weight: number
}

export const ntrpScoreState = atom<UserNtrp[]>({
  key: 'progressStage',
  default: [],
})

const MAX_NTRP = 7

export function useNtrpScoreActions() {
  const set = useSetRecoilState(ntrpScoreState)
  const value = useRecoilValue(ntrpScoreState)

  const setUserNtrpScore = (userNtrp: UserNtrp) => {
    set((prev) =>
      produce(prev, (draft) => {
        const exist = draft.find((ns) => ns.id === userNtrp.id)

        if (!exist) return prev.concat(userNtrp)

        Object.assign(exist, userNtrp)
      })
    )
  }

  const calcUserNtrp = () => {
    let totalWeight = 0
    let calculatedScore = 0
    value.forEach((v) => {
      totalWeight += v.weight
      calculatedScore += v.weight * v.answer.weight
    })

    return (calculatedScore * MAX_NTRP) / totalWeight
  }

  return {
    setUserNtrpScore,
    calcUserNtrp,
  }
}

export function useNtrpScoreValue() {
  return useRecoilValue(ntrpScoreState)
}

const currentNtrpAnswer = selectorFamily({
  key: 'currentNtrp',
  get: (id: number) => ({ get }) => {
    const score = get(ntrpScoreState)
    return score.find((s) => s.id === id)?.answer
  },
})

const ntrpScoreProgress = selector({
  key: 'ntrpScoreProgress',
  get: ({ get }) => {
    const score = get(ntrpScoreState)
    return (score.length / Object.keys(questions).length) * 100
  },
})

export function useCurrentNtrpAnswer(id: number) {
  return useRecoilValue(currentNtrpAnswer(id))
}

export function useNtrpScoreProgress() {
  return useRecoilValue(ntrpScoreProgress)
}

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <DebugObserver />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
