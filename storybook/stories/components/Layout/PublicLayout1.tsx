import React from 'react';
import {Text} from 'react-native';
import {LayoutPublic} from '../../../../src/components/layout';
import {storiesOf} from '@storybook/react-native';

storiesOf('PublicLayout1').add('Without children', () => <LayoutPublic />);

storiesOf('PublicLayout1').add('With children', () => (
  <LayoutPublic>
    <Text>Hello World!</Text>
  </LayoutPublic>
));
