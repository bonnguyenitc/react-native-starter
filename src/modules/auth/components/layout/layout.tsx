import React from 'react'

import { Center, Row, Screen, Space, Switch, Text } from '@/components/widgets'
import { useThemeStore } from '@/shared/stores'
import { ChildrenProps } from '@/shared/types'

type AuthLayoutProps = {
  title?: string
  isShowToggleDarkMode?: boolean
  safe?: boolean
}

export const AuthLayout: React.FC<ChildrenProps & AuthLayoutProps> = function ({
  children,
  title,
  isShowToggleDarkMode,
  safe = false,
}) {
  const { isDarkMode, toggleMode } = useThemeStore()
  return (
    <Screen safe={safe}>
      {isShowToggleDarkMode && (
        <Row justifyContent="flex-end" padding="small">
          <Switch size={60} isActive={isDarkMode} onPress={toggleMode} />
        </Row>
      )}
      <Center flex={1}>
        <Text variant="h1">{title}</Text>
        <Space height={32} />
        {children}
      </Center>
    </Screen>
  )
}
