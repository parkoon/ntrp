import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string
      lightGrey: string
      darkGrey: string
      black: string
    }
    size: {
      maxWidth: string
    }
  }
}
