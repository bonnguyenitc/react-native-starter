import React from 'react';

type Props = {
  condition: boolean;
  component: React.ReactElement;
  fallback?: React.ReactElement;
};

export const If: React.FC<Props> = props => {
  const { condition, component, fallback = null } = props;
  return condition ? component : fallback;
};
