import React from 'react';
import { ModalPortal } from 'react-native-modals';
import { Spinner } from '@/components/elements';

const modal: any = ModalPortal;

const loadingIds: string[] = [];

export function hideLoading() {
  const loadingId = loadingIds.shift();
  modal.dismiss(loadingId);
}

export function showLoading() {
  const loadingId = modal.show(<Spinner color="white" />, {
    modalStyle: { backgroundColor: 'transparent' },
  });
  loadingIds.push(loadingId);
}
