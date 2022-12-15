import { useTranslation as useTranslationLib } from 'react-i18next'

export const useTranslation = () => {
  const { t, i18n } = useTranslationLib()
  return { i18n, t }
}
