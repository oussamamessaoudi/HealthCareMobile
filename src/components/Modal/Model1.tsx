import React from 'react';
import {Modal, Text, View} from 'react-native';

const Modal1 = () => {
  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Modal1;
