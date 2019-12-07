import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {LayoutPublic} from '../../components/Layout';
import {ControllerContext} from '../../utils/Context';

export default function() {
  const controller = useContext(ControllerContext);
  return (
    <LayoutPublic>
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button
          onPress={() => controller!.navigate('marketing')}
          title="Press Me"
        />
      </View>
    </LayoutPublic>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
