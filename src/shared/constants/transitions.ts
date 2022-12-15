import { MotiTransitionProp } from 'moti'
import { Easing } from 'react-native-reanimated'

export const transitions: { [key: string]: MotiTransitionProp } = {
  screen: { type: 'timing', duration: 450, easing: Easing.inOut(Easing.ease) },
}
