import React, { memo, useCallback } from 'react'

import { Button, Col, Row, Space, Text } from '@/components/widgets'
import { WIDTH } from '@/shared/constants'
import { hideModalComponent } from '@/shared/utils/dialog'

type Props = {
  onClose?: () => void
  onConfirm?: () => void
  title: string
  content: string
  labelConfirm?: string
  labelCancel?: string
}

export const ConfirmModal: React.FC<Props> = memo(function ({
  onClose,
  onConfirm,
  title,
  content,
  labelCancel = 'Cancel',
  labelConfirm = 'OK',
}) {
  const handleClose = useCallback(() => {
    onClose?.()
    hideModalComponent()
  }, [onClose])

  const handleConfirm = useCallback(() => {
    onConfirm?.()
    hideModalComponent()
  }, [onConfirm])

  return (
    <Col width={0.8 * WIDTH} padding="medium" backgroundColor="primary">
      <Col>
        <Text variant="normal" color="secondary">
          {title}
        </Text>
      </Col>
      <Col>
        <Text variant="subTitle" color="secondary">
          {content}
        </Text>
      </Col>
      <Row justifyContent="flex-end">
        <Button
          isModal
          backgroundColor="primary"
          onPress={handleClose}
          labelColor="secondary"
          borderWidth={1}
          borderColor="secondary"
          paddingHorizontal="large">
          {labelCancel}
        </Button>
        <Space width={16} />
        <Button isModal backgroundColor="secondary" onPress={handleConfirm} labelColor="primary">
          {labelConfirm}
        </Button>
      </Row>
    </Col>
  )
})
