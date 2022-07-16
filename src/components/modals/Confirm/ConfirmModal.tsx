import React from 'react';
import { Button, Col, Row, Space, Text } from '@/components/elements';
import { WIDTH } from '@/global';
import { hideModalComponent } from '@/lib/dialog';

export const ConfirmModal: React.FC = function () {
  return (
    <Col width={0.8 * WIDTH} padding="medium" backgroundColor="background" style={{ zIndex: 1000 }}>
      <Col>
        <Text variant="normal">Are you ready?</Text>
      </Col>
      <Row justifyContent="flex-end">
        <Button isModal backgroundColor="dark" onPress={hideModalComponent}>
          Cancel
        </Button>
        <Space width={16} />
        <Button isModal backgroundColor="dark" onPress={hideModalComponent}>
          Ok
        </Button>
      </Row>
    </Col>
  );
};
