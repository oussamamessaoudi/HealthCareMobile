import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors, Images} from '../../res';

interface IProps {
  children?: React.ReactNode;
}

const LayoutPublic = ({children}: IProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.White} />
      <View style={styles.header}>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.appName}>
          HEALTH{'\n'}CARE
        </Text>
      </View>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: scale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: scale(40)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: scale(35),
    height: scale(35),
  },
  appName: {
    textAlign: 'center',
    color: Colors.BLACK,
    fontSize: scale(12),
    paddingLeft: scale(5),
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default LayoutPublic;
