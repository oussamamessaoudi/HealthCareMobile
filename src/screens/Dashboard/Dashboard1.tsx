import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Tabs} from './index';
import {LayoutWithHeader} from '../../components/Layout';

export default function() {
  const tabs: any = Tabs();
  return (
    <LayoutWithHeader>
      <View style={styles.tabContainer}>{React.createElement(tabs)}</View>
      <View style={styles.latestOperation} />
    </LayoutWithHeader>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  latestOperation: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
