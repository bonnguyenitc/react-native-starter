import React from 'react'

import { Center, Screen, Space, Text } from '@/components/widgets'
import { ChildrenProps } from '@/shared/types'

type HomeLayoutProps = {
  title?: string
}

export const HomeLayout: React.FC<ChildrenProps & HomeLayoutProps> = function ({
  children,
  title,
}) {
  return (
    <Screen>
      <Center flex={1}>
        <Text variant="h1">{title}</Text>
        <Space height={32} />
        {children}
      </Center>
    </Screen>
  )
}
