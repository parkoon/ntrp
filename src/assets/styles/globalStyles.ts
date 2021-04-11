import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.color.black}
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
