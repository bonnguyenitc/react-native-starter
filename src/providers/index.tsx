import React, { useEffect, useMemo } from 'react'
import { Alert } from 'react-native'
import { ModalPortal } from 'react-native-modals'
import { RootSiblingParent } from 'react-native-root-siblings'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider } from '@shopify/restyle'

import { useBarStyle } from '@/common/hooks'
import { useThemeStore } from '@/common/stores'
import { darkTheme, lightTheme } from '@/common/themes'
import { EventRegister, EVENTS } from '@/common/utils/event-register'
import { useAuthStore } from '@/modules/auth/stores'
import { ErrorBoundary } from '@/modules/error/components'
import { AppRoutes } from '@/routes'

export const AppProviders: React.FC = function () {
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
      <RootSiblingParent>
        <SafeAreaProvider>
          <ErrorBoundary catchErrors="dev">
            <AppRoutes />
          </ErrorBoundary>
        </SafeAreaProvider>
        <ModalPortal />
      </RootSiblingParent>
    </ThemeProvider>
  )
}
