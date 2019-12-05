import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Colors} from '../../res';
import SliderEntry from './SliderEntry';
import {moderateScale} from '../../utils/Scales';
import {ICarouselProps, IEntry} from './Model';

const renderItem = (
  props: {item: IEntry; index: number},
  parallaxProps: any,
): any => {
  return (
    <SliderEntry
      data={props.item}
      even={(props.index + 1) % 2 === 0}
      parallaxProps={parallaxProps}
    />
  );
};

const Carousel1 = ({entries}: ICarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width - moderateScale(90)}
        hasParallaxImages={true}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        layout={'default'}
        loop={true}
        onSnapToItem={setActiveSlide}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor={Colors.BLACK}
        dotStyle={styles.paginationDot}
        inactiveDotColor={Colors.BLACK}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
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
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

export default Carousel1;
