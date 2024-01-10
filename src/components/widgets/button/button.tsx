import React, { useMemo } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import { MotiPressable } from 'moti/interactions'

import { Center } from '../center'
import { Text } from '../text'
import { borderRadiusSizes } from '@/common/constants'
import { ColorName, TypoName } from '@/common/themes'
import { palette } from '@/common/themes/palette'
import { ViewProps } from '@/common/types'

const styleDefault: ViewStyle = {
  padding: 8,
  paddingHorizontal: 16,
  borderRadius: borderRadiusSizes.xl,
}

const SHADOW: ViewStyle = {
  elevation: 5,
  shadowColor: palette.black,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.4,
  shadowRadius: 10,
}

type ButtonProps = {
  onPress?: () => void
  isModal?: boolean
  style?: StyleProp<ViewStyle>
  labelColor?: ColorName
  shadow?: boolean
  labelVariant?: TypoName
  custom?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps & ViewProps> = function ({
  children,
  style = {},
  onPress,
  isModal = false,
  labelColor = 'primary',
  shadow = false,
  labelVariant = 'normal',
  custom = false,
  disabled = false,
  ...props
}) {
  if (isModal) {
    return (
      <TouchableOpacity disabled={!onPress || disabled} onPress={onPress} activeOpacity={0.6}>
        <Center style={[!custom && styleDefault, style, shadow && SHADOW]} {...props}>
          {typeof children === 'string' ? (
            <Text variant={labelVariant} color={labelColor}>
              {children}
            </Text>
          ) : (
            children
          )}
        </Center>
      </TouchableOpacity>
    )
  }
  return (
    <MotiPressable
      disabled={!onPress || disabled}
      onPress={onPress}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet'

            return {
              opacity: hovered || pressed ? 0.6 : 1,
            }
          },
        [],
      )}>
      <Center style={[!custom && styleDefault, style, shadow && SHADOW]} {...props}>
        {typeof children === 'string' ? (
          <Text variant={labelVariant} color={labelColor}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Center>
    </MotiPressable>
  )
}
