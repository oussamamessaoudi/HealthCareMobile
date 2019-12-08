import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LayoutWithHeader} from '../../components/Layout';

export default function() {
  return (
    <LayoutWithHeader>
      <View style={styles.container} />
    </LayoutWithHeader>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
});
