import React from 'react'
import { ViewStyle } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { TextProps } from '@shopify/restyle'
import { Row, Space, Text, TextInput } from '@/components/widgets'
import { KeysColor, spacing, Theme, useTheme } from '@/shared/themes'

type InputFieldProps = {
  control?: Control<any, any>
  error?: string | undefined
  name: string
  styleContainer?: ViewStyle
  colorText?: KeysColor
}

const INPUT: ViewStyle = {
  width: '100%',
  borderWidth: 1,
  borderRadius: 8,
  height: 56,
  paddingHorizontal: spacing.small,
}

export const InputField: React.FC<
  InputFieldProps & React.ComponentProps<typeof TextInput> & TextProps<Theme>
> = function ({ control, error, name, styleContainer = {}, colorText = 'text', ...props }) {
  const { colors } = useTheme()
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Row style={[INPUT, styleContainer]} borderColor="text">
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
