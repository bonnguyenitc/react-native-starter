import create from 'zustand';
import { delay } from '@/utils/delay';
import storage from '@/utils/storage';
import { hideLoading, showLoading } from '@/lib/dialog';

export type User = {
  email: string;
};

export type AuthStore = {
  data: User | undefined;
  isLoggedIn: boolean;
  registerAction: () => void;
  checkLoggedInAction: () => void;
  loginAction: (data: User) => void;
};

export const useAuthStore = create<AuthStore>(set => ({
  isLoggedIn: false,
  data: undefined,
  loginAction: async (data: User) => {
    showLoading();
    await delay(3000);
    hideLoading();
    set(() => ({
      isLoggedIn: true,
      data,
    }));
  },
  registerAction: async () => {
    await delay(3000);
  },
  checkLoggedInAction: () => {
    set({
      isLoggedIn: !!storage.getAccessToken(),
    });
  },
}));
