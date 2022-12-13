import React from 'react';
import { ViewProps } from '@/types';
import { Box } from '../Box';

export const Col: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="column" {...props}>
      {children}
    </Box>
  );
};
