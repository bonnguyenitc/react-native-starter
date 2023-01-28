import React from 'react'

const alwaysTrue = () => true

export const neverRerender = function (Component: React.FC<any>) {
  return React.memo(Component, alwaysTrue)
}
