import { StatusBar } from 'react-native';
import create from 'zustand';
import storage from '@/utils/storage';

export type ThemeStore = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export const useThemeStore = create<ThemeStore>(set => ({
  isDarkMode: !!storage.getDarkMode(),
  toggleMode: () => {
    set((state: { isDarkMode: boolean }) => {
      StatusBar.setBarStyle(!state.isDarkMode ? 'light-content' : 'dark-content');
      storage.saveDarkMode(!state.isDarkMode);
      return {
        isDarkMode: !state.isDarkMode,
      };
    });
  },
}));
