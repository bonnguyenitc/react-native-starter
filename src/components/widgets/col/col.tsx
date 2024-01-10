import React from 'react'

import { Box } from '../box'
import { ViewProps } from '@/common/types'

export const Col: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="column" {...props}>
      {children}
    </Box>
  )
}
