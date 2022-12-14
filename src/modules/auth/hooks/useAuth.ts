import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '@/routes'
import { useAuthStore } from '../stores/useAuthStore'
import { User } from '../stores/models'

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
    (data: User) => {
      loginAction(data)
    },
    [loginAction],
  )

  const register = useCallback(() => {
    registerAction()
  }, [registerAction])

  return { goToLogin, goToRegister, login, register }
}
