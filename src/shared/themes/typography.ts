import { TextStyle } from 'react-native'

export type TypoName = 'emoji' | 'normal' | 'light' | 'h1' | 'h2' | 'subTitle'

export const typography: { [key in TypoName]: TextStyle } = {
  emoji: {
    fontSize: 50,
    color: 'text.default',
    fontFamily: 'Poppins',
  },
  normal: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'text.default',
    fontFamily: 'Poppins',
  },
  light: {
    fontSize: 16,
    color: 'text.default',
    fontFamily: 'Poppins',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'text.default',
    fontFamily: 'Poppins',
  },
  h2: {
    fontSize: 28,
    color: 'text.default',
    fontFamily: 'Poppins',
  },
  subTitle: {
    fontSize: 14,
    color: 'text.default',
    fontFamily: 'Poppins',
  },
}
