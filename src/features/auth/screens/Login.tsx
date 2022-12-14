import React from 'react'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { AuthLayout } from '../components/Layout'
import { LoginForm } from '../components/LoginForm'

export const Login: React.FC = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:login')}>
      <LoginForm />
    </AuthLayout>
  )
}
