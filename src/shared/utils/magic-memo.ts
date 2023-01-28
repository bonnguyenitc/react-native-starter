import React, { ComponentProps, ComponentType, MemoExoticComponent } from 'react'
import isEqual from 'react-fast-compare'

import { pick } from 'lodash'

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export const magicMemo = function <C extends ComponentType<any>>(
  Component: C,
  deps?: string | string[], // This is list keys of props
  customComparisonFunc?: (props: DeepPartial<ComponentProps<C>>) => boolean,
): MemoExoticComponent<C> {
  return React.memo(Component, (prev, next) => {
    if (!deps) {
      if (customComparisonFunc) {
        return customComparisonFunc(prev) === customComparisonFunc(next)
      }

      return isEqual(prev, next)
    }

    const magicDeps = typeof deps === 'string' ? [deps] : deps
    const magicPrev = pick(prev, magicDeps) as DeepPartial<ComponentProps<C>>
    const magicNext = pick(next, magicDeps) as DeepPartial<ComponentProps<C>>

    if (customComparisonFunc) {
      return customComparisonFunc(magicPrev) === customComparisonFunc(magicNext)
    }

    return isEqual(magicPrev, magicNext)
  })
}
