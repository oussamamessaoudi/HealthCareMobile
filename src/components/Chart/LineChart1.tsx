import React from 'react';
import {processColor} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {Colors} from '../../res';
import {scale} from '../../utils/Scales';

export default function() {
  console.log('LineChart');
  return (
    <LineChart
      style={{flex: 1, backgroundColor: Colors.PRIMARY, paddingLeft: scale(10), paddingRight: scale(30)}}
      data={{
        dataSets: [{
          values: [100, -100, 0, 100, -100, 50, 100, -100, 50, 100, -100, 50],
          label: '',
          config: {
            drawValues: false,
            colors: [processColor(Colors.SECONDARY)],
            highlightColor: processColor('#333'),
            lineWidth: 2,
            drawCubicIntensity: 20,
            circleColor: processColor(Colors.PRIMARY),
            circleHoleColor: processColor(Colors.WHITE),
            drawCircleHole: true,
            drawCircles: true,
          },
        }],
      }}
      xAxis={
        {
          valueFormatter: ['Jan', 'Fev', 'Mar', 'Jan', 'Fev', 'Mar', 'Jan', 'Fev', 'Mar', 'Jan', 'Fev', 'Mar'],
          granularityEnabled: true,
          granularity: 1,
          labelCount: 12,
          position: 'BOTTOM',
          drawFilled: true,
          fillColor: processColor('white'),
          drawGridLines: false,
          textColor: processColor(Colors.WHITE),
          textSize: scale(10),
          fontFamily: 'SourceSansPro-Regular',
          axisLineWidth: 1,
        }
      }
      yAxis={
        {
          right: {
            enabled: false,
          },
          left: {
            drawGridLines: true,
            textColor: processColor(Colors.WHITE),
            textSize: scale(12),
            fontFamily: 'SourceSansPro-Regular',
            granularityEnabled: true,
          },
        }
      }
      animation={{durationY: 1000}}
      chartDescription={{text: ''}}
      legend={{enabled: false}}
      description={{enabled: false}}
      drawGridBackground={false}
      scaleEnabled={false}
    />
  );
}
