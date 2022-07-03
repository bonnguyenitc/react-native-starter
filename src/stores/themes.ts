import create from 'zustand';

export type ThemeStore = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export const useThemeStore = create<ThemeStore>(set => ({
  isDarkMode: false,
  toggleMode: () => {
    set((state: { isDarkMode: any }) => ({
      isDarkMode: !state.isDarkMode,
    }));
  },
}));
