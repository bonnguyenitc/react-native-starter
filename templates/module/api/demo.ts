import { ResponseApi } from '@/shared/types/api'
import { axios, generateErrorData } from '@/shared/utils/axios'

export const getDemoApi = async (): Promise<ResponseApi<any, any>> => {
  try {
    const resp = await axios.get('/demo')
    return {
      ok: true,
      data: resp,
    }
  } catch (error) {
    return generateErrorData(error)
  }
}
