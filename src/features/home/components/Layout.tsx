import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ChildrenProps } from '@/types';
import { Center, Space, Text } from '@/components/elements';

type HomeLayoutProps = {
  title?: string;
};

export const HomeLayout = function ({ children, title }: ChildrenProps & HomeLayoutProps) {
  return (
    <MainLayout>
      <Center flex={1}>
        <Text variant="h1">{title}</Text>
        <Space height={32} />
        {children}
      </Center>
    </MainLayout>
  );
};
