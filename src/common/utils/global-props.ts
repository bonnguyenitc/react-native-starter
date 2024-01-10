/* eslint-disable no-param-reassign */
import { FlatList, ScrollView } from 'react-native'

const setCustomProps = (component: any, customProps: any) => {
  const Component = component.render
  const initialDefaultProps = component.defaultProps
  component.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  component.render = function render(props: any) {
    const oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      // eslint-disable-next-line prefer-rest-params
      return Component.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}

const indicatorProps = {
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}

export const hideIndicatorList = () => {
  setCustomProps(ScrollView, indicatorProps)
  setCustomProps(FlatList, indicatorProps)
}
