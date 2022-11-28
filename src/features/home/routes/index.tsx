import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import { Home } from '../screens/Home';

export type HomeStackParamList = {
  home: undefined;
};

const options: StackNavigationOptions = {
  headerShown: true,
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator<HomeStackParamList>();

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
