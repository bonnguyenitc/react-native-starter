import { ViewStyle } from 'react-native'

import { ViewProps } from '../types'

export type StyleName = 'flex_1'

export const styles: { [key in StyleName]: ViewStyle } = {
  flex_1: {
    flex: 1,
  },
}

export type ShadowName = 'normal'

export const shadows: { [key in ShadowName]: ViewProps } = {
  normal: {
    elevation: 5,
    shadowColor: 'shadow.default',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
}
