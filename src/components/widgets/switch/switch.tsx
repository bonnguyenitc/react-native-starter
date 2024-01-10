import React, { useMemo } from 'react'
import { Pressable, View } from 'react-native'
import { Easing } from 'react-native-reanimated'

import { MotiTransitionProp, MotiView } from 'moti'

import { MotiColor } from '../moti-color'
import { useTheme } from '@/common/themes'

type SwitchProps = {
  isActive?: boolean
  onPress?: () => void
  size: number
}

const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
}

export const Switch: React.FC<SwitchProps> = function ({ isActive, onPress, size }) {
  const trackWitch = useMemo(() => {
    return size
  }, [size])

  const trackHeight = useMemo(() => {
    return size * 0.5
  }, [size])

  const { colors } = useTheme()

  return (
    <Pressable onPress={onPress}>
      <View
        style={useMemo(
          () => ({
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
          }),
          [size],
        )}>
        <MotiColor
          backgroundColor="background.switch"
          style={useMemo(
            () => ({
              width: trackWitch,
              height: trackHeight,
              borderRadius: trackHeight / 2,
              borderWidth: 1,
              borderColor: colors['background.switch'],
            }),
            [colors, trackHeight, trackWitch],
          )}
        />
        <MotiView
          transition={transition}
          animate={useMemo(
            () => ({
              translateX: isActive ? trackWitch * 0.25 : -trackWitch * 0.25,
            }),
            [isActive, trackWitch],
          )}
          style={useMemo(
            () => ({
              position: 'absolute',
              width: trackHeight * 0.8,
              height: trackHeight * 0.8,
              borderRadius: (trackHeight * 0.8) / 2,
              backgroundColor: colors['background.switchTrack'],
            }),
            [colors, trackHeight],
          )}
        />
      </View>
    </Pressable>
  )
}
