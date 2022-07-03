import React from 'react';
import { ViewProps } from '@/types';
import { Box } from '../Box';

export const Col = function ({ children, ...props }: ViewProps) {
  return (
    <Box flexDirection="column" {...props}>
      {children}
    </Box>
  );
};
