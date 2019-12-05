import React from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import {Dimensions, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {ICarouselProps, IEntry} from './Model';

const renderItem = (props: {item: IEntry; index: number}): any => {
  return <SliderEntry data={props.item} even={(props.index + 1) % 2 === 0} />;
};

const Carousel1 = ({entries}: ICarouselProps) => {
  return (
    <Carousel
      data={entries}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width - scale(20)}
      containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContentContainer}
      layout={'stack'}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
});

export default Carousel1;
