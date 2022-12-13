import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Space, Text } from '@/components/widgets'
import { AuthLayout } from '../components/Layout'
import { APP_NAME } from '@/config'
import { useThemeStore } from '@/stores'
import { language } from '@/localization/language'
import { AppNavigationProp } from '@/routes'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from '@/hooks/useTranslation'

const languages = [
  // Language List
  { code: 'en', label: language.english },
  { code: 'vi', label: language.vietnam },
]

export const Landing: React.FC = function () {
  const navigation = useNavigation<AppNavigationProp>()
  const { goToLogin, goToRegister } = useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    })
  }, [navigation])

  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)
  const { isDarkMode } = useThemeStore()

  return (
    <AuthLayout safe isShowToggleDarkMode title={APP_NAME}>
      <Button
        onPress={goToLogin}
        backgroundColor={!isDarkMode ? 'dark' : 'light'}
        width={200}
        labelColor={isDarkMode ? 'dark' : 'light'}>
        {t('auth:login')}
      </Button>
      <Space height={28} />
      <Button
        onPress={goToRegister}
        backgroundColor={!isDarkMode ? 'dark' : 'light'}
        width={200}
        labelColor={isDarkMode ? 'dark' : 'light'}>
        {t('auth:register')}
      </Button>
      <Space height={18} />
      {languages.map(currentLang => {
        const selectedLanguage = currentLang.code === lang
        return (
          <Text
            color="text"
            variant={!selectedLanguage ? 'light' : 'normal'}
            key={currentLang.code}
            onPress={() => {
              setLang(currentLang.code)
              i18n.changeLanguage(currentLang.code) // it will change the language through out the app.
            }}>
            {currentLang.label}
          </Text>
        )
      })}
    </AuthLayout>
  )
}
