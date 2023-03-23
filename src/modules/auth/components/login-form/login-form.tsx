import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useNavigation } from '@react-navigation/native'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useAuth } from '../../hooks'
import { LoginPayload } from '../../types'
import { Button, Col, Space } from '@/components/widgets'
import { InputField } from '@/components/widgets/input-field'
import { AppNavigationProp } from '@/routes'
import { useTranslation } from '@/shared/hooks'
import { useThemeStore } from '@/shared/stores'
import { useTheme } from '@/shared/themes'

const schema = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
})

export const LoginForm: React.FC = function () {
  const navigation = useNavigation<AppNavigationProp>()
  const { login, goToRegister } = useAuth()
  const { t } = useTranslation()
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const { colors } = useTheme()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('navigate:login'),
    })
  }, [navigation, t])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(
    (data: LoginPayload) => {
      login(data)
    },
    [login],
  )

  return (
    <Col width="80%">
      <InputField
        control={control}
        error={errors.email?.message}
        name="email"
        placeholder={t('auth:enter_email')}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor={!isDarkMode ? colors.dim : colors['text.default']}
      />
      <Space height={16} />
      <InputField
        control={control}
        error={errors.password?.message}
        name="password"
        placeholder={t('auth:enter_password')}
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor={!isDarkMode ? colors.dim : colors['text.default']}
      />
      <Space height={32} />
      <Col>
        <Button backgroundColor="secondary" onPress={handleSubmit(onSubmit)} labelColor="primary">
          {t('auth:login')}
        </Button>
      </Col>
      <Space height={32} />
      <Col>
        <Button backgroundColor="secondary" onPress={goToRegister} labelColor="primary">
          {t('auth:register')}
        </Button>
      </Col>
    </Col>
  )
}
