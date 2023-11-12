import { ResponseApi } from '@/shared/types/api'
import { axios } from '@/shared/utils/axios'
import { wrapApiCall } from '@/shared/utils/helpers'

export const getDemoApi = async (): Promise<ResponseApi<any>> => {
  return wrapApiCall<any>(() => axios.get('/demo'))
}
