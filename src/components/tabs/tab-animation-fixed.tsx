import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, Image, LayoutChangeEvent } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  scrollTo,
  SharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import { HEIGHT, WIDTH } from '@/common/constants'
import { Col, Row, Screen, Text, Touchable } from '@/components/widgets'

type TabsProps = {
  tabName: string
  imageSrc: string
}

const tabs: TabsProps[] = [
  {
    tabName: 'Men',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*orB5KaWD3a7lA1VS94RcqQ.jpeg',
  },
  {
    tabName: 'Women',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Ucb7PuKCsbPLg51h2YJ_PA.jpeg',
  },
  {
    tabName: 'Kids',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_xqoKqw2HyXBTFl1J7yRUg.jpeg',
  },
  {
    tabName: 'Home Decor',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8fMhz3OuNVOXP4eoPfMwzw.jpeg',
  },
]

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

type FlatListImageProps = { item: TabsProps }

function FlatListImage({ item }: FlatListImageProps) {
  return (
    <Animated.View
      key={item.tabName}
      style={{
        width: WIDTH,
        height: HEIGHT,
      }}>
      <Image
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
        }}
        source={{ uri: item.imageSrc }}
      />
    </Animated.View>
  )
}

type FlatListTextProps = {
  item: TabsProps
  index: number
  viewTranslatePoints: number[]
  setViewTranslatePoints: React.Dispatch<React.SetStateAction<number[]>>
  tabWidths: number[]
  setTabWidths: React.Dispatch<React.SetStateAction<number[]>>
  onPress: () => void
}

function FlatListText({
  item,
  index,
  viewTranslatePoints,
  setViewTranslatePoints,
  tabWidths,
  setTabWidths,
  onPress,
}: FlatListTextProps) {
  const handleViewLayout = (event: LayoutChangeEvent) => {
    const { x } = event.nativeEvent.layout
    const currentPoints = [...viewTranslatePoints]
    currentPoints[index] = x
    setViewTranslatePoints(currentPoints)
  }

  const handleTextLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    const currentTabWidths = [...tabWidths]
    currentTabWidths[index] = width
    setTabWidths(currentTabWidths)
  }

  return (
    <Animated.View onLayout={handleViewLayout} key={item.tabName}>
      <Touchable onPress={onPress}>
        <Text
          variant="normal"
          onLayout={handleTextLayout}
          paddingHorizontal="small"
          paddingVertical="tiny">
          {item.tabName}
        </Text>
      </Touchable>
    </Animated.View>
  )
}

type TabProps = {
  scrollXValue: SharedValue<number>
  orderIndex: number
  onChangeTab: (index: number) => void
}

function Tabs({ scrollXValue, orderIndex, onChangeTab }: TabProps) {
  const [viewTranslatePoints, setViewTranslatePoints] = useState<number[]>([])
  const [tabWidths, setTabWidths] = useState<number[]>([])

  const scrollRef = useRef<FlatList>(null)

  useEffect(() => {
    scrollRef.current?.scrollToIndex({ index: orderIndex, animated: true, viewPosition: 0.5 })
  }, [orderIndex, viewTranslatePoints])

  const indicatorStyle = useAnimatedStyle(() => {
    return tabWidths.length === 4 && viewTranslatePoints.length === 4
      ? {
          width: interpolate(
            scrollXValue.value,
            [0, WIDTH, 2 * WIDTH, 3 * WIDTH],
            [tabWidths[0], tabWidths[1], tabWidths[2], tabWidths[3]],
            Extrapolation.CLAMP,
          ),
          transform: [
            {
              translateX: interpolate(
                scrollXValue.value,
                [0, WIDTH, 2 * WIDTH, 3 * WIDTH],
                [
                  viewTranslatePoints[0],
                  viewTranslatePoints[1],
                  viewTranslatePoints[2],
                  viewTranslatePoints[3],
                ],
                Extrapolation.CLAMP,
              ),
            },
          ],
        }
      : {
          width: 0,
          transform: [{ translateX: 0 }],
        }
  })

  const handleChangeTab = useCallback((index: number) => () => onChangeTab(index), [onChangeTab])

  return (
    <Animated.View style={{ width: WIDTH }}>
      <Row justifyContent="space-evenly">
        {tabs.map((value, index) => {
          return (
            <FlatListText
              key={value.tabName}
              item={value}
              index={index}
              viewTranslatePoints={viewTranslatePoints}
              setViewTranslatePoints={setViewTranslatePoints}
              tabWidths={tabWidths}
              setTabWidths={setTabWidths}
              onPress={handleChangeTab(index)}
            />
          )
        })}
      </Row>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: 30,
            height: 3,
            backgroundColor: 'red',
            bottom: 0,
          },

          indicatorStyle,
        ]}
      />
    </Animated.View>
  )
}

export const TabAnimation: React.FC = function () {
  const scrollValue = useSharedValue(0)
  const scrollRef = useAnimatedRef<any>()
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollValue.value = event.contentOffset.x
    },
  })

  const [current, setCurrent] = useState(0)

  const scrollMomentumEndHandler = useAnimatedScrollHandler({
    onMomentumEnd: event => {
      const scrollDiff = event.contentOffset.x % WIDTH
      const index = Math.floor(event.contentOffset.x / WIDTH)
      runOnJS(setCurrent)(index)
      if (scrollDiff > WIDTH / 2) {
        const scrollMultiplier = Math.ceil(event.contentOffset.x / WIDTH)
        scrollTo(scrollRef, scrollMultiplier * WIDTH, 0, true)
      } else {
        const scrollMultiplier = Math.floor(event.contentOffset.x / WIDTH)
        scrollTo(scrollRef, scrollMultiplier * WIDTH, 0, true)
      }
    },
  })

  const getItemLayout = useCallback((data: any, index: number) => {
    return { length: WIDTH, offset: WIDTH * index, index }
  }, [])

  const handleChangeTab = useCallback(
    (index: number) => {
      setCurrent(index)
      scrollRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0.5 })
    },
    [scrollRef],
  )

  return (
    <Screen safe>
      <Col flex={1}>
        <Tabs scrollXValue={scrollValue} orderIndex={current} onChangeTab={handleChangeTab} />
        <AnimatedFlatlist
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={scrollRef}
          onMomentumScrollEnd={scrollMomentumEndHandler}
          onScroll={scrollHandler}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          scrollEventThrottle={16}
          data={tabs}
          renderItem={({ item }) => {
            return <FlatListImage item={item as TabsProps} />
          }}
          getItemLayout={getItemLayout}
        />
      </Col>
    </Screen>
  )
}
