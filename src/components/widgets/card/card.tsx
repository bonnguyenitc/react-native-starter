import React from 'react'

import { Box } from '../box'
import { borderRadiusSizes } from '@/common/constants'
import { ViewProps } from '@/common/types'

export const Card: React.FC<ViewProps> = function (props) {
  return (
    <Box
      backgroundColor="background.default"
      borderRadius={borderRadiusSizes.tiny}
      shadowColor="secondary"
      shadowOffset={{
        width: 0,
        height: 0,
      }}
      shadowOpacity={0.5}
      shadowRadius={1}
      elevation={5}
      {...props}
    />
  )
}
