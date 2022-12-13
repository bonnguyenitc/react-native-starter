import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { ChildrenProps } from '@/types'
import { Center, Row, Space, Switch, Text } from '@/components/widgets'
import { useThemeStore } from '@/stores'

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
    <Layout safe={safe}>
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
    </Layout>
  )
}
