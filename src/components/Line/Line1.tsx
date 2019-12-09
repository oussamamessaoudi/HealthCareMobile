import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../res';
import {scale, verticalScale} from '../../utils/Scales';

export default function() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: Colors.SECONDARY,
    height: verticalScale(2),
    width: scale(50),
    marginTop: verticalScale(5),
  },
});
