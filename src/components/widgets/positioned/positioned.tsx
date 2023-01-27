import React from 'react'

import { Box } from '../box'
import { ViewProps } from '@/shared/types'

export const Positioned: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box position="absolute" {...props}>
      {children}
    </Box>
  )
}
