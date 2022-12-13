import React, { useCallback } from 'react'
import RNRestart from 'react-native-restart'
import { Layout } from '@/components/layout'
import { Button, Center, Space, Text } from '@/components/widgets'
import { useThemeStore } from '@/stores'

interface IProps {
  error: Error
  resetError?: () => void
}

function Crash({ error, resetError }: IProps) {
  const handleResetApp = useCallback(() => {
    resetError?.()
    RNRestart.Restart()
  }, [resetError])

  const { isDarkMode } = useThemeStore()

  return (
    <Layout>
      <Center flex={1}>
        <Text>{__DEV__ ? error.toString() : 'Oops!'}</Text>
        <Space height={32} />
        <Button
          onPress={handleResetApp}
          backgroundColor={isDarkMode ? 'light' : 'dark'}
          labelColor={!isDarkMode ? 'light' : 'dark'}>
          Reset App
        </Button>
      </Center>
    </Layout>
  )
}

export default Crash
