import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
