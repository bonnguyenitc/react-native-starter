import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, LayoutChangeEvent, ListRenderItem } from 'react-native'
import Animated, {
  runOnJS,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'

import { HEIGHT, WIDTH } from '@/common/constants'
import { Col, Image, Screen, Text, Touchable } from '@/components/widgets'

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
  {
    tabName: 'Men 1',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*orB5KaWD3a7lA1VS94RcqQ.jpeg',
  },
  {
    tabName: 'Women 1',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Ucb7PuKCsbPLg51h2YJ_PA.jpeg',
  },
  {
    tabName: 'Kids 1',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_xqoKqw2HyXBTFl1J7yRUg.jpeg',
  },
  {
    tabName: 'Home Decor 1',
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8fMhz3OuNVOXP4eoPfMwzw.jpeg',
  },
]

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

type FlatListImageProps = { item: TabsProps }

function FlatListImage({ item }: FlatListImageProps) {
  return (
    <Image
      key={item.tabName}
      style={{
        width: WIDTH,
        height: HEIGHT,
      }}
      source={{ uri: item.imageSrc }}
      resizeMode="cover"
    />
  )
}

type FlatListTextProps = {
  item: TabsProps
  index: number
  viewTranslatePoints: number[]
  setViewTranslatePoints: React.Dispatch<React.SetStateAction<number[]>>
  tabWidths: number[]
  setTabWidths: React.Dispatch<React.SetStateAction<number[]>>
  active?: boolean
}

function FlatListText({
  item,
  index,
  viewTranslatePoints,
  setViewTranslatePoints,
  tabWidths,
  setTabWidths,
  active,
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
      <Text
        variant="normal"
        onLayout={handleTextLayout}
        paddingHorizontal="small"
        color={active ? 'highlight' : 'dim'}>
        {item.tabName}
      </Text>
    </Animated.View>
  )
}

type TabProps = {
  orderIndex: number
  onChangeTab: (index: number) => void
}

function Tabs({ orderIndex, onChangeTab }: TabProps) {
  const [viewTranslatePoints, setViewTranslatePoints] = useState<number[]>([])
  const [tabWidths, setTabWidths] = useState<number[]>([])

  const scrollRef = useRef<FlatList>(null)

  const handleChangeTab = useCallback((index: number) => () => onChangeTab(index), [onChangeTab])

  useEffect(() => {
    scrollRef.current?.scrollToIndex({ index: orderIndex, animated: true, viewPosition: 0.5 })
  }, [orderIndex, viewTranslatePoints])

  const getItemLayout = useCallback(
    (data: any, index: number) => {
      let offset = 0
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < index; i++) {
        offset += tabWidths[i]
      }
      return { length: tabWidths[index], offset, index }
    },
    [tabWidths],
  )

  return (
    <Animated.View style={{ width: WIDTH }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={scrollRef}
        data={tabs}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => {
          return (
            <Touchable onPress={handleChangeTab(index)}>
              <FlatListText
                key={item.tabName}
                item={item}
                active={orderIndex === index}
                index={index}
                viewTranslatePoints={viewTranslatePoints}
                setViewTranslatePoints={setViewTranslatePoints}
                tabWidths={tabWidths}
                setTabWidths={setTabWidths}
              />
            </Touchable>
          )
        }}
        getItemLayout={getItemLayout}
        showsVerticalScrollIndicator={false}
      />
    </Animated.View>
  )
}

export const TabScrollableAnimation: React.FC = function () {
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

  const renderItem: ListRenderItem<TabsProps & any> = useCallback(({ item }) => {
    return <FlatListImage item={item} />
  }, [])

  return (
    <Screen safe>
      <Col flex={1}>
        <Tabs orderIndex={current} onChangeTab={handleChangeTab} />
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
          renderItem={renderItem}
          getItemLayout={getItemLayout}
        />
      </Col>
    </Screen>
  )
}
