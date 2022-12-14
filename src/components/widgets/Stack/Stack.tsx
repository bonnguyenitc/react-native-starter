import React from 'react'
import { ViewProps } from '@/shared/types'
import { Box } from '../Box'

export const Stack: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box {...props}>
      {React.Children.map(children, (child, index) => {
        const length = Array.isArray(children) ? children.length : 0
        return React.cloneElement(child as React.ReactElement<any>, {
          position: 'absolute',
          zIndex: length - index,
        })
      })}
    </Box>
  )
}
