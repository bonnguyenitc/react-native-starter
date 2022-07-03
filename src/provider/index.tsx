import React, { useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
import { AppRoutes } from '@/routes';
import { darkTheme, lightTheme } from '@/themes';
import { useThemeStore } from '@/stores/themes';
import { useAuth } from '@/features/auth/stores/auth';

export const AppProvider = function () {
  const { isDarkMode } = useThemeStore();
  const { checkLoggedIn } = useAuth();
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaProvider>
        <AppRoutes />
      </SafeAreaProvider>
      <ModalPortal />
    </ThemeProvider>
  );
};
