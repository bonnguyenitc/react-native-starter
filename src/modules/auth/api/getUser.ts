import { axios } from '@/shared/libs/axios'

import { AuthUser } from '../types'

export const getUser = (): Promise<AuthUser> => {
  return axios.get('/auth/me')
}
