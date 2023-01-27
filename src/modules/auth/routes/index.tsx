import React from 'react'

import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'

import { Landing, Login, Register } from '../screens'

export type AuthStackParamList = {
  register: undefined
  login: undefined
  landing: undefined
}

const options: StackNavigationOptions = {
  headerShown: true,
  ...TransitionPresets.SlideFromRightIOS,
}

const Stack = createStackNavigator<AuthStackParamList>()

export const AuthRoutes: React.FC = function () {
  return (
    <Stack.Navigator initialRouteName="landing" screenOptions={options}>
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen
        name="landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
