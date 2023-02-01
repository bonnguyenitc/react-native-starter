import { axios, generateErrorData } from '@/shared/libs/axios'
import { ResponseApi } from '@/shared/types/api'

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
