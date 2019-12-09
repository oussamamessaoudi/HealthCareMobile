import React, {useMemo} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {Colors, Images} from '../../res';
import {verticalScale} from '../../utils/Scales';

export default function ScreenSkeleton() {
  const styles = useMemo(() => {
    const spinValue = new Animated.Value(0);

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    const spin: any = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
      },
      image: {
        transform: [{rotate: spin}],
        height: verticalScale(150),
        width: verticalScale(150),
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image style={styles.image} source={Images.logo} />
    </View>
  );
}
