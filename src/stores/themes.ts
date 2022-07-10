import create from 'zustand';
import storage from '@/utils/storage';

export type ThemeStore = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export const useThemeStore = create<ThemeStore>(set => ({
  isDarkMode: !!storage.getDarkMode(),
  toggleMode: () => {
    set((state: { isDarkMode: any }) => {
      storage.saveDarkMode(!state.isDarkMode);
      return {
        isDarkMode: !state.isDarkMode,
      };
    });
  },
}));
