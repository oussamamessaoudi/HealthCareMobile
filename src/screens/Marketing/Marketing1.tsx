import React, {useContext} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {ControllerContext} from '../../utils/Context'
import {LayoutPublic} from "../../components/layout";

export default function() {
  const controller = useContext(ControllerContext);
  return (
      <LayoutPublic>
          <View style={styles.container}>
              <Text>Marketing Screen</Text>
              <Button
                  onPress={() => controller?.navigate('login', {from :"fromHome"})}
                  title='Press Me'
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
