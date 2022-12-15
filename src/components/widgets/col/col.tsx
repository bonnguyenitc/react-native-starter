import React from 'react'
import { ViewProps } from '@/shared/types'
import { Box } from '../box'

export const Col: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="column" {...props}>
      {children}
    </Box>
  )
}
