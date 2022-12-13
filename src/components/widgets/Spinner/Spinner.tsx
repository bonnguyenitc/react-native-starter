import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

export const Spinner: React.FC<ActivityIndicatorProps> = function (props) {
  return <ActivityIndicator {...props} />;
};
