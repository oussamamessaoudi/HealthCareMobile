import React, {useMemo} from 'react';
import {processColor} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {Colors} from '../../res';
import {scale} from '../../utils/Scales';

interface IProps {
  data: {
    [name: string]: number;
  };
}

export default function({data}: IProps) {
  console.log('LineChart');
  const dataConfig = useMemo(() => {
    return {
      drawValues: false,
      colors: [processColor(Colors.WHITE)],
      highlightColor: processColor('#333'),
      lineWidth: 1,
      drawCubicIntensity: 20,
      circleColor: processColor(Colors.PRIMARY),
      circleHoleColor: processColor('#ffba00'),
      drawCircleHole: true,
      drawCircles: true,
    };
  }, []);
  const yAxis = useMemo(() => {
    return {
      right: {
        enabled: true,
      },
      left: {
        drawGridLines: true,
        textColor: processColor(Colors.WHITE),
        textSize: scale(12),
        fontFamily: 'SourceSansPro-Regular',
        granularityEnabled: true,
      },
    };
  }, []);
  const enabledFalse = useMemo(() => {
    return {enabled: false};
  }, []);
  const emptyText = useMemo(() => {
    return {text: ''};
  }, []);
  const animationDuration = useMemo(() => {
    return {durationY: 1000};
  }, []);
  const xAxis = useMemo(() => {
    const names = Object.keys(data);
    return {
      valueFormatter: names,
      granularityEnabled: true,
      granularity: 1,
      labelCount: names && names.length,
      position: 'BOTTOM',
      drawFilled: true,
      fillColor: processColor(Colors.WHITE),
      drawGridLines: false,
      textColor: processColor(Colors.WHITE),
      textSize: scale(10),
      fontFamily: 'SourceSansPro-Regular',
      axisLineWidth: 1,
    };
  }, [data]);
  const dataToSet = useMemo(() => {
    // @ts-ignore
    return {
      dataSets: [
        {
          values: Object.values(data),
          label: '',
          config: dataConfig,
        },
      ],
    };
  }, [data, dataConfig]);
  return (
    <LineChart
      style={styles.container}
      data={dataToSet}
      xAxis={xAxis}
      yAxis={yAxis}
      animation={animationDuration}
      chartDescription={emptyText}
      legend={enabledFalse}
      description={enabledFalse}
      drawGridBackground={false}
      scaleEnabled={false}
    />
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingLeft: scale(10),
    paddingRight: scale(30),
  },
};
