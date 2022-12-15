export type ResponseApi<T, E> = {
  ok: boolean
  data?: T
  error?: E
}
