import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { MMKVStorage } from '@/common/utils/storage'

export type State = {
  isDarkMode: boolean
}

export type Action = {
  toggleMode: () => void
}

export const useThemeStore = create(
  persist<State & Action>(
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
      storage: createJSONStorage(() => MMKVStorage),
      partialize: state => ({ isDarkMode: state.isDarkMode } as State & Action),
    },
  ),
)
