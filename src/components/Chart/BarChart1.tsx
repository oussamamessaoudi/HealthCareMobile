import React from 'react';
import {
  processColor,
  StyleSheet,
  View,
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import {Colors} from '../../res';
import {scale, verticalScale} from '../../utils/Scales';
import {Text} from '../form/Text';

export default function({containerStyle}: any) {
  return (
    <View style={containerStyle}>
      <View style={styles.container}>
        <View style={styles.chartLegend}>
          <View style={styles.chartLabel}>
            <View style={[styles.chartLabelButton, styles.chartLabelButtonG]}/>
            <Text>GAINS</Text>
          </View>
          <View style={styles.chartLabel}>
            <View style={[styles.chartLabelButton, styles.chartLabelButtonR]}/>
            <Text>DÉPENCES</Text>
          </View>
        </View>
        <BarChart
          style={styles.chart}
          xAxis={{
            valueFormatter: ['Jan', 'Fev', 'Mars'],
            granularityEnabled: true,
            granularity: 1,
            axisMaximum: 3,
            axisMinimum: 0,
            centerAxisLabels: true,
            position: 'BOTTOM',
            drawFilled: false,
            drawGridLines: false,
            textColor: processColor(Colors.PRIMARY_TEXT),
            textSize: scale(12),
            fontFamily: 'SourceSansPro-Regular',

          }}
          yAxis={{
            right: {
              enabled: false,
            },
            left: {
              textColor: processColor(Colors.PRIMARY_TEXT),
              textSize: scale(12),
              fontFamily: 'SourceSansPro-Regular',
              gridColor: processColor(Colors.PRIMARY_LIGHT),
              axisMinimum: 0,
            },
          }}
          data={{
            dataSets: [{
              values: [100, 200, 300],
              label: 'GAINS',
              config: {
                colors: [processColor(Colors.SECONDARY)],
                highlightColor: processColor(Colors.SECONDARY_LIGHT),
                drawValues: false,
              },
            }, {
              values: [20, 250, 300],
              label: 'DÉPENSES',
              config: {
                colors: [processColor(Colors.GREEN)],
                highlightColor: processColor(Colors.YELLOW),
                drawValues: false,
              },
            }],
            config: {
              barWidth: scale(0.05),
              group: {
                fromX: 0,
                groupSpace: scale(0.73),
                barSpace: scale(0.05),
              },
            },
          }}
          drawValueAboveBar={false}
          animation={{durationY: 1000}}
          chartDescription={{text: ''}}
          legend={{enabled: false}}
          description={{enabled: false}}
          drawGridBackground={false}
          scaleEnabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
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
