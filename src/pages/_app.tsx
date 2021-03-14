import { produce } from 'immer'
import { appWithTranslation } from 'next-i18next'
import { atom, RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil'
import { ThemeProvider } from 'styled-components'

import DebugObserver from '@Components/DebugObserver'

import { IAnswer } from '@Interfaces/Ntrp'

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

export function useNtrpScoreActions() {
  const set = useSetRecoilState(ntrpScoreState)

  const setUserNtrpScore = (userNtrp: UserNtrp) => {
    set((prev) =>
      produce(prev, (draft) => {
        const exist = draft.find((ns) => ns.id === userNtrp.id)

        if (!exist) return prev.concat(userNtrp)

        Object.assign(exist, userNtrp)
      })
    )
  }

  return {
    setUserNtrpScore,
  }
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

export default appWithTranslation(App)
