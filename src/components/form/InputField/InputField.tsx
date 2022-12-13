import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { Space, Text, TextInput } from '@/components/widgets'

type InputFieldProps = {
  control?: Control<any, any>
  error?: string | undefined
  name: string
}

export const InputField: React.FC<InputFieldProps & React.ComponentProps<typeof TextInput>> =
  function ({ control, error, name, ...props }) {
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} {...props} />
          )}
          name={name}
        />
        <Space height={8} />
        {!!error && <Text>{error}</Text>}
      </>
    )
  }
