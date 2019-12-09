import React from 'react';
import {SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function SkRoot({children}: React.PropsWithChildren<any>) {
  return(
  <SafeAreaView>
    <SkeletonPlaceholder>
      {children}
    </SkeletonPlaceholder>
  </SafeAreaView>
  );
}
