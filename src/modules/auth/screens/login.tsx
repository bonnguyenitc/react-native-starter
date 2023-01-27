import React from 'react'

import { AuthLayout, LoginForm } from '../components'
import { useTranslation } from '@/shared/hooks'

export const Login: React.FC = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:login')}>
      <LoginForm />
    </AuthLayout>
  )
}
