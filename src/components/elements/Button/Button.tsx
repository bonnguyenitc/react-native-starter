import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { ViewProps } from '@/types';
import { Text } from '../Text';
import { Center } from '../Center';

const styleDefault: ViewStyle = {
  padding: 16,
  borderRadius: 32,
};

type ButtonProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Button = function ({ children, style, onPress, ...props }: ButtonProps & ViewProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Center style={[styleDefault, style]} {...props}>
        {typeof children === 'string' ? (
          <Text variant="normal" color="background">
            {children}
          </Text>
        ) : (
          children
        )}
      </Center>
    </TouchableOpacity>
  );
};
