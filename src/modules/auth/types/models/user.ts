export type UserModel = {
  id: string
  email: string
  firstName: string
  lastName: string
  bio: string
  role: 'ADMIN' | 'USER'
}
