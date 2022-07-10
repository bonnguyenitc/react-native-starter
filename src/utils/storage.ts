import { mmkv } from '@/lib/mmvk';

const KEYS = {
  TOKEN: '@TOKEN',
  THEME: '@THEME',
};

const storage = {
  saveAccessToken: (data: string) => {
    mmkv.set(KEYS.TOKEN, data);
  },
  getAccessToken: () => {
    return mmkv.getString(KEYS.TOKEN);
  },
  saveDarkMode: (isDark: boolean) => {
    mmkv.set(KEYS.THEME, isDark);
  },
  getDarkMode: () => {
    return mmkv.getBoolean(KEYS.THEME);
  },
};

export default storage;
