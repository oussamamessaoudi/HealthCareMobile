import {storiesOf} from '@storybook/react-native';
import React from 'react';

import {SafeAreaView} from 'react-native';
import BarChart1 from '../../../../src/components/Chart/BarChart1';
import {verticalScale} from '../../../../src/utils/Scales';

storiesOf('BarChart1').add('default', () => (
  <SafeAreaView style={{height: verticalScale(300)}}>
    <BarChart1 data={{}} />
  </SafeAreaView>
));
