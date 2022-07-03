import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Register } from '../screens/Register';
import { Login } from '../screens/Login';
import { Landing } from '../screens/Landing';

type AuthStackParamList = {
  register: undefined;
  login: undefined;
  landing: undefined;
};

const options: NativeStackNavigationOptions = {
  headerShown: true,
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes = function () {
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
  );
};
