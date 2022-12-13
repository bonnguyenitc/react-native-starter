import React, { useMemo } from 'react';
import { MotiTransitionProp, MotiView } from 'moti';
import { Pressable, View } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { useTheme } from '@/themes';

type SwitchProps = {
  isActive?: boolean;
  onPress?: () => void;
  size: number;
};

const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

export const Switch: React.FC<SwitchProps> = function ({ isActive, onPress, size }) {
  const trackWitch = useMemo(() => {
    return size;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.5;
  }, [size]);

  const { colors } = useTheme();

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
        }}>
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? colors.dark : colors.light,
          }}
          animate={{
            backgroundColor: isActive ? colors.light : colors.dark,
          }}
          style={{
            width: trackWitch,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            borderWidth: 1,
            borderColor: colors.dark,
          }}
        />
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWitch * 0.25 : -trackWitch * 0.25,
          }}
          style={{
            position: 'absolute',
            width: trackHeight * 0.8,
            height: trackHeight * 0.8,
            borderRadius: (trackHeight * 0.8) / 2,
            backgroundColor: isActive ? colors.dark : colors.light,
          }}
        />
      </View>
    </Pressable>
  );
};
