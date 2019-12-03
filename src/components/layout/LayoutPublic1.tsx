import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {withNavigation} from 'react-navigation';

import {Colors, Images} from '../../res';

interface IProps {
  children?: React.ReactNode;
  navigation: any;
}

const LayoutPublic = ({children, navigation}: IProps) => {
  const index = navigation.dangerouslyGetParent().state.index;
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
      <View style={styles.header}>
        {index > 0 && (
          <TouchableHighlight
            onPress={() => navigation.goBack()}
            style={styles.containerGoBack}>
            <Image style={styles.goBack} source={Images.goBack} />
          </TouchableHighlight>
        )}
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.appName}>HEALTH{'\n'}CARE</Text>
      </View>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const LayoutPublicWithNavigation = withNavigation(LayoutPublic);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: scale(20),
  },
  containerGoBack: {
    paddingRight: scale(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: scale(40),
  },
  goBack: {
    width: scale(20),
    height: scale(20),
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

export default LayoutPublicWithNavigation;
