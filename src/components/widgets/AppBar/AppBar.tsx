import React, { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewProps } from '@/types';
import { Row } from '../Row';
import { styles, WIDTH } from '@/global';
import { Text } from '../Text';
import { Center } from '../Center';
import { Col } from '../Col';
import { Space } from '../Space';

type Props = {
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
  safe?: boolean;
};

export const AppBar: React.FC<ViewProps & Props> = function ({ leading, actions, title, safe }) {
  const insets = useSafeAreaInsets();
  const topSpace = useMemo(() => (!safe ? insets.top : 0), [insets.top, safe]);
  return (
    <Col
      width={WIDTH}
      height={56 + topSpace}
      backgroundColor="dark"
      paddingHorizontal="16px"
      {...(styles.shadow as any)}>
      <Space height={topSpace} />
      <Row flex={1} alignItems="center">
        {leading && <Center>{leading}</Center>}
        <Center flex={1}>
          <Text color="light" variant="normal">
            {title}
          </Text>
        </Center>
        {actions && <Row alignItems="center">{actions}</Row>}
      </Row>
    </Col>
  );
};
