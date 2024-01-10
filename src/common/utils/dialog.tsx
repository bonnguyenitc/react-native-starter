import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
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

export function hideLoading() {
  const current = siblings.shift()
  current?.destroy()
}

export function showLoading() {
  showCustomDialog(<Spinner />)
}
