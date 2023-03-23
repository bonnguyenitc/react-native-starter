import React, { useCallback } from 'react'
import RNRestart from 'react-native-restart'

import { Button, Center, Screen, Space, Text } from '@/components/widgets'

type IProps = {
  error: Error
  resetError: () => void
}

export const Crash: React.FC<IProps> = function ({ error, resetError }) {
  const handleResetApp = useCallback(() => {
    resetError()
    RNRestart.Restart()
  }, [resetError])

  return (
    <Screen>
      <Center flex={1}>
        <Text>{__DEV__ ? error.toString() : 'Oops!'}</Text>
        <Space height={32} />
        <Button onPress={handleResetApp} backgroundColor="secondary" labelColor="primary">
          Reset App
        </Button>
      </Center>
    </Screen>
  )
}
