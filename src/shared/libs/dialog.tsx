import React from 'react'
import { ModalPortal } from 'react-native-modals'

import { Spinner } from '@/components/widgets'

const modal: any = ModalPortal

const modalIds: string[] = []

export function hideLoading() {
  const id = modalIds.shift()
  modal.dismiss(id)
}

export function showLoading() {
  const id = modal.show(<Spinner color="white" size="large" />, {
    modalStyle: { backgroundColor: 'transparent' },
  })
  modalIds.push(id)
}

export function hideModalComponent() {
  const id = modalIds.shift()
  modal.dismiss(id)
}

export function showModalComponent(Component: React.FC) {
  const id = modal.show(<Component />, {
    modalStyle: { backgroundColor: 'transparent' },
    onTouchOutside: hideModalComponent,
  })
  modalIds.push(id)
}
