import { create } from 'zustand'

import { loginWithEmailAndPasswordApi } from '../api'
import { LoginPayload } from '../types'
import { UserModel } from '../types/models'
import { hideLoading, showLoading } from '@/common/utils/dialog'
import { delay } from '@/common/utils/helpers'
import storage from '@/common/utils/storage'

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
    const resp = await loginWithEmailAndPasswordApi(data)
    resp.ok = true
    if (resp.ok) {
      storage.saveAccessToken('token')
      set(() => ({
        isLoggedIn: true,
        data: resp.data?.user,
      }))
    }
    hideLoading()
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
