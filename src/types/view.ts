import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  ShadowProps,
  SpacingProps,
} from '@shopify/restyle';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Theme } from '@/themes';

export interface ChildrenProps {
  children?: React.ReactNode;
}
export type ViewProps = { style?: StyleProp<ViewStyle> } & ChildrenProps &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  ShadowProps<Theme>;
