import React, { useCallback } from 'react'
import { Button } from '@/components/widgets'
import { HomeLayout } from '../components/Layout'
import { ConfirmModal } from '@/components/modals'
import { showModalComponent } from '@/shared/libs/dialog'
import { useThemeStore } from '@/shared/stores'

export const Home: React.FC = function () {
  const isDarkMode = useThemeStore(state => state.isDarkMode)

  const showModal = useCallback(() => {
    showModalComponent(() => <ConfirmModal title="Alert" content="This is long text" />)
  }, [])

  return (
    <HomeLayout title="Home">
      <Button
        backgroundColor={!isDarkMode ? 'dark' : 'light'}
        onPress={showModal}
        labelColor={isDarkMode ? 'dark' : 'light'}>
        Show pop up
      </Button>
    </HomeLayout>
  )
}
