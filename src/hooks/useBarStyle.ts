import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useThemeStore } from '@/stores'

export const useBarStyle = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode)

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content')
  }, [isDarkMode])
}
