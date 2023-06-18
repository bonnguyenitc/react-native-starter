import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks'
import { useLoginForm } from './useLoginForm'
import { Button, Col, Space } from '@/components/widgets'
import { InputField } from '@/components/widgets/input-field'
import { AppNavigationProp } from '@/routes'
import { useTranslation } from '@/shared/hooks'
import { useThemeStore } from '@/shared/stores'
import { useTheme } from '@/shared/themes'

export const LoginForm: React.FC = function () {
  const navigation = useNavigation<AppNavigationProp>()
  const { login, goToRegister } = useAuth()
  const { t } = useTranslation()
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const { colors } = useTheme()

  const { control, handleSubmit, errors } = useLoginForm()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('navigate:login'),
    })
  }, [navigation, t])

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
        <Button backgroundColor="secondary" onPress={handleSubmit(login)} labelColor="primary">
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
