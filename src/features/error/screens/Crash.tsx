import React from 'react';
import RNRestart from 'react-native-restart';
import { useTheme } from '@shopify/restyle';
import { MainLayout } from '@/components/layout';
import { Button, Center, Space, Text } from '@/components/elements';

interface IProps {
  error: Error;
  resetError?: () => void;
}

function Crash({ error, resetError }: IProps) {
  const handleResetApp = () => RNRestart.Restart();

  const { isDark } = useTheme();

  return (
    <MainLayout>
      <Center flex={1}>
        <Text>{__DEV__ ? error.toString() : 'Oops!'}</Text>
        <Space height={32} />
        <Button onPress={handleResetApp} backgroundColor={isDark ? 'light' : 'dark'}>
          Reset App
        </Button>
      </Center>
    </MainLayout>
  );
}

export default Crash;
