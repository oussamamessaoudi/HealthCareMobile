import React from 'react';
import {SafeAreaView} from 'react-native';
import {Carousel} from '../../../../src/components/Carousel';
import {storiesOf} from '@storybook/react-native';
import {IEntry} from '../../../../src/components/Carousel/Model';

const ENTRIES1: IEntry[] = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://www.w3schools.com/images/picture.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://media.geeksforgeeks.org/wp-content/uploads/geek.png',
  },
];

storiesOf('Carousel1').add('carousel', () => (
  <SafeAreaView>
    <Carousel entries={ENTRIES1} />
  </SafeAreaView>
));
