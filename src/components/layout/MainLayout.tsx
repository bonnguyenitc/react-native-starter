import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Col } from '../elements/Col';

type MainLayoutProps = {
  children: React.ReactNode;
  safe?: boolean;
};

export const MainLayout = function ({ children, safe = false }: MainLayoutProps) {
  if (!safe)
    return (
      <Col flex={1} backgroundColor="background">
        {children}
      </Col>
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Col flex={1} backgroundColor="background">
        {children}
      </Col>
    </SafeAreaView>
  );
};
