import React from 'react';
import { KeysColor, KeysTypo } from '@/themes';
import { Text } from '../Text/Text';
import { Touchable } from '../Touchable';

type Props = {
  label: string;
  variant?: KeysTypo;
  color?: KeysColor;
  onPress: () => void;
};

export const TextButton: React.FC<Props> = function ({
  label,
  variant = 'normal',
  color = 'dark',
  onPress,
}) {
  return (
    <Touchable onPress={onPress}>
      <Text variant={variant} color={color}>
        {label}
      </Text>
    </Touchable>
  );
};
