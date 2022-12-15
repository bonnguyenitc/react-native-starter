import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import vi from './vi'

const resources = {
  en,
  vi,
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
