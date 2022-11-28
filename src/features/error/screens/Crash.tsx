import React from 'react';
import RNRestart from 'react-native-restart';
import { MainLayout } from '@/components/layout';
import { Button, Center, Space, Text } from '@/components/elements';
import { useThemeStore } from '@/stores';

interface IProps {
  error: Error;
  resetError?: () => void;
}

function Crash({ error, resetError }: IProps) {
  const handleResetApp = () => RNRestart.Restart();

  const { isDarkMode } = useThemeStore();

  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default Crash;
