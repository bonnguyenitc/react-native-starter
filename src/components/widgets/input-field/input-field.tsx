import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { ViewStyle } from 'react-native'

import { TextProps } from '@shopify/restyle'

import { borderRadiusSizes } from '@/common/constants'
import { ColorName, spacing, Theme, useTheme } from '@/common/themes'
import { Row, Space, Text, TextInput } from '@/components/widgets'

type InputFieldProps = {
  control?: Control<any, any>
  error?: string | undefined
  name: string
  styleContainer?: ViewStyle
  colorText?: ColorName
}

const INPUT: ViewStyle = {
  width: '100%',
  borderWidth: 1,
  borderRadius: borderRadiusSizes.small,
  height: 56,
  paddingHorizontal: spacing.small,
}

export const InputField: React.FC<
  InputFieldProps & React.ComponentProps<typeof TextInput> & TextProps<Theme>
> = function ({ control, error, name, styleContainer = {}, colorText = 'text.default', ...props }) {
  const { colors } = useTheme()
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Row style={[INPUT, styleContainer]} borderColor="text.default">
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              color={colors[colorText]}
              {...props}
            />
          </Row>
        )}
        name={name}
      />
      <Space height={8} />
      {!!error && <Text>{error}</Text>}
    </>
  )
}
