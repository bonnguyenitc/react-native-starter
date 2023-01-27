import React, { useCallback } from 'react'

import { HomeLayout } from '../components/layout'
import { ConfirmModal } from '@/components/modals'
import { Button, Space } from '@/components/widgets'
import { useAuthStore } from '@/modules/auth/stores'
import { showModalComponent } from '@/shared/libs/dialog'
import { useThemeStore } from '@/shared/stores'

export const Home: React.FC = function () {
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const logout = useAuthStore(state => state.logOutAction)

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
      <Space height={32} />
      <Button
        backgroundColor={!isDarkMode ? 'dark' : 'light'}
        onPress={logout}
        labelColor={isDarkMode ? 'dark' : 'light'}>
        Log out
      </Button>
    </HomeLayout>
  )
}
