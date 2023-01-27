import React, { useEffect, useMemo } from 'react'
import { Alert } from 'react-native'
import { ModalPortal } from 'react-native-modals'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider } from '@shopify/restyle'

import { useAuthStore } from '@/modules/auth/stores'
import { ErrorBoundary } from '@/modules/error/components'
import { AppRoutes } from '@/routes'
import { useBarStyle } from '@/shared/hooks'
import { EventRegister, EVENTS } from '@/shared/libs/event-register'
import { useThemeStore } from '@/shared/stores'
import { darkTheme, lightTheme } from '@/shared/themes'

export const AppProvider: React.FC = function () {
  useBarStyle()
  const checkLoggedIn = useAuthStore(state => state.checkLoggedInAction)
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode])

  useEffect(() => {
    checkLoggedIn()
    EventRegister.on(EVENTS.EVENT_LOGOUT, () => {
      Alert.alert("I'm an event!")
    })
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
