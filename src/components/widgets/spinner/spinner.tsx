/* eslint-disable global-require */
import React from 'react'

import Lottie from 'lottie-react-native'

import { Center } from '../center'

export const Spinner: React.FC = function () {
  return (
    <Center backgroundColor="secondary" width={50} height={50} borderRadius={25}>
      <Lottie
        source={require('../../../assets/jsons/spinner.json')}
        autoPlay
        loop
        style={{
          width: 80,
          height: 80,
        }}
      />
    </Center>
  )
}
