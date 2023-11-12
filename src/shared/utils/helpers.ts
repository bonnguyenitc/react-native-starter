import { Insets } from 'react-native'

import { AxiosResponse } from 'axios'

import { ResponseApi } from '../types'
import { generateErrorData } from './axios'

export const delay = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), ms)
  })
}

export const generateHitSlop = ({
  bottom = 10,
  left = 10,
  right = 10,
  top = 10,
}: Insets): Insets => {
  return { bottom, left, right, top }
}

type UploadFileToS3Args = {
  url: string
  data: any
  onError: () => void
  onLoad: () => void
  onProcess: () => void
}

export const uploadFileToS3 = ({ url, data, onError, onLoad, onProcess }: UploadFileToS3Args) => {
  const photo = {
    uri: url,
    type: 'image/png',
    name: url,
  }

  const xhr = new XMLHttpRequest()
  xhr.open('PUT', data.preSignedURL)
  xhr.setRequestHeader('Content-Type', photo.type)
  xhr.upload.onprogress = onProcess
  xhr.onload = onLoad
  xhr.onerror = onError
  xhr.send(photo)
}

export const wrapApiCall = async <T>(
  apiCall: () => Promise<AxiosResponse<T>>,
): Promise<ResponseApi<T>> => {
  try {
    const response = await apiCall()
    return {
      ok: true,
      data: response.data,
    }
  } catch (error) {
    // You can customize the error handling as needed
    console.error('API error:', error)
    return generateErrorData(error)
  }
}
