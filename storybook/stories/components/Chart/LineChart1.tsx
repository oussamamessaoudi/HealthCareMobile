import {storiesOf} from '@storybook/react-native';
import React from 'react';

import {SafeAreaView} from 'react-native';
import LineChart1 from '../../../../src/components/Chart/LineChart1';
import {verticalScale} from '../../../../src/utils/Scales';

storiesOf('LineChart1').add('default', () => (
  <SafeAreaView style={{height: verticalScale(300)}}>
    <LineChart1 data={{}} />
  </SafeAreaView>
));
