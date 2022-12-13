import React from 'react'
import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'
import Reanimated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Box } from '../Box'

type Props = {
  style?: StyleProp<ViewStyle>
  source: ImageSourcePropType
  resizeMode?: ImageResizeMode
}

const IMAGE: ImageStyle = {
  width: undefined,
  height: undefined,
  flex: 1,
}

export const Image: React.FC<Props> = function (props) {
  const { style, source, resizeMode = 'contain', ...rest } = props
  const x = useSharedValue(0)

  const opacity = useAnimatedStyle(() => ({
    opacity: x.value,
  }))

  const handleOnLayout = React.useCallback(() => {
    x.value = withTiming(1, {
      duration: 1200,
      easing: Easing.in(Easing.ease),
    })
  }, [x])

  return (
    <Box style={style} {...rest}>
      <Reanimated.Image
        style={[IMAGE, opacity]}
        source={source}
        resizeMode={resizeMode}
        onLayout={handleOnLayout}
      />
    </Box>
  )
}
