import React from 'react'
import { Button, Card } from '@/components/widgets'
import { HomeLayout } from '../components/Layout'
import { ConfirmModal } from '@/components/modals'
import { showModalComponent } from '@/libs/dialog'
import { useThemeStore } from '@/stores'

export const Home: React.FC = function () {
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const showModal = () => {
    showModalComponent(() => <ConfirmModal title="Alert" content="This is long text" />)
  }

  return (
    <HomeLayout title="Home">
      <Card padding="medium">
        <Button
          backgroundColor={!isDarkMode ? 'dark' : 'light'}
          onPress={showModal}
          labelColor={isDarkMode ? 'dark' : 'light'}>
          Show pop up
        </Button>
      </Card>
    </HomeLayout>
  )
}
