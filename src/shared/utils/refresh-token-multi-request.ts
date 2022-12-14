/* eslint-disable no-underscore-dangle */
import axios from 'axios'

// for multiple requests
let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

export const interceptorOnError = (error: any) => {
  const _axios = axios
  const originalRequest = error.config

  if (error.response.status === 401 && !originalRequest?._retry) {
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject })
      })
        .then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`
          return _axios.request(originalRequest)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }

    originalRequest._retry = true
    isRefreshing = true
    // call api refresh token
    return new Promise((resolve, reject) => {
      _axios
        .post(`${originalRequest?.baseURL}/refresh`)
        .then(({ data }) => {
          const newToken = data?.data?.token
          // save token to local
          processQueue(null, newToken)
          resolve(_axios(originalRequest))
        })
        .catch(err => {
          processQueue(err, null)
          reject(err)
        })
        .finally(() => {
          isRefreshing = false
        })
    })
  }

  return Promise.reject(error)
}
