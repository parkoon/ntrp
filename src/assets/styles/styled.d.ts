import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string
      grey: string
      lightGrey: string
      darkGrey: string
      black: string
      border: string
      error: string
      white: string
    }
    size: {
      maxWidth: string
    }
    border: {
      radius: string
    }
  }
}
