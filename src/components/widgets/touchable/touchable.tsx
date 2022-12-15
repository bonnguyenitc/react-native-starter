import React from 'react'
import { Insets, TouchableOpacity } from 'react-native'

type Props = {
  children?: React.ReactNode
  onPress?: () => void
  hitSlop?: Insets
}

export const Touchable: React.FC<Props> = function ({ onPress, children, hitSlop }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} hitSlop={hitSlop}>
      {children}
    </TouchableOpacity>
  )
}
