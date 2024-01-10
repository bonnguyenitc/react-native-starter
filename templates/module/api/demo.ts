import { ResponseApi } from '@/common/types/api'
import { axios } from '@/common/utils/axios'
import { wrapApiCall } from '@/common/utils/helpers'

export const getDemoApi = async (): Promise<ResponseApi<any>> => {
  return wrapApiCall<any>(() => axios.get('/demo'))
}
