import React, { memo, useCallback } from 'react'
import { Button, Col, Row, Space, Text } from '@/components/widgets'
import { WIDTH } from '@/shared/constants'
import { hideModalComponent } from '@/shared/libs/dialog'

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
    <Col width={0.8 * WIDTH} padding="medium" backgroundColor="light">
      <Col>
        <Text variant="normal" color="dark">
          {title}
        </Text>
      </Col>
      <Col>
        <Text variant="subTitle" color="dark">
          {content}
        </Text>
      </Col>
      <Row justifyContent="flex-end">
        <Button
          isModal
          backgroundColor="light"
          onPress={handleClose}
          labelColor="dark"
          borderWidth={1}
          borderColor="dark"
          paddingHorizontal="large">
          {labelCancel}
        </Button>
        <Space width={16} />
        <Button isModal backgroundColor="dark" onPress={handleConfirm} labelColor="light">
          {labelConfirm}
        </Button>
      </Row>
    </Col>
  )
})
