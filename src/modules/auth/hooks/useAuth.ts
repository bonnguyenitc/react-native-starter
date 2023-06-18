import { useCallback } from 'react'
import { Keyboard } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { useAuthStore } from '../stores'
import { LoginPayload } from '../types'
import { AppNavigationProp } from '@/routes'
import { RouterName } from '@/routes/router-name'

export const useAuth = () => {
  const navigation = useNavigation<AppNavigationProp>()
  const { loginAction, registerAction } = useAuthStore()

  const goToLogin = useCallback(() => {
    navigation.navigate(RouterName.login)
  }, [navigation])

  const goToRegister = useCallback(() => {
    navigation.navigate(RouterName.register)
  }, [navigation])

  const login = useCallback(
    (data: LoginPayload) => {
      Keyboard.dismiss()
      loginAction(data)
    },
    [loginAction],
  )

  const register = useCallback(async () => {
    await registerAction()
    navigation.navigate(RouterName.login)
  }, [registerAction, navigation])

  return { goToLogin, goToRegister, login, register }
}
