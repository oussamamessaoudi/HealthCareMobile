import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import {Images, Colors, Strings} from '../../res';

interface IProps {
  children?: React.ReactNode;
}

const LayoutPublic = ({children}: IProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.appName}>
          {Strings.translate('layout.display_name')}
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
    height: verticalScale(50),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  appName: {
    textAlign: 'center',
    color: Colors.PRIMARY_TEXT,
    fontSize: moderateScale(13),
    paddingLeft: scale(5),
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default LayoutPublic;
