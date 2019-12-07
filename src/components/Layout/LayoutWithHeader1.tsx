import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {scale} from '../../utils/Scales';

import {Colors} from '../../res';
import {IProps} from './model';

const LayoutPublic = ({children}: IProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PRIMARY_DARK}
      />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LayoutPublic;
