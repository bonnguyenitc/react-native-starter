import React from 'react'
import { createVariant, VariantProps, createRestyleComponent } from '@shopify/restyle'
import { TextInput as RNTextInput } from 'react-native'
import { Theme } from '@/shared/themes'

const variant = createVariant({
  themeKey: 'textInputVariants',
  defaults: {
    width: '100%',
    color: 'text',
    borderWidth: 1,
    borderColor: 'text',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 'small',
  },
})

export const TextInput = createRestyleComponent<
  VariantProps<Theme, 'textInputVariants'> & React.ComponentProps<typeof RNTextInput>,
  Theme
>([variant], RNTextInput)
