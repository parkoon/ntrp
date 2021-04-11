import { css } from 'styled-components'

// Ref. https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
export const sizes: { [key: string]: number } = {
  huge: 1200,
  large: 992,
  medium: 768,
  small: 576,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `.join('')
  return acc
}, {} as Record<'huge' | 'large' | 'medium' | 'small', (l: TemplateStringsArray, ...p: any) => string>)

export default media
