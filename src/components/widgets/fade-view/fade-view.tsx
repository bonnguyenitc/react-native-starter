import React from 'react'
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutRight,
  SlideInLeft,
  SlideOutRight,
} from 'react-native-reanimated'

import { ViewProps } from '@/shared/types'

type Props = {
  // components's props
  children: React.ReactNode
  type?: 'left' | 'right' | 'bottom' | 'slideLeft' | 'fade'
}

/**
 * Describe your component here
 */

export const FadeView: React.FC<Props & ViewProps> = function ({
  children,
  type = 'left',
  ...props
}) {
  const entering = React.useMemo(() => {
    const anims = {
      fade: FadeIn,
      left: FadeInLeft,
      right: FadeInRight,
      bottom: FadeInUp,
      slideLeft: SlideInLeft,
    }
    return anims?.[type]
  }, [type])

  const exiting = React.useMemo(() => {
    const anims = {
      left: FadeOutRight,
      right: FadeOut,
      bottom: FadeInDown,
      slideLeft: SlideOutRight,
      fade: FadeOut,
    }
    return anims?.[type]
  }, [type])

  return (
    <Animated.View entering={entering} exiting={exiting} {...props}>
      {children}
    </Animated.View>
  )
}
