import React from 'react'
import { ViewProps } from '@/shared/types'
import { Box } from '../box'

export const Positioned: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box position="absolute" {...props}>
      {children}
    </Box>
  )
}
