import { StateStorage } from 'zustand/middleware'

import { mmkv } from '@/shared/libs/mmvk'

const KEYS = {
  TOKEN: '@TOKEN',
  THEME: '@THEME',
}

export const MMKVStorage: StateStorage = {
  getItem: (name: string) => mmkv.getString(name) || null,
  setItem: (name: string, value: string) => mmkv.set(name, value),
  removeItem: (name: string) => mmkv.delete(name),
}

const storage = {
  saveAccessToken: (data: string) => {
    mmkv.set(KEYS.TOKEN, data)
  },
  getAccessToken: () => {
    return mmkv.getString(KEYS.TOKEN)
  },
}

export default storage
