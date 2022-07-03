import create from 'zustand';
import { delay } from '@/utils/delay';
import storage from '@/utils/storage';
import { hideLoading, showLoading } from '@/lib/dialog';

type User = {
  email: string;
};

export type AuthStore = {
  data: User | undefined;
  isLoggedIn: boolean;
  register: () => void;
  checkLoggedIn: () => void;
  login: (data: User) => void;
};

export const useAuth = create<AuthStore>(set => ({
  isLoggedIn: false,
  data: undefined,
  login: async (data: User) => {
    showLoading();
    await delay(3000);
    hideLoading();
    set(() => ({
      isLoggedIn: true,
      data,
    }));
  },
  register: async () => {
    await delay(3000);
  },
  checkLoggedIn: () => {
    set({
      isLoggedIn: !!storage.getAccessToken(),
    });
  },
}));
