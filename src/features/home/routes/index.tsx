import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

type HomeStackParamList = {
  home: undefined;
};

const options: NativeStackNavigationOptions = {
  headerShown: true,
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeRoutes = function () {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={options}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
