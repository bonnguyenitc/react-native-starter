export type CallbackFunction<T, V> = (param?: T) => V
export type CallbackFunctionRequired<T, V> = (param: T) => V
export type CallbackFunctionParams<T1, T2, V> = (param1?: T1, param2?: T2) => V
export type CallbackFunctionParamsRequired<T1, T2, V> = (param1: T1, param2: T2) => V
export type AsyncCallbackFunction<T, V> = (param?: T) => Promise<V>
export type AsyncCallbackFunctionRequired<T, V> = (param: T) => Promise<V>
export type AsyncCallbackFunctionParams<T1, T2, V> = (arg1?: T1, arg2?: T2) => Promise<V>
export type AsyncCallbackFunctionParamsRequired<T1, T2, V> = (arg1: T1, arg2: T2) => Promise<V>
export type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any
export type CallbackFunctionVariadicAnyReturnAsync = (...args: any[]) => Promise<any>
