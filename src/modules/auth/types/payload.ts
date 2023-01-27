import { UserModel } from './models'

export type UserResponse = {
  jwt: string
  user: UserModel
}

export type RegisterPayload = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type LoginPayload = {
  email: string
  password: string
}
