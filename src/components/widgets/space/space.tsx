import React from 'react'
import { FlexAlignType, StyleProp, ViewStyle } from 'react-native'

import { Box } from '../box/box'
import { ViewProps } from '@/shared/types'

export interface SpaceProps {
  style?: StyleProp<ViewStyle>
  height?: number | string
  width?: number | string
  align?: FlexAlignType
}

export const Space: React.FC<SpaceProps & ViewProps> = function ({
  style = {},
  height = 0,
  width = '100%',
  align = 'flex-start',
  ...props
}) {
  const styles = [style, { height, width }]

  return <Box alignSelf={align} {...props} style={styles} />
}
