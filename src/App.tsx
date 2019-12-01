import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {translate} from './utils/translations';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.value}>{translate('hello')}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 18,
  },
});

export default App;
