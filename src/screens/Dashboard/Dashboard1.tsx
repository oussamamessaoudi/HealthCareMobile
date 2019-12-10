import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarChart} from '../../components/Chart';
import {LayoutWithHeader} from '../../components/Layout';

export default function() {
  return (
    <LayoutWithHeader>
        <BarChart containerStyle={styles.chart}/>
        <View style={{flex: 1, backgroundColor: 'gray'}}/>
    </LayoutWithHeader>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  chart: {
    flex: 1,
    backgroundColor: 'green',
  },
});
