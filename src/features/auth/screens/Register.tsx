import React, { memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { AuthLayout } from '../components/Layout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = memo(function () {
  const { t } = useTranslation();
  return (
    <AuthLayout title={t('auth:register')}>
      <RegisterForm />
    </AuthLayout>
  );
});
