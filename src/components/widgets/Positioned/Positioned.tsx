import React from 'react'
import { ViewProps } from '@/types'
import { Box } from '../Box'

export const Positioned: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box position="absolute" {...props}>
      {children}
    </Box>
  )
}