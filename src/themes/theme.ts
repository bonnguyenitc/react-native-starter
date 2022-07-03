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
    },
  },
  textVariants: {
    emoji: {
      fontSize: 50,
      color: 'text',
    },
    defaults: {
      fontSize: 16,
      color: 'text',
    },
    normal: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'text',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: 28,
      color: 'text',
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
