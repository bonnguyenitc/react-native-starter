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
};

const schema = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

export const LoginForm = function () {
  const navigation = useNavigation<AppNavigationProp>();
  const { login } = useAuth();
  const { t } = useTranslation();
  const { isDarkMode } = useThemeStore();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('navigate:login'),
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
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    login(data);
  };

  const goToRegister = () => navigation.navigate('register');

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
      <Space height={32} />
      <Col>
        <Button
          backgroundColor={!isDarkMode ? 'dark' : 'light'}
          onPress={handleSubmit(onSubmit)}
          labelColor={isDarkMode ? 'dark' : 'light'}>
          {t('auth:login')}
        </Button>
      </Col>
      <Space height={32} />
      <Col>
        <Button
          backgroundColor={!isDarkMode ? 'dark' : 'light'}
          onPress={goToRegister}
          labelColor={isDarkMode ? 'dark' : 'light'}>
          {t('auth:register')}
        </Button>
      </Col>
    </Col>
  );
};
