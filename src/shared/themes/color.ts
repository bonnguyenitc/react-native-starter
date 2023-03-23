import { palette } from './palette'

export type ColorName =
  | 'transparent'
  | 'background.default'
  | 'primary'
  | 'secondary'
  | 'line'
  | 'text.default'
  | 'dim'
  | 'error'
  | 'highlight'
  | 'background.switchTrack'
  | 'background.switch'
  | 'shadow.default'

export const color: { [key in ColorName]: string } = {
  transparent: 'rgba(0, 0, 0, 0)',

  'background.default': palette.white,

  primary: palette.white,

  secondary: palette.black,

  line: palette.offWhite,

  'text.default': palette.black,

  dim: palette.lightGrey,

  error: palette.angry,

  highlight: palette.blue,

  'background.switch': palette.black,
  'background.switchTrack': palette.white,
  'shadow.default': palette.black,
}
