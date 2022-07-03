import React from 'react';
import { ViewProps } from '@/types';
import { Box } from '../Box';

export const Row = function ({ children, ...props }: ViewProps) {
  return (
    <Box flexDirection="row" {...props}>
      {children}
    </Box>
  );
};
