import React, { useCallback, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks'
import { useRegisterForm } from './useRegisterForm'
import { Button, Col, Space } from '@/components/widgets'
import { InputField } from '@/components/widgets/input-field'
import { AppNavigationProp } from '@/routes'
import { useTranslation } from '@/shared/hooks'
import { useThemeStore } from '@/shared/stores'
import { useTheme } from '@/shared/themes'

export const RegisterForm = function () {
  const navigation = useNavigation<AppNavigationProp>()
  const { register, goToLogin } = useAuth()
  const { t } = useTranslation()
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const { colors } = useTheme()

  const { control, handleSubmit, errors } = useRegisterForm()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('navigate:register'),
    })
  }, [navigation, t])

  const onSubmit = useCallback(
    (/* data: FormData */) => {
      register()
    },
    [register],
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
        placeholderTextColor={!isDarkMode ? colors.dim : colors.secondary}
      />
      <Space height={16} />
      <InputField
        control={control}
        error={errors.password?.message}
        name="password"
        placeholder={t('auth:enter_password')}
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor={!isDarkMode ? colors.dim : colors.secondary}
      />
      <Space height={16} />
      <InputField
        control={control}
        error={errors.confirmPassword?.message}
        name="confirmPassword"
        placeholder={t('auth:enter_confirm_password')}
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor={!isDarkMode ? colors.dim : colors.secondary}
      />
      <Space height={32} />
      <Col>
        <Button backgroundColor="secondary" onPress={handleSubmit(onSubmit)} labelColor="primary">
          {t('auth:register')}
        </Button>
      </Col>
      <Space height={32} />
      <Col>
        <Button backgroundColor="secondary" onPress={goToLogin} labelColor="primary">
          {t('auth:login')}
        </Button>
      </Col>
    </Col>
  )
}
