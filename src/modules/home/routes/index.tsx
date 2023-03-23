import React from 'react'

import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'

import { Home } from '../screens'
import { RouterName } from '@/routes/router-name'

export type HomeStackParamList = {
  home: undefined
}

const options: StackNavigationOptions = {
  headerShown: true,
  ...TransitionPresets.SlideFromRightIOS,
}

const Stack = createStackNavigator<HomeStackParamList>()

export const HomeRoutes: React.FC = function () {
  return (
    <Stack.Navigator initialRouteName={RouterName.home} screenOptions={options}>
      <Stack.Screen
        name={RouterName.home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
