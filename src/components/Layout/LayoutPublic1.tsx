import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';

import {moderateScale, scale} from '../../utils/Scales';
import {Colors, Fonts, Images} from '../../res';

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
      <StatusBar barStyle="light-content" backgroundColor={Colors.PRIMARY} />
      <View style={styles.header}>
        {canGoBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.containerGoBack}>
            <Icon
              name="chevron-left"
              size={moderateScale(20)}
              color={Colors.PRIMARY_TEXT}
            />
          </TouchableOpacity>
        )}
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.appName}>HEALTH{'\n'}CARE</Text>
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        {children}
      </KeyboardAvoidingView>
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
    backgroundColor: Colors.PRIMARY,
  },
  containerGoBack: {
    paddingRight: scale(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    height: scale(40),
  },
  goBack: {
    width: scale(20),
    height: scale(20),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: scale(20),
  },
  logo: {
    width: scale(35),
    height: scale(35),
  },
  appName: {
    textAlign: 'center',
    color: Colors.PRIMARY_TEXT,
    fontSize: scale(12),
    paddingLeft: scale(5),
    fontFamily: Fonts.HEADER,
  },
});

export default LayoutPublicWithNavigation;
