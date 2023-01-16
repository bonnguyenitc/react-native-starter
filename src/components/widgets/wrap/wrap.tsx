import React from 'react'
import { Box } from '../box'
import { ViewProps } from '@/shared/types'

type Props = {
  children: React.ReactNode
}

export const Wrap: React.FC<Props & ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="row" flexWrap="wrap" {...props}>
      {children}
    </Box>
  )
}
