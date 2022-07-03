import { mmkv } from '@/lib/mmvk';

const KEYS = {
  TOKEN: '@TOKEN',
};

const storage = {
  saveAccessToken: (data: string) => {
    mmkv.set(KEYS.TOKEN, data);
  },
  getAccessToken: () => {
    return mmkv.getString(KEYS.TOKEN);
  },
};

export default storage;
