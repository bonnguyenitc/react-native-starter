import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { AuthRoutes } from '@/features/auth/routes';
import { useAuth } from '@/features/auth/stores/auth';
import { HomeRoutes } from '@/features/home/routes';
import { useThemeStore } from '@/stores';

export const AppRoutes = function () {
  const { isLoggedIn } = useAuth();
  const { isDarkMode } = useThemeStore();
  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : DefaultTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      {!isLoggedIn ? <AuthRoutes /> : <HomeRoutes />}
    </NavigationContainer>
  );
};
