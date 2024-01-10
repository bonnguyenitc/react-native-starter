import { LoginPayload, RegisterPayload } from '../types'
import { UserResponse } from '../types/api'
import { UserModel } from '../types/models'
import { ResponseApi } from '@/common/types/api'
import { axios } from '@/common/utils/axios'
import { wrapApiCall } from '@/common/utils/helpers'

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
