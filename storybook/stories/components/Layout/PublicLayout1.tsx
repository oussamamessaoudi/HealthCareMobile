import React from 'react';
import {Text} from 'react-native';
import {LayoutPublic} from '../../../../src/components/Layout';
import {storiesOf} from '@storybook/react-native';

storiesOf('PublicLayout1').add('Without children', () => (
  <LayoutPublic canGoBack={false} navigation={{goBack: () => {}}} />
));

storiesOf('PublicLayout1').add('With children', () => (
  <LayoutPublic canGoBack={false} navigation={{goBack: () => {}}}>
    <Text>Hello World!</Text>
  </LayoutPublic>
));

storiesOf('PublicLayout1').add('Show return', () => (
  <LayoutPublic canGoBack={true} navigation={{goBack: () => {}}}>
    <Text>Hello World!</Text>
  </LayoutPublic>
));
