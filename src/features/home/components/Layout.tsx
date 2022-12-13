import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { ChildrenProps } from '@/types'
import { Center, Space, Text } from '@/components/widgets'

type HomeLayoutProps = {
  title?: string
}

export const HomeLayout = function ({ children, title }: ChildrenProps & HomeLayoutProps) {
  return (
    <Layout>
      <Center flex={1}>
        <Text variant="h1">{title}</Text>
        <Space height={32} />
        {children}
      </Center>
    </Layout>
  )
}
