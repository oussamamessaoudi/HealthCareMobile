import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Carousel} from '../../components/Carousel';
import Button1 from '../../components/form/Button/Button1';
import {LayoutPublic} from '../../components/Layout';
import {translate} from '../../res/strings';
import {StateApi} from '../../utils/Api';
import {scale} from '../../utils/Scales';
import {useController} from './Controller';

export default function() {
  const {response, navigate} = useController();

  if (response.state !== StateApi.SUCCESS) {
    return <ActivityIndicator />;
  }
  return (
    <LayoutPublic>
      <View style={styles.container}>
        <Carousel
          entries={response.data!}
          containerStyle={styles.containerCarousel}
        />
        <View style={styles.containerView}>
          <Button1 title={translate('marketing.navigate')} onPress={navigate} />
        </View>
      </View>
    </LayoutPublic>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerCarousel: {
    height: scale(350),
  },
  containerView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
