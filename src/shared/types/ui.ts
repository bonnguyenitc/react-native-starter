import { StyleProp, ViewProps as ViewPropsRN, ViewStyle } from 'react-native'

import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpacingProps,
} from '@shopify/restyle'

import { Theme } from '@/shared/themes'

export interface ChildrenProps {
  children?: React.ReactNode
}
export type ViewProps = { style?: StyleProp<ViewStyle> } & SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  ShadowProps<Theme> &
  ViewPropsRN
