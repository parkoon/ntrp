import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
