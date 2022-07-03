import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from '@/features/auth/routes';
import { useAuth } from '@/features/auth/stores/auth';
import { HomeRoutes } from '@/features/home/routes';

export const AppRoutes = function () {
  const { isLoggedIn } = useAuth();
  return <NavigationContainer>{!isLoggedIn ? <AuthRoutes /> : <HomeRoutes />}</NavigationContainer>;
};
