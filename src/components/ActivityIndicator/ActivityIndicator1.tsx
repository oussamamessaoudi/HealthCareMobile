import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from '../../res';

interface IProps {
  size?: 'small' | 'large' | number;
  color?: string;
}

export default function({size = 'small', color = Colors.SECONDARY}: IProps) {
  return <ActivityIndicator animating={true} color={color} size={size} />;
}
