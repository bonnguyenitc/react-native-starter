import React from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'

import { Theme } from '@/common/themes'

const variant = createVariant({
  themeKey: 'textInputVariants',
})

export const TextInput = createRestyleComponent<
  VariantProps<Theme, 'textInputVariants'> & React.ComponentProps<typeof RNTextInput>,
  Theme
>([variant], RNTextInput)
