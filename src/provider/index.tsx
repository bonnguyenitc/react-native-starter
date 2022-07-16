import React, { useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
import ErrorBoundary from 'react-native-error-boundary';
import { AppRoutes } from '@/routes';
import { darkTheme, lightTheme } from '@/themes';
import { useThemeStore } from '@/stores/themes';
import { useAuth } from '@/features/auth/stores/auth';
import Crash from '@/features/error/screens/Crash';

export const AppProvider = function () {
  const { isDarkMode } = useThemeStore();
  const { checkLoggedIn } = useAuth();
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  const errorHandler = (error: Error, stackTrace: string) => {
    // send error to service log
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaProvider>
        <ErrorBoundary onError={errorHandler} FallbackComponent={Crash}>
          <AppRoutes />
        </ErrorBoundary>
      </SafeAreaProvider>
      <ModalPortal />
    </ThemeProvider>
  );
};
