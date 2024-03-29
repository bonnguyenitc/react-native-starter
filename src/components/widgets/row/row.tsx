import React from 'react'

import { Box } from '../box'
import { ViewProps } from '@/common/types'

export const Row: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="row" {...props}>
      {children}
    </Box>
  )
}
