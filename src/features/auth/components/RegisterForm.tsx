import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Button, Col, Space } from '@/components/elements';
import { InputField } from '@/components/form/InputField';
import { useThemeStore } from '@/stores';
import { useTheme } from '@/themes';
import { AppNavigationProp } from '@/routes';
import { useAuth } from '../hooks/useAuth';
import { useTranslation } from '@/hooks/useTranslation';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const RegisterForm = function () {
  const navigation = useNavigation<AppNavigationProp>();
  const { register } = useAuth();
  const { t } = useTranslation();
  const { isDarkMode } = useThemeStore();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('navigate:register'),
    });
  }, [navigation, t]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (/* data: FormData */) => {
    register();
    navigation.navigate('login');
  };

  const goToLogin = () => navigation.navigate('login');

  return (
    <Col width="80%">
      <InputField
        control={control}
        error={errors.email?.message}
        name="email"
        placeholder={t('auth:enter_email')}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor={!isDarkMode ? colors.dim : colors.light}
      />
      <Space height={16} />
      <InputField
        control={control}
        error={errors.password?.message}
        name="password"
        placeholder={t('auth:enter_password')}
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor={!isDarkMode ? colors.dim : colors.light}
      />
      <Space height={16} />
      <InputField
        control={control}
        error={errors.confirmPassword?.message}
        name="confirmPassword"
        placeholder={t('auth:enter_confirm_password')}
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor={!isDarkMode ? colors.dim : colors.light}
      />
      <Space height={32} />
      <Col>
        <Button
          backgroundColor={!isDarkMode ? 'dark' : 'light'}
          onPress={handleSubmit(onSubmit)}
          labelColor={isDarkMode ? 'dark' : 'light'}>
          {t('auth:register')}
        </Button>
      </Col>
      <Space height={32} />
      <Col>
        <Button
          backgroundColor={!isDarkMode ? 'dark' : 'light'}
          onPress={goToLogin}
          labelColor={isDarkMode ? 'dark' : 'light'}>
          {t('auth:login')}
        </Button>
      </Col>
    </Col>
  );
};
