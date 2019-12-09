import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from '../../res';

interface IProps {
  size?: 'small' | 'large' | number;
}

export default function({size = 'small'}: IProps) {
  return (
    <ActivityIndicator animating={true} color={Colors.SECONDARY} size={size} />
  );
}
