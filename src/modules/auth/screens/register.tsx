import React from 'react'
import { useTranslation } from '@/shared/hooks'
import { AuthLayout, RegisterForm } from '../components'

export const Register = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:register')}>
      <RegisterForm />
    </AuthLayout>
  )
}
