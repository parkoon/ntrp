import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@Assets/styles/globalStyles'
import theme from '@Assets/styles/theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
