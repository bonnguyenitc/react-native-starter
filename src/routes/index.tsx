import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { AuthRoutes } from '@/features/auth/routes';
import { useAuth } from '@/features/auth/stores/auth';
import { HomeRoutes } from '@/features/home/routes';

export const AppRoutes = function () {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      {!isLoggedIn ? <AuthRoutes /> : <HomeRoutes />}
    </NavigationContainer>
  );
};
