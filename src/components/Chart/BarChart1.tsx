import React, {useMemo} from 'react';
import {processColor, StyleSheet} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import {Colors} from '../../res';
import {scale} from '../../utils/Scales';

interface IProps {
  data: {
    [label: string]: {
      '1': number;
      '2': number;
    };
  };
}

export default function({data}: IProps) {
  const xAxis = useMemo(() => {
    const keys = Object.keys(data);
    return {
      valueFormatter: keys,
      granularityEnabled: true,
      granularity: 1,
      axisMaximum: keys.length,
      axisMinimum: 0,
      centerAxisLabels: true,
      position: 'BOTTOM',
      drawFilled: false,
      drawGridLines: false,
      textColor: processColor(Colors.PRIMARY_TEXT),
      textSize: scale(12),
      fontFamily: 'SourceSansPro-Regular',
    };
  }, [data]);
  const yAxis = useMemo(() => {
    return {
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
    };
  }, []);
  const dataToSet = useMemo(() => {
    const values = Object.values(data);
    return {
      dataSets: [
        {
          values: values.map(function(value: any) {
            return value['1'];
          }),
          label: 'GAINS',
          config: {
            colors: [processColor(Colors.SECONDARY)],
            highlightColor: processColor(Colors.SECONDARY_LIGHT),
            drawValues: false,
          },
        },
        {
          values: values.map(function(value: any) {
            return value['2'];
          }),
          label: 'DÉPENSES',
          config: {
            colors: [processColor(Colors.GREEN)],
            highlightColor: processColor(Colors.YELLOW),
            drawValues: false,
          },
        },
      ],
      config: {
        barWidth: scale(0.05),
        group: {
          fromX: 0,
          groupSpace: scale(0.73),
          barSpace: scale(0.05),
        },
      },
    };
  }, [data]);
  const animation = useMemo(() => ({durationY: 1000}), []);
  const chartDescription = useMemo(() => ({text: ''}), []);
  const legend = useMemo(() => ({enabled: false}), []);
  return (
    <BarChart
      style={styles.chart}
      xAxis={xAxis}
      yAxis={yAxis}
      data={dataToSet}
      drawValueAboveBar={false}
      animation={animation}
      chartDescription={chartDescription}
      legend={legend}
      description={legend}
      drawGridBackground={false}
      scaleEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
