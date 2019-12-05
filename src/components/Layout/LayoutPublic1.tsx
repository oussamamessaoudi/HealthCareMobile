import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {withNavigation} from 'react-navigation';

import {Colors, Images} from '../../res';

interface ILayoutPublic {
  children?: React.ReactNode;
  navigation: {
    goBack: () => any;
  };
  canGoBack: boolean;
}

export const LayoutPublic = ({
  children,
  canGoBack,
  navigation,
}: ILayoutPublic) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
      <View style={styles.header}>
        {canGoBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.containerGoBack}>
            <Image style={styles.goBack} source={Images.goBack} />
          </TouchableOpacity>
        )}
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.appName}>HEALTH{'\n'}CARE</Text>
      </View>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const WrapperLayoutPublic = ({children, navigation}: any) => {
  const index = navigation!.dangerouslyGetParent().state.index;
  return (
    <LayoutPublic
      canGoBack={index > 0}
      children={children}
      navigation={navigation}
    />
  );
};

const LayoutPublicWithNavigation = withNavigation(WrapperLayoutPublic);

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
