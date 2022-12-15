import React from 'react'
import { useTranslation } from '@/shared/hooks'
import { AuthLayout, LoginForm } from '../components'

export const Login: React.FC = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:login')}>
      <LoginForm />
    </AuthLayout>
  )
}
