import { TextStyle } from 'react-native'

export type TypoName = 'emoji' | 'normal' | 'light' | 'h1' | 'h2' | 'subTitle'

export const typography: { [key in TypoName]: TextStyle } = {
  emoji: {
    fontSize: 50,
    color: 'text',
    fontFamily: 'Poppins',
  },
  normal: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'text',
    fontFamily: 'Poppins',
  },
  light: {
    fontSize: 16,
    color: 'text',
    fontFamily: 'Poppins',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'text',
    fontFamily: 'Poppins',
  },
  h2: {
    fontSize: 28,
    color: 'text',
    fontFamily: 'Poppins',
  },
  subTitle: {
    fontSize: 14,
    color: 'text',
    fontFamily: 'Poppins',
  },
}
