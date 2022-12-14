import React from 'react'
import { ViewProps } from '@/shared/types'
import { Box } from '../Box'

export const Row: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="row" {...props}>
      {children}
    </Box>
  )
}
