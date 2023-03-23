import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MotiView } from 'moti'

import { styles, transitions } from '@/shared/constants'
import { useTheme } from '@/shared/themes'

type LayoutProps = {
  children: React.ReactNode
  safe?: boolean
}

export const Screen: React.FC<LayoutProps> = function ({ children, safe = false }) {
  const { colors } = useTheme()
  if (!safe)
    return (
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: colors['background.default'],
        }}
        animate={{
          backgroundColor: colors['background.default'],
        }}>
        {children}
      </MotiView>
    )
  return (
    <SafeAreaView style={[styles.flex_1, { backgroundColor: colors['background.default'] }]}>
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: colors['background.default'],
        }}
        animate={{
          backgroundColor: colors['background.default'],
        }}>
        {children}
      </MotiView>
    </SafeAreaView>
  )
}
