import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Button1 from '../../../../../src/components/form/Button/Button1';
import {LayoutWithHeader} from '../../../../../src/components/Layout';

storiesOf('Button1').add('Simple', () => (
  <LayoutWithHeader>
    <Button1
      title={'HELLO ENABLED'}
      disabled={false}
      onPress={() => alert('Hello')}
    />
  </LayoutWithHeader>
));

storiesOf('Button1').add('Disabled', () => (
  <LayoutWithHeader>
    <Button1
      title={'HELLO DISABLED'}
      disabled={true}
      onPress={() => alert('Hello')}
    />
  </LayoutWithHeader>
));
