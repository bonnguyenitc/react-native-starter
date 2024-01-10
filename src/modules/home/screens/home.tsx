import React, { useCallback } from 'react'

import { HomeLayout } from '../components/layout'
import { showCustomDialog } from '@/common/utils/dialog'
import { EventRegister, EVENTS } from '@/common/utils/event-register'
import { ConfirmModal } from '@/components/modals'
import { Button, Space } from '@/components/widgets'
import { useAuthStore } from '@/modules/auth/stores'

export const Home: React.FC = function () {
  const logout = useAuthStore(state => state.logOutAction)

  const showModal = useCallback(() => {
    showCustomDialog(<ConfirmModal title="Alert" content="This is long text" />)
  }, [])

  const emitEvent = useCallback(() => {
    EventRegister.emit(EVENTS.EVENT_LOGOUT)
  }, [])

  return (
    <HomeLayout title="Home">
      <Button backgroundColor="secondary" onPress={showModal} labelColor="primary">
        Show pop up
      </Button>
      <Space height={32} />
      <Button backgroundColor="secondary" onPress={emitEvent} labelColor="primary">
        Test event emit
      </Button>
      <Space height={32} />
      <Button backgroundColor="secondary" onPress={logout} labelColor="primary">
        Log out
      </Button>
    </HomeLayout>
  )
}
