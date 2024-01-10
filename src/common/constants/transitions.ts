import { Easing } from 'react-native-reanimated'

import { MotiTransitionProp } from 'moti'

export const transitions: { [key: string]: MotiTransitionProp } = {
  screen: { type: 'timing', duration: 450, easing: Easing.inOut(Easing.ease) },
}
