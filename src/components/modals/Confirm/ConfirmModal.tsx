import React, { useCallback } from 'react';
import { Button, Col, Row, Space, Text } from '@/components/elements';
import { WIDTH } from '@/global';
import { hideModalComponent } from '@/lib/dialog';
import { useThemeStore } from '@/stores';

type Props = {
  onClose?: () => void;
  onConfirm?: () => void;
  title: string;
  content: string;
  labelConfirm?: string;
  labelCancel?: string;
};

export const ConfirmModal: React.FC<Props> = function ({
  onClose,
  onConfirm,
  title,
  content,
  labelCancel = 'Cancel',
  labelConfirm = 'OK',
}) {
  const { isDarkMode } = useThemeStore();
  const handleClose = useCallback(() => {
    onClose?.();
    hideModalComponent();
  }, [onClose]);

  const handleConfirm = useCallback(() => {
    onConfirm?.();
    hideModalComponent();
  }, [onConfirm]);

  return (
    <Col width={0.8 * WIDTH} padding="medium" backgroundColor={isDarkMode ? 'light' : 'dark'}>
      <Col>
        <Text variant="normal" color={!isDarkMode ? 'light' : 'dark'}>
          {title}
        </Text>
      </Col>
      <Col>
        <Text variant="subTitle" color={!isDarkMode ? 'light' : 'dark'}>
          {content}
        </Text>
      </Col>
      <Row justifyContent="flex-end">
        <Button isModal backgroundColor="dark" onPress={handleClose} labelColor="light">
          {labelCancel}
        </Button>
        <Space width={16} />
        <Button isModal backgroundColor="dark" onPress={handleConfirm} labelColor="light">
          {labelConfirm}
        </Button>
      </Row>
    </Col>
  );
};
