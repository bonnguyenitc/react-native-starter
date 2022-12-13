import { PixelRatio } from 'react-native'
import { HEIGHT, WIDTH } from '@/global'

// change it
const DESIGN_SCREEN_WIDTH = 0
const DESIGN_SCREEN_HEIGHT = 0

const rWidth = (designWidth: number) => {
  return PixelRatio.roundToNearestPixel((WIDTH * designWidth) / DESIGN_SCREEN_WIDTH)
}

const rHeight = (designHeight: number) => {
  return PixelRatio.roundToNearestPixel((HEIGHT * designHeight) / DESIGN_SCREEN_HEIGHT)
}

export const responsive = {
  rWidth,
  rHeight,
}
