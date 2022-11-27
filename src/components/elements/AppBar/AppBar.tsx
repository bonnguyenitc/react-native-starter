import React from 'react';
import { ViewProps } from '@/types';
import { Row } from '../Row';
import { WIDTH } from '@/global';
import { Text } from '../Text';
import { Center } from '../Center';

type Props = {
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
};

export const AppBar: React.FC<ViewProps & Props> = function ({ leading, actions, title }) {
  return (
    <Row
      width={WIDTH}
      alignItems="center"
      height={56}
      backgroundColor="dark"
      paddingHorizontal="16px">
      {leading && <Center>{leading}</Center>}
      <Center flex={1}>
        <Text color="light" variant="normal">
          {title}
        </Text>
      </Center>
      {actions && <Row alignItems="center">{actions}</Row>}
    </Row>
  );
};
