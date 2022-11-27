import { createTheme, useTheme as useThemeRS } from '@shopify/restyle';
import { color } from './color';
import { palette } from './palette';
import { spacing } from './spacing';

export type KeysColor = keyof typeof color;

export const lightTheme = createTheme({
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
    normal: {
      fontSize: 16,
      color: 'text',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'text',
      fontFamily: 'Poppins',
    },
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
    dark: palette.white,
    light: palette.black,
  },
};

export const useTheme = () => useThemeRS<Theme>();
