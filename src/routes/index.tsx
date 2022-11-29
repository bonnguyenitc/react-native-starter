import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthRoutes, AuthStackParamList } from '@/features/auth/routes';
import { useAuthStore } from '@/features/auth/stores/auth';
import { HomeRoutes, HomeStackParamList } from '@/features/home/routes';
import { useThemeStore } from '@/stores';
import { navigationRef } from '@/utils/navigation-utilities';

export type StackParamList = AuthStackParamList & HomeStackParamList;

export type AppNavigationProp = StackNavigationProp<StackParamList>;

export const AppRoutes = function () {
  const { isLoggedIn } = useAuthStore();
  const { isDarkMode } = useThemeStore();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={isDarkMode ? DarkTheme : DefaultTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      {!isLoggedIn ? <AuthRoutes /> : <HomeRoutes />}
    </NavigationContainer>
  );
};
