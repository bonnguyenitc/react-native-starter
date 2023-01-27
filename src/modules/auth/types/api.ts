import { UserModel } from './models'

export type UserResponse = {
  jwt: string
  user: UserModel
}
