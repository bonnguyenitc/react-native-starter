import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = memo(function () {
  const { t } = useTranslation();
  return (
    <AuthLayout title={t('auth:login')}>
      <LoginForm />
    </AuthLayout>
  );
});
