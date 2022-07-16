import React from 'react';
import { Button } from '@/components/elements';
import { HomeLayout } from '../components/Layout';
import { ConfirmModal } from '@/components/modals';
import { showModalComponent } from '@/lib/dialog';

export const Home = function () {
  const showModal = () => {
    showModalComponent(() => <ConfirmModal />);
  };

  return (
    <HomeLayout title="Home">
      <Button backgroundColor="dark" onPress={showModal}>
        Show pop up
      </Button>
    </HomeLayout>
  );
};
