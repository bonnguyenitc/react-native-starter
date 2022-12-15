import { axios, createErrorData } from '@/shared/libs/axios'
import { ResponseApi } from '@/shared/types/api'

import { AuthUser } from '../types'

export const getUserService = async (): Promise<ResponseApi<AuthUser, any>> => {
  try {
    await axios.get('/auth/me')
    return {
      ok: true,
      data: { email: 'abc@mail.com', bio: '', firstName: '', id: '', lastName: '', role: 'ADMIN' },
    }
  } catch (error: any) {
    return createErrorData(error)
  }
}
