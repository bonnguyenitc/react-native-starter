import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { ModalPortal } from 'react-native-modals'
import RootSiblings from 'react-native-root-siblings'

import { HEIGHT, WIDTH } from '../constants'
import { palette } from '../themes/palette'
import { FadeView, Spinner } from '@/components/widgets'

const styles = StyleSheet.create({
  backDrop: {
    alignItems: 'center',
    backgroundColor: palette.black05,
    justifyContent: 'center',
    position: 'absolute',
  },
})

const modal: any = ModalPortal

const modalIds: string[] = []

export function hideLoading() {
  const id = modalIds.shift()
  modal.dismiss(id)
}

export function showLoading() {
  const id = modal.show(<Spinner />, {
    modalStyle: { backgroundColor: 'transparent' },
  })
  modalIds.push(id)
}

export const siblings: any = []

export function hideCustomDialog() {
  siblings.forEach((sib: any) => sib?.destroy())
  siblings.length = 0
}

export function showCustomDialog(component: React.ReactNode, isHide = false, bottom = false) {
  const style = {
    width: WIDTH,
    height: HEIGHT,
  }

  const sibling = new RootSiblings(
    (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {isHide ? (
          <TouchableWithoutFeedback onPress={hideCustomDialog}>
            <FadeView
              style={[
                styles.backDrop,
                style,
                bottom && {
                  justifyContent: 'flex-end',
                  paddingBottom: HEIGHT * 0.15,
                },
              ]}>
              {component}
            </FadeView>
          </TouchableWithoutFeedback>
        ) : (
          <FadeView
            style={[
              styles.backDrop,
              style,
              bottom && {
                justifyContent: 'flex-end',
                paddingBottom: HEIGHT * 0.15,
              },
            ]}>
            {component}
          </FadeView>
        )}
      </>
    ),
  )
  siblings.push(sibling as never)
}
