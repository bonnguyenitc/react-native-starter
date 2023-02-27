import Axios, { AxiosError, AxiosRequestConfig } from 'axios'

import { ResponseApi } from '../types/api'
import { API_URL } from '@/shared/config'
import { useNotificationStore } from '@/shared/stores'
import storage from '@/shared/utils/storage'

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getAccessToken()
  const newConfig = config
  if (newConfig && newConfig?.headers) {
    if (token) {
      newConfig.headers.authorization = `${token}`
    }
    newConfig.headers.Accept = 'application/json'
    newConfig.headers['Content-Type'] = 'application/json'
  }
  return newConfig
}

export const axios = Axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const message = error.response?.data?.message || error.message
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    })

    return Promise.reject(error)
  },
)

export const NONE = null
export const CLIENT_ERROR = 'CLIENT_ERROR'
export const SERVER_ERROR = 'SERVER_ERROR'
export const TIMEOUT_ERROR = 'TIMEOUT_ERROR'
export const CONNECTION_ERROR = 'CONNECTION_ERROR'
export const NETWORK_ERROR = 'NETWORK_ERROR'
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'
export const CANCEL_ERROR = 'CANCEL_ERROR'

const TIMEOUT_ERROR_CODES = ['ECONNABORTED']
const NODEJS_CONNECTION_ERROR_CODES = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET']

const inRange = (min: number, max: number, value: number): boolean => value >= min && value <= max

const in200s = (n: number): boolean => inRange(200, 299, n)
const in400s = (n: number): boolean => inRange(400, 499, n)
const in500s = (n: number): boolean => inRange(500, 599, n)

type StatusCodes = undefined | number | null

export const getProblemFromStatus = (status: StatusCodes) => {
  if (!status) return UNKNOWN_ERROR
  if (in200s(status)) return NONE
  if (in400s(status)) return CLIENT_ERROR
  if (in500s(status)) return SERVER_ERROR
  return UNKNOWN_ERROR
}

export const getProblemFromError = (error: AxiosError | any) => {
  if (error.message === 'Network Error') return NETWORK_ERROR
  if (Axios.isCancel(error)) return CANCEL_ERROR
  if (!error.code) return getProblemFromStatus(error.response ? error.response.status : null)
  if (TIMEOUT_ERROR_CODES.includes(error.code)) return TIMEOUT_ERROR
  if (NODEJS_CONNECTION_ERROR_CODES.includes(error.code)) return CONNECTION_ERROR
  return UNKNOWN_ERROR
}

export const generateErrorData = (error: any): ResponseApi<any, any> => {
  return {
    ok: false,
    error: {
      problem: getProblemFromError(error),
      ...(typeof error?.response?.data === 'string'
        ? { message: error?.response?.data }
        : error?.response?.data),
    },
  }
}
