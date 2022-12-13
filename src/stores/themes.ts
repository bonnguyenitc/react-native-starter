import create from 'zustand'
import { persist, StateStorage } from 'zustand/middleware'
import { MMKVStorage } from '@/utils/storage'

export type ThemeStore = {
  isDarkMode: boolean
  toggleMode: () => void
}

export const useThemeStore = create(
  persist<ThemeStore>(
    set => ({
      isDarkMode: false,
      toggleMode: () => {
        set(state => {
          return {
            isDarkMode: !state.isDarkMode,
          }
        })
      },
    }),
    {
      name: 'theme-store',
      getStorage: () => MMKVStorage as StateStorage,
      partialize: state => ({ isDarkMode: state.isDarkMode }),
    },
  ),
)
