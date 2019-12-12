import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Carousel} from '../../components/Carousel';
import Button1 from '../../components/form/Button/Button1';
import {LayoutPublic} from '../../components/Layout';
import {translate} from '../../res/strings';
import {StateApi} from '../../utils/Client/Api';
import {scale} from '../../utils/Scales';
import {useController} from './Controller';
import {Loading} from './index';

export default function() {
  const {response, navigate} = useController();

  if (response.state !== StateApi.SUCCESS) {
    return <Loading />;
  }

  return (
    <LayoutPublic containerStyle={styles.container}>
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containerCarousel: {
    flex: 2,
  },
  containerView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
});
