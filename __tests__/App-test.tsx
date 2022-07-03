/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { App } from '../src/App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  render(<App />);
});
