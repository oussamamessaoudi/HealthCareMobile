import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarChart} from '../../components/Chart';
import {Text} from '../../components/form/Text';
import {Colors} from '../../res';
import {scale, verticalScale} from '../../utils/Scales';
import {commonStyles} from './commonStyles';

export default function() {
  return (
    <View style={commonStyles.container}>
      <View style={styles.chartLegend}>
        <View style={styles.chartLabel}>
          <View style={[styles.chartLabelButton, styles.chartLabelButtonG]} />
          <Text>GAINS</Text>
        </View>
        <View style={styles.chartLabel}>
          <View style={[styles.chartLabelButton, styles.chartLabelButtonR]} />
          <Text>DÉPENCES</Text>
        </View>
      </View>
      <BarChart data={{A: {'1': 100, '2': 50}, B: {'1': 100, '2': 50}}} />
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: verticalScale(5),
  },
  chartLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: scale(20),
  },
  chartLabelButton: {
    width: scale(27),
    height: verticalScale(5),
    borderRadius: 3,
    marginRight: scale(10),
  },
  chartLabelButtonG: {
    backgroundColor: Colors.GREEN,
  },
  chartLabelButtonR: {
    backgroundColor: Colors.SECONDARY,
  },
});
