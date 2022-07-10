import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ChildrenProps } from '@/types';
import { Center, Row, Space, Switch, Text } from '@/components/elements';
import { useThemeStore } from '@/stores';

type AuthLayoutProps = {
  title?: string;
  isShowToggleDarkMode?: boolean;
  safe?: boolean;
};

export const AuthLayout: React.FC<ChildrenProps & AuthLayoutProps> = function ({
  children,
  title,
  isShowToggleDarkMode,
  safe = false,
}) {
  const { isDarkMode, toggleMode } = useThemeStore();
  return (
    <MainLayout safe={safe}>
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
    </MainLayout>
  );
};
