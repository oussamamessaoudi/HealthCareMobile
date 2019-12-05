import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';

import {Colors} from '../../res';
import {Text} from '../form/Text';
import {ESize} from '../form/Text/model';
import {ISlideEntry} from './Model';
import {scale, verticalScale, moderateScale} from '../../utils/Scales';

const SliderEntry = ({
  data: {illustration, subtitle, title},
  even,
  parallaxProps,
}: ISlideEntry): any => {
  return (
    <View style={styles.slideInnerContainer}>
      <View
        style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
        <ParallaxImage
          source={{uri: illustration}}
          style={styles.image}
          containerStyle={[
            styles.imageContainer,
            even && styles.imageContainerEven,
          ]}
          spinnerColor={even ? Colors.PRIMARY_LIGHT : Colors.PRIMARY_DARK}
          {...parallaxProps}
        />
      </View>
      <View style={[styles.textContainer, even && styles.textContainerEven]}>
        <Text
          size={ESize.S}
          style={[styles.title, even ? styles.titleEven : {}]}
          numberOfLines={2}>
          {title}
        </Text>
        <Text
          size={ESize.XS}
          style={[styles.subtitle, even ? styles.subtitleEven : {}]}
          numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default SliderEntry;

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: moderateScale(300),
    height: moderateScale(300),
    paddingHorizontal: scale(10),
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
  imageContainerEven: {
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  image: {
    resizeMode: 'cover',
  },
  textContainer: {
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(16),
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
  },
  textContainerEven: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
  title: {
    color: Colors.White,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  titleEven: {
    color: Colors.White,
  },
  subtitle: {
    marginTop: verticalScale(6),
    color: Colors.White,
    textAlign: 'left',
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: Colors.White,
  },
});
