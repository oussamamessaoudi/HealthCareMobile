import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from '../../res';

export default function ScreenSkeleton() {
  return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator animating={true} color={Colors.SECONDARY} size='large' /></View>);
}
