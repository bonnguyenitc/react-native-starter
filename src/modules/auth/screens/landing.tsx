import React, { useEffect, useMemo, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { AuthLayout } from '../components/layout/layout'
import { useAuth } from '../hooks'
import { APP_NAME } from '@/common/config'
import { useTranslation } from '@/common/hooks'
import { Button, Space, Text } from '@/components/widgets'
import { language } from '@/localization/language'
import { AppNavigationProp } from '@/routes'

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

  const languagesSelector = useMemo(
    () => (
      <>
        {languages.map(currentLang => {
          const selectedLanguage = currentLang.code === lang
          return (
            <Text
              color="text.default"
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
      </>
    ),
    [i18n, lang],
  )

  return (
    <AuthLayout safe isShowToggleDarkMode title={APP_NAME}>
      <Button onPress={goToLogin} backgroundColor="secondary" width={200} labelColor="primary">
        {t('auth:login')}
      </Button>
      <Space height={28} />
      <Button onPress={goToRegister} backgroundColor="secondary" width={200} labelColor="primary">
        {t('auth:register')}
      </Button>
      <Space height={18} />
      {languagesSelector}
    </AuthLayout>
  )
}
