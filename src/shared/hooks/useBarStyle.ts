import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useThemeStore } from '@/shared/stores'

export const useBarStyle = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode)

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content')
  }, [isDarkMode])
}
