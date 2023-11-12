import { LoginPayload, RegisterPayload } from '../types'
import { UserResponse } from '../types/api'
import { UserModel } from '../types/models'
import { ResponseApi } from '@/shared/types/api'
import { axios } from '@/shared/utils/axios'
import { wrapApiCall } from '@/shared/utils/helpers'

export const getUserApi = async (): Promise<ResponseApi<UserModel>> => {
  return wrapApiCall<UserModel>(() => axios.get('/auth/me'))
}

export const registerWithEmailAndPasswordApi = (
  data: RegisterPayload,
): Promise<ResponseApi<UserResponse>> => {
  return wrapApiCall<UserResponse>(() => axios.post('/auth/register', data))
}

export const loginWithEmailAndPasswordApi = async (
  data: LoginPayload,
): Promise<ResponseApi<UserResponse>> => {
  return wrapApiCall<UserResponse>(() => axios.post('/auth/login', data))
}
