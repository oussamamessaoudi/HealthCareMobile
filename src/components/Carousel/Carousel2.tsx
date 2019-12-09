import React, {memo} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Swipe from 'react-native-swiper';
import {Colors} from '../../res';
import {scale, verticalScale} from '../../utils/Scales';
import {ESize} from '../form/Text/model';
import {Text} from '../form/Text';
import {Line} from '../Line';
import {ICarouselProps, IEntry} from './Model';

function renderItem({illustration, title, subtitle}: IEntry) {
  return (
    <View key={illustration} style={styles.slide}>
      <Image
        source={{uri: illustration, cache: 'force-cache'}}
        resizeMode="cover"
        style={styles.imageContainer}
      />
      <View style={styles.textContainer}>
        <Text size={ESize.M} style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Line />
        <View style={styles.spacing} />
        <Text size={ESize.S} style={styles.subtitle} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const Carousel2 = memo(({entries, containerStyle}: ICarouselProps) => {
  return (
    <Swipe
      style={containerStyle && styles.wrapper}
      showsButtons={false}
      showsPagination={true}
      paginationStyle={styles.paginationStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      loop>
      {entries.map(function(value) {
        return renderItem(value);
      })}
    </Swipe>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: verticalScale(10),
  },
  paginationStyle: {
    bottom: -10,
  },
  dotStyle: {
    backgroundColor: Colors.PRIMARY_LIGHT,
  },
  activeDotStyle: {
    backgroundColor: Colors.SECONDARY,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textContainer: {
    paddingHorizontal: scale(10),
    backgroundColor: Colors.PRIMARY,
    paddingVertical: verticalScale(5),
    height: scale(100),
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
  },
  title: {
    color: Colors.WHITE,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: verticalScale(6),
    color: Colors.WHITE,
    textAlign: 'left',
    fontStyle: 'italic',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
  spacing: {
    height: scale(10),
  },
});

export default Carousel2;
