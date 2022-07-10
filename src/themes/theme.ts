import { createTheme } from '@shopify/restyle';
import { color } from './color';

import { palette } from './palette';
import { spacing } from './spacing';

export const lightTheme: any = createTheme({
  colors: {
    ...color,
  },
  spacing: {
    ...spacing,
  },
  textInputVariants: {
    defaults: {
      fontSize: 16,
      color: 'text',
      fontFamily: 'Poppins',
    },
  },
  textVariants: {
    emoji: {
      fontSize: 50,
      color: 'text',
      fontFamily: 'Poppins',
    },
    defaults: {
      fontSize: 16,
      color: 'text',
      fontFamily: 'Poppins',
    },
    normal: {
      fontWeight: 'bold',
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
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  isDark: false,
});

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
  ...lightTheme,
  isDark: true,
  colors: {
    ...lightTheme.colors,
    background: palette.black,
    highlight: palette.white,
    text: palette.white,
  },
};
