import { LoginPayload, RegisterPayload } from '../types'
import { UserResponse } from '../types/api'
import { UserModel } from '../types/models'
import { axios, generateErrorData } from '@/shared/libs/axios'
import { ResponseApi } from '@/shared/types/api'

export const getUserApi = async (): Promise<ResponseApi<UserModel, any>> => {
  try {
    await axios.get('/auth/me')
    return {
      ok: true,
      data: { email: 'abc@mail.com', bio: '', firstName: '', id: '', lastName: '', role: 'ADMIN' },
    }
  } catch (error) {
    return generateErrorData(error)
  }
}

export const registerWithEmailAndPasswordApi = (data: RegisterPayload): Promise<UserResponse> => {
  return axios.post('/auth/register', data)
}

export const loginWithEmailAndPasswordApi = async (
  data: LoginPayload,
): Promise<ResponseApi<UserResponse, any>> => {
  try {
    await axios.post('/auth/login', data)
    return {
      ok: true,
      data: {
        jwt: '',
        user: {
          email: 'abc@mail.com',
          bio: 'handsome boy =))',
          firstName: 'thoai',
          id: '0',
          lastName: '',
          role: 'USER',
        },
      },
    }
  } catch (error) {
    return generateErrorData(error)
  }
}
