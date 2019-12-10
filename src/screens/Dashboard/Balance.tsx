import React from 'react';
import {View} from 'react-native';
import {LineChart} from '../../components/Chart';
import {commonStyles} from './commonStyles';

export default function() {
  return (
    <View style={commonStyles.container}>
      <LineChart data={{A: 10, B: 20, C: 30.9}} />
    </View>
  );
}
