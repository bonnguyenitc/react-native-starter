import React from 'react'

import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'

export type StackParamList = {
  demo: undefined
}

const options: StackNavigationOptions = {
  headerShown: true,
  ...TransitionPresets.SlideFromRightIOS,
}

const Stack = createStackNavigator<StackParamList>()

export const AuthRoutes: React.FC = function () {
  return (
    <Stack.Navigator initialRouteName="demo" screenOptions={options}>
      {/* <Stack.Screen
        name="demo"
        component={Demo}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  )
}
