import React from 'react'

import { Text } from '../text/text'
import { Touchable } from '../touchable'
import { ColorName, TypoName } from '@/shared/themes'

type Props = {
  label: string
  variant?: TypoName
  color?: ColorName
  onPress: () => void
}

export const TextButton: React.FC<Props> = function ({
  label,
  variant = 'normal',
  color = 'text.default',
  onPress,
}) {
  return (
    <Touchable onPress={onPress}>
      <Text variant={variant} color={color}>
        {label}
      </Text>
    </Touchable>
  )
}
