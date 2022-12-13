import React, { useEffect } from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ModalPortal } from 'react-native-modals'
import { AppRoutes } from '@/routes'
import { darkTheme, lightTheme } from '@/themes'
import { useThemeStore } from '@/stores/themes'
import { useAuthStore } from '@/features/auth/stores/auth'
import { ErrorBoundary } from '@/features/error/components/ErrorBoundary'

export const AppProvider: React.FC = function () {
  const { isDarkMode } = useThemeStore()
  const { checkLoggedInAction } = useAuthStore()

  useEffect(() => {
    checkLoggedInAction()
  }, [checkLoggedInAction])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaProvider>
        <ErrorBoundary catchErrors="dev">
          <AppRoutes />
        </ErrorBoundary>
      </SafeAreaProvider>
      <ModalPortal />
    </ThemeProvider>
  )
}
