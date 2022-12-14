import React from 'react'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { AuthLayout } from '../components/Layout'
import { RegisterForm } from '../components/RegisterForm'

export const Register = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:register')}>
      <RegisterForm />
    </AuthLayout>
  )
}
