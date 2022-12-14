import create from 'zustand'
import storage from '@/shared/utils/storage'
import { hideLoading, showLoading } from '@/shared/libs/dialog'
import { delay } from '@/shared/utils/helpers'
import { User } from './models'

export type AuthStore = {
  data: User | undefined
  isLoggedIn: boolean
  registerAction: () => void
  checkLoggedInAction: () => void
  loginAction: (data: User) => void
}

export const useAuthStore = create<AuthStore>(set => ({
  isLoggedIn: false,
  data: undefined,
  loginAction: async (data: User) => {
    showLoading()
    await delay(3000)
    hideLoading()
    set(() => ({
      isLoggedIn: true,
      data,
    }))
  },
  registerAction: async () => {
    await delay(3000)
  },
  checkLoggedInAction: () => {
    set({
      isLoggedIn: !!storage.getAccessToken(),
    })
  },
}))
