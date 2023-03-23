import React, { useMemo } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import { MotiPressable } from 'moti/interactions'

import { Center } from '../center'
import { Text } from '../text'
import { borderRadiusSizes } from '@/shared/constants'
import { ColorName, TypoName } from '@/shared/themes'
import { palette } from '@/shared/themes/palette'
import { ViewProps } from '@/shared/types'

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
  onPress: () => void
  isModal?: boolean
  style?: StyleProp<ViewStyle>
  labelColor?: ColorName
  shadow?: boolean
  labelVariant?: TypoName
  custom?: boolean
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
  ...props
}) {
  if (isModal) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
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
