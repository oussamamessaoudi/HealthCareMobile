import {Text, View} from 'react-native';

import React from 'react';
import {storiesOf} from '@storybook/react-native';

interface Props {
  text: string;
}
const Simple: React.FC<Props> = props => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>{props.text}</Text>
  </View>
);

// @ts-ignore
storiesOf('Test', module).add('Test 1', () => (
  <Simple text={'Typescript works!'} />
));
// @ts-ignore
storiesOf('Test', module).add('Test 2', () => (
  <Simple text={'Typescript works 2!'} />
));
