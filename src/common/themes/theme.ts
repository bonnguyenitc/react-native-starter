import { createTheme, useTheme as useThemeRS } from '@shopify/restyle'

import { color } from './color'
import { palette } from './palette'
import { spacing } from './spacing'
import { typography } from './typography'

export const lightTheme = createTheme({
  colors: {
    ...color,
  },
  spacing: {
    ...spacing,
  },
  textInputVariants: {
    defaults: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Poppins',
      lineHeight: 16 * 1.5,
    },
    normal: {
      fontSize: 16,
      color: 'text.default',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'text.default',
      fontFamily: 'Poppins',
    },
    ...typography,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  isDark: false,
})

export type Theme = typeof lightTheme

export const darkTheme: Theme = {
  ...lightTheme,
  isDark: true,
  colors: {
    ...lightTheme.colors,
    'background.default': palette.black,
    highlight: palette.white,
    'text.default': palette.white,
    primary: palette.black,
    secondary: palette.white,
    'background.switch': palette.white,
    'background.switchTrack': palette.black,
  },
}

export const useTheme = () => useThemeRS<Theme>()
