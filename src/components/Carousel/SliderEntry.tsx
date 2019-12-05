import React from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../res';
import {verticalScale, scale} from 'react-native-size-matters';
import {StyleSheet, Platform} from 'react-native';
import {ISlideEntry} from './Model';

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;

const SliderEntry = ({
  data: {illustration, subtitle, title},
  even,
}: ISlideEntry): any => {
  return (
    <View style={styles.slideInnerContainer}>
      <View style={styles.shadow} />
      <View
        style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
        <Image source={{uri: illustration}} style={styles.image} />
        <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
      </View>
      <View
        style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
        <Text
          style={[styles.title, even ? styles.titleEven : {}]}
          numberOfLines={2}>
          {title}
        </Text>
        <Text
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
    width: verticalScale(250),
    height: verticalScale(250),
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(18), // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: scale(20),
    right: scale(20),
    bottom: 18,
    shadowColor: Colors.PRIMARY_DARK,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: Colors.PRIMARY_LIGHT,
  },
  radiusMaskEven: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
  title: {
    color: Colors.White,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  titleEven: {
    color: Colors.White,
  },
  subtitle: {
    marginTop: 6,
    color: Colors.White,
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: Colors.White,
  },
});
