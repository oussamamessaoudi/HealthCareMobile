import React, {memo} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Colors} from '../../res';
import {Text} from '../form/Text';
import {ESize} from '../form/Text/model';
import {ISlideEntry} from './Model';
import {scale, verticalScale, moderateScale} from '../../utils/Scales';

const SliderEntry = memo(
  ({data: {illustration, subtitle, title}, even}: ISlideEntry): any => {
    console.log(illustration);
    return (
      <View style={styles.slideInnerContainer}>
        <Image
          source={{uri: illustration, cache: 'force-cache'}}
          resizeMode="cover"
          style={[
            styles.imageContainer,
            even ? styles.imageContainerEven : null,
          ]}
        />
        <View style={[styles.textContainer, even && styles.textContainerEven]}>
          <Text
            size={ESize.S}
            style={[styles.title, even ? styles.titleEven : null]}
            numberOfLines={2}>
            {title}
          </Text>
          <Text
            size={ESize.XS}
            style={[styles.subtitle, even ? styles.subtitleEven : null]}
            numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
      </View>
    );
  },
);

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
    color: Colors.WHITE,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  titleEven: {
    color: Colors.WHITE,
  },
  subtitle: {
    marginTop: verticalScale(6),
    color: Colors.WHITE,
    textAlign: 'left',
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: Colors.WHITE,
  },
});

export default SliderEntry;
