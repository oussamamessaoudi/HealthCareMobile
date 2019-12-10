import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '../../res';
import {IProps} from './model';

const LayoutPublic = ({children}: IProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={Colors.PRIMARY_DARK}
      />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default LayoutPublic;
