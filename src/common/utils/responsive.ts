import { PixelRatio } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { HEIGHT, WIDTH } from '@/common/constants'

// change it
const DESIGN_SCREEN_WIDTH = 0
const DESIGN_SCREEN_HEIGHT = 0

const rWidth = (designWidth: number) => {
  return PixelRatio.roundToNearestPixel((WIDTH * designWidth) / DESIGN_SCREEN_WIDTH)
}

const rHeight = (designHeight: number) => {
  return PixelRatio.roundToNearestPixel((HEIGHT * designHeight) / DESIGN_SCREEN_HEIGHT)
}

const rFontSize = (fontDesign: number) => RFValue(fontDesign, DESIGN_SCREEN_HEIGHT)

export const responsive = {
  rWidth,
  rHeight,
  rFontSize,
}
