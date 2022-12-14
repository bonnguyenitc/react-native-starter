import Axios, { AxiosRequestConfig } from 'axios'
import { API_URL } from '@/shared/config'
import { useNotificationStore } from '@/shared/stores/useNotificationStore'
import storage from '@/shared/utils/storage'

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getAccessToken()
  const newConfig = config
  if (newConfig && newConfig?.headers) {
    if (token) {
      newConfig.headers.authorization = `${token}`
    }
    newConfig.headers.Accept = 'application/json'
  }

  return newConfig
}

export const axios = Axios.create({
  baseURL: API_URL,
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
