import React from 'react'

import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'

import { Landing, Login, Register } from '../screens'
import { RouterName } from '@/routes/router-name'

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
    <Stack.Navigator initialRouteName={RouterName.landing} screenOptions={options}>
      <Stack.Screen name={RouterName.register} component={Register} />
      <Stack.Screen name={RouterName.login} component={Login} />
      <Stack.Screen
        name={RouterName.landing}
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
