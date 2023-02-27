import { useCallback, useEffect, useRef, useState } from 'react'
import { BackHandler } from 'react-native'

import {
  createNavigationContainerRef,
  NavigationAction,
  NavigationState,
  PartialState,
} from '@react-navigation/native'

/* eslint-disable */
export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any
  },
  dispatch(_action: NavigationAction) {},
}
/* eslint-enable */

export const navigationRef = createNavigationContainerRef()

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>): string {
  if (!state) return ''

  const route = state.routes[state.index || 0]

  // Found the active route -- return the name
  if (!route.state) return route.name

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state)
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  const canExitRef = useRef(canExit)

  useEffect(() => {
    canExitRef.current = canExit
  }, [canExit])

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState())

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // exit and let the system know we've handled the event
        BackHandler.exitApp()
        return true
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack()
        return true
      }

      return false
    }

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress)

    // Unsubscribe when we're done
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  }, [])
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState()

  const [isRestored, setIsRestored] = useState(!__DEV__)

  const routeNameRef = useRef<string | undefined>()

  const onNavigationStateChange = (state: NavigationState | PartialState<NavigationState>) => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = getActiveRouteName(state)

    if (previousRouteName !== currentRouteName) {
      // track screens.
    }

    routeNameRef.current = currentRouteName

    // Persist state to storage
    storage.save(persistenceKey, state)
  }

  const restoreState = useCallback(async () => {
    try {
      const state = await storage.load(persistenceKey)
      if (state) setInitialNavigationState(state)
    } finally {
      setIsRestored(true)
    }
  }, [persistenceKey, storage])

  useEffect(() => {
    if (!isRestored) restoreState()
  }, [isRestored, restoreState])

  return { onNavigationStateChange, restoreState, isRestored, initialNavigationState }
}

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never)
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export function resetRoot(params = { index: 0, routes: [] }) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params)
  }
}

export function isNavigationReady() {
  return navigationRef.isReady()
}

export function getNavState() {
  return isNavigationReady() ? navigationRef.getState() : undefined
}

export function getNavRootState() {
  return navigationRef?.current?.getRootState()
}
