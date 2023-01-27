import React from 'react'

import { Box } from '../box'
import { ViewProps } from '@/shared/types'

const Alignment = {
  bottomCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomLeft: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  bottomRight: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  topCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topLeft: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  topRight: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
}

type Props = {
  alignment?: keyof typeof Alignment
}

export const Align: React.FC<Props & ViewProps> = function ({
  children,
  alignment = 'center',
  ...props
}) {
  return (
    <Box {...(Alignment[alignment] as ViewProps)} {...props}>
      {children}
    </Box>
  )
}
