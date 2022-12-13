import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpacingProps,
} from '@shopify/restyle'
import { StyleProp, ViewStyle, ViewProps as ViewPropsRN } from 'react-native'
import { Theme } from '@/themes'

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
