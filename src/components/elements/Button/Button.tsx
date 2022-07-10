import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { MotiPressable } from 'moti/interactions';
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

export const Button: React.FC<ButtonProps & ViewProps> = function ({
  children,
  style,
  onPress,
  ...props
}) {
  return (
    <MotiPressable
      onPress={onPress}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet';

            return {
              opacity: hovered || pressed ? 0.6 : 1,
            };
          },
        [],
      )}>
      <Center style={[styleDefault, style]} {...props}>
        {typeof children === 'string' ? (
          <Text variant="normal" color="background">
            {children}
          </Text>
        ) : (
          children
        )}
      </Center>
    </MotiPressable>
  );
};
