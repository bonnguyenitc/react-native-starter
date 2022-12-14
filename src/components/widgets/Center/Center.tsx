import React from 'react'
import { ViewProps } from '@/shared/types'
import { Box } from '../Box'

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
