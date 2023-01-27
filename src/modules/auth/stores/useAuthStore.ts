import create from 'zustand'
import storage from '@/shared/utils/storage'
import { hideLoading, showLoading } from '@/shared/libs/dialog'
import { delay } from '@/shared/utils/helpers'
import { UserModel } from '../types/models'
import { LoginPayload } from '../types'
import { loginWithEmailAndPasswordApi } from '../api'

type State = {
  data: UserModel | undefined
  isLoggedIn: boolean
}

type Action = {
  registerAction: () => Promise<void>
  checkLoggedInAction: () => void
  loginAction: (data: LoginPayload) => Promise<void>
  logOutAction: () => Promise<void>
}

export const useAuthStore = create<State & Action>(set => ({
  isLoggedIn: false,
  data: undefined,
  loginAction: async data => {
    showLoading()
    await delay(3000)
    hideLoading()
    storage.saveAccessToken('token')
    const resp = await loginWithEmailAndPasswordApi(data)
    if (resp.ok) {
      set(() => ({
        isLoggedIn: true,
        data: resp.data?.user,
      }))
    }
  },
  registerAction: async () => {
    await delay(3000)
  },
  checkLoggedInAction: () => {
    set({
      isLoggedIn: !!storage.getAccessToken(),
    })
  },
  logOutAction: async () => {
    showLoading()
    await delay(1000)
    storage.saveAccessToken('')
    set({
      isLoggedIn: false,
      data: undefined,
    })
    hideLoading()
  },
}))
