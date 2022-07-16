import React, { useMemo } from 'react';
import { StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
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
  isModal?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button: React.FC<ButtonProps & ViewProps> = function ({
  children,
  style,
  onPress,
  isModal,
  ...props
}) {
  if (isModal) {
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
  }
  return (
    <MotiPressable
      onPress={onPress}
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
