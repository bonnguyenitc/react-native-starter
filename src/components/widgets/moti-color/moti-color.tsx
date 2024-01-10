import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { MotiView } from 'moti'

import { transitions } from '@/common/constants'
import { ColorName, useTheme } from '@/common/themes'
import { ViewProps } from '@/common/types'

type Props = {
  // components's props
  backgroundColor: ColorName
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */

export const MotiColor: React.FC<Props & ViewProps> = function ({
  children,
  backgroundColor,
  style,
}: Props) {
  const theme = useTheme()
  return (
    <MotiView
      transition={transitions.screen}
      from={{
        backgroundColor: theme.colors[backgroundColor],
      }}
      animate={{
        backgroundColor: theme.colors[backgroundColor],
      }}
      style={style}>
      {children}
    </MotiView>
  )
}
