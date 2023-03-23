import React, { useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Center } from '../center'
import { Col } from '../col'
import { Row } from '../row'
import { Space } from '../space'
import { Text } from '../text'
import { shadows, WIDTH } from '@/shared/constants'
import { ViewProps } from '@/shared/types'

type Props = {
  leading?: React.ReactNode
  actions?: React.ReactNode
  title?: string
  safe?: boolean
}

export const AppBar: React.FC<ViewProps & Props> = function ({ leading, actions, title, safe }) {
  const insets = useSafeAreaInsets()
  const topSpace = useMemo(() => (!safe ? insets.top : 0), [insets.top, safe])
  return (
    <Col
      width={WIDTH}
      height={56 + topSpace}
      backgroundColor="secondary"
      paddingHorizontal="16px"
      {...shadows.normal}>
      <Space height={topSpace} />
      <Row flex={1} alignItems="center">
        {leading && <Center>{leading}</Center>}
        <Center flex={1}>
          <Text color="primary" variant="normal">
            {title}
          </Text>
        </Center>
        {actions && <Row alignItems="center">{actions}</Row>}
      </Row>
    </Col>
  )
}
