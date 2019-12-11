import React, {useCallback, useMemo, useState} from 'react';
import {Animated, StyleSheet, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scale} from '../../../utils/Scales';

const SIZE = scale(60);

export function ButtonMore({goToNewOperation, goToNewProduct, goToDocs}: any) {
  const [mode] = useState(new Animated.Value(0));

  const toggleView = useCallback(() => {
    Animated.timing(mode, {
      toValue: (mode as any)._value === 0 ? 1 : 0,
      duration: 200,
    }).start();
  }, []);

  const {firstStyle, secondStyle, thirdStyle, bigStyle} = useMemo(() => {
    const opacity = mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return {
      firstStyle: {
        position: 'absolute',
        left: mode.interpolate({
          inputRange: [0, 1],
          outputRange: [20, -40],
        }),
        top: mode.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
        }),
        opacity,
      },
      secondStyle: {
        position: 'absolute',
        left: mode.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 20],
        }),
        top: mode.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -55],
        }),
        opacity,
      },
      thirdStyle: {
        position: 'absolute',
        left: mode.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 80],
        }),
        top: mode.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
        }),
        opacity,
      },
      bigStyle: {
        transform: [
          {rotate: mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          })},
        ],
      },
    };
  }, [mode]);

  return <View style={styles.container}>
    <Animated.View style={firstStyle}>
      <TouchableHighlight
        onPress={goToNewProduct}
        style={styles.smallContainer}
      >
        <Icon name='rocket' size={16} color='#F8F8F8'/>
      </TouchableHighlight>
    </Animated.View>
    <Animated.View style={secondStyle}>
      <TouchableHighlight
        onPress={goToNewOperation}
        style={styles.smallContainer}
      >
        <Icon name='home' size={16} color='#F8F8F8'/>
      </TouchableHighlight>
    </Animated.View>
    <Animated.View style={thirdStyle}>
      <TouchableHighlight
        onPress={goToDocs}
        style={styles.smallContainer}
      >
        <Icon name='archive' size={16} color='#F8F8F8'/>
      </TouchableHighlight>
    </Animated.View>
    <TouchableHighlight
      onPress={toggleView}
      underlayColor='#2882D8'
      style={styles.bigContainer}
    >
      <Animated.View style={bigStyle}>
        <Icon name='plus' size={24} color='#F8F8F8'/>
      </Animated.View>
    </TouchableHighlight>
  </View>;
}
const styles=StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  smallContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE / 2,
    height: SIZE / 2,
    borderRadius: SIZE / 4,
    backgroundColor: '#48A2F8',
  },
  bigContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    marginBottom: scale(45),
    backgroundColor: '#48A2F8',
    shadowColor: '#2882D8',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
  },
});
