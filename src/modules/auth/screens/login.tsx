import React from 'react'

import { AuthLayout, LoginForm } from '../components'
import { useTranslation } from '@/common/hooks'

export const Login: React.FC = function () {
  const { t } = useTranslation()
  return (
    <AuthLayout title={t('auth:login')}>
      <LoginForm />
    </AuthLayout>
  )
}
