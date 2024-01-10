/**
 * @format
 */

import React from 'react'

import { render } from '@testing-library/react-native'

import 'react-native'
import { Starter } from '../src/starter'

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  render(<Starter />)
})
