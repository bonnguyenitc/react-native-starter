export type ResponseApi<T> = {
  ok: boolean
  data?: T
  error?: {
    message: string
  }
}
