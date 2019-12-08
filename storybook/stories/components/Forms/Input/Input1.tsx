import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Input1 from '../../../../../src/components/form/Input/Input1';
import {LayoutWithHeader} from '../../../../../src/components/Layout';

storiesOf('Input1').add('WithoutValue', () => (
  <LayoutWithHeader>
    <Input1
      label="label"
      value=""
      onChange={value => {
        alert(value);
      }}
    />
  </LayoutWithHeader>
));

storiesOf('Input1').add('WithValue', () => (
  <LayoutWithHeader>
    <Input1
      label="label"
      value="value"
      onChange={value => {
        alert(value);
      }}
    />
  </LayoutWithHeader>
));
storiesOf('Input1').add('has Error', () => (
  <LayoutWithHeader>
    <Input1
      label="label"
      value="value"
      onChange={value => {
        alert(value);
      }}
      error={true}
    />
  </LayoutWithHeader>
));
