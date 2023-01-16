import { palette } from './palette'

export type ColorName =
  | 'transparent'
  | 'background'
  | 'primary'
  | 'primaryDarker'
  | 'line'
  | 'text'
  | 'dim'
  | 'error'
  | 'violet'
  | 'highlight'
  | 'dark'
  | 'black'
  | 'light'
  | 'white'
export const color: { [key in ColorName]: string } = {
  transparent: 'rgba(0, 0, 0, 0)',

  background: palette.white,

  primary: palette.orange,

  primaryDarker: palette.orangeDarker,

  line: palette.offWhite,

  text: palette.black,

  dim: palette.lightGrey,

  error: palette.angry,

  violet: palette.deepPurple,

  highlight: palette.blue,

  dark: palette.black,

  black: palette.black,

  light: palette.white,

  white: palette.white,
}
