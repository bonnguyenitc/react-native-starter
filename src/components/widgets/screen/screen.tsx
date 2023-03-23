import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MotiColor } from '../moti-color'
import { styles } from '@/shared/constants'
import { useTheme } from '@/shared/themes'

type LayoutProps = {
  children: React.ReactNode
  safe?: boolean
}

export const Screen: React.FC<LayoutProps> = function ({ children, safe = false }) {
  const { colors } = useTheme()
  if (!safe)
    return (
      <MotiColor style={styles.flex_1} backgroundColor="background.default">
        {children}
      </MotiColor>
    )
  return (
    <SafeAreaView style={[styles.flex_1, { backgroundColor: colors['background.default'] }]}>
      <MotiColor style={styles.flex_1} backgroundColor="background.default">
        {children}
      </MotiColor>
    </SafeAreaView>
  )
}
