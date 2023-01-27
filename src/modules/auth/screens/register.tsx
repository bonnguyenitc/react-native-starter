import React from 'react'

import { AuthLayout, RegisterForm } from '../components'
import { useTranslation } from '@/shared/hooks'

export const Register = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:register')}>
      <RegisterForm />
    </AuthLayout>
  )
}
