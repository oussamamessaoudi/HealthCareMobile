import React, {useContext} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {ControllerContext} from '../../utils/Context'
import {IScreen} from '../../utils/models'
import {LayoutWithHeader} from '../../components/layout';


export default function(props : IScreen) {
  const controller = useContext(ControllerContext);
  console.log(props.navigation.getParam("from"));
  return (
      <LayoutWithHeader>
        <View style={styles.container}>
          <Text>Login Screen</Text>
          <Button
              onPress={() => controller?.navigate('marketing')}
              title="Press Me"
          />
        </View>
      </LayoutWithHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
