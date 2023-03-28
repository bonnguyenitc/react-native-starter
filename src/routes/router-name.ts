import { AppParamList } from '.'

type Route = { [key in keyof AppParamList]: keyof AppParamList | any }
export const RouterName: Route = {
  home: 'home',
  landing: 'landing',
  register: 'register',
  login: 'login',
}
