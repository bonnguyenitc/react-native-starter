import React, { useEffect, useMemo } from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ModalPortal } from 'react-native-modals'
import { AppRoutes } from '@/routes'
import { darkTheme, lightTheme } from '@/themes'
import { useThemeStore } from '@/stores/themes'
import { useAuthStore } from '@/features/auth/stores/auth'
import { ErrorBoundary } from '@/features/error/components/ErrorBoundary'
import { useBarStyle } from '@/hooks/useBarStyle'

export const AppProvider: React.FC = function () {
  useBarStyle()
  const checkLoggedIn = useAuthStore(state => state.checkLoggedInAction)
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode])

  useEffect(() => {
    checkLoggedIn()
  }, [checkLoggedIn])

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ErrorBoundary catchErrors="dev">
          <AppRoutes />
        </ErrorBoundary>
      </SafeAreaProvider>
      <ModalPortal />
    </ThemeProvider>
  )
}
