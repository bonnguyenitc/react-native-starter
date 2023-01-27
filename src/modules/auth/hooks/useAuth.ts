import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '@/routes'
import { useAuthStore } from '../stores'
import { LoginPayload } from '../types'

export const useAuth = () => {
  const navigation = useNavigation<AppNavigationProp>()
  const { loginAction, registerAction } = useAuthStore()

  const goToLogin = useCallback(() => {
    navigation.navigate('login')
  }, [navigation])

  const goToRegister = useCallback(() => {
    navigation.navigate('register')
  }, [navigation])

  const login = useCallback(
    (data: LoginPayload) => {
      loginAction(data)
    },
    [loginAction],
  )

  const register = useCallback(async () => {
    await registerAction()
    navigation.navigate('login')
  }, [registerAction, navigation])

  return { goToLogin, goToRegister, login, register }
}
