import React from 'react';
import { Button } from '@/components/elements';
import { HomeLayout } from '../components/Layout';
import { ConfirmModal } from '@/components/modals';
import { showModalComponent } from '@/lib/dialog';
import { useThemeStore } from '@/stores';

export const Home = function () {
  const { isDarkMode } = useThemeStore();
  const showModal = () => {
    showModalComponent(() => <ConfirmModal title="Alert" content="This is long text" />);
  };

  return (
    <HomeLayout title="Home">
      <Button
        backgroundColor={!isDarkMode ? 'dark' : 'light'}
        onPress={showModal}
        labelColor={isDarkMode ? 'dark' : 'light'}>
        Show pop up
      </Button>
    </HomeLayout>
  );
};
