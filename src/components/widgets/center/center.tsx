import React from 'react'

import { Box } from '../box'
import { ViewProps } from '@/common/types'

export interface CenterProps {
  horizontal?: boolean
  vertical?: boolean
}

export const Center: React.FC<ViewProps & CenterProps> = function ({
  horizontal = false,
  vertical = false,
  children = null,
  ...props
}) {
  return (
    <Box
      alignItems={(horizontal && !vertical) || (!horizontal && !vertical) ? 'center' : 'flex-start'}
      justifyContent={
        (vertical && !horizontal) || (!horizontal && !vertical) ? 'center' : 'flex-start'
      }
      {...props}>
      {children}
    </Box>
  )
}
