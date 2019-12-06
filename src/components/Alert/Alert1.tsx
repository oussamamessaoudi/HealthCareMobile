import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {moderateScale, scale} from '../../utils/Scales';
import {Text} from '../form/Text';

const Alert1 = ({isVisible, setVisible}: any) => {
  return (
    <Modal isVisible={isVisible}>

      <View style={styles.container}>
          <View style={styles.containerContent}>
            <View style={styles.closeContainer}>
              <Icon name='rocket' size={moderateScale(20)} color="#900"/>
            </View>
            <Text>Hello!</Text>
            <Button title='Hide modal' onPress={() => {setVisible(!isVisible)}}/>
          </View>
      </View>
    </Modal>
  );
};

export default Alert1;

const styles = StyleSheet.create({

  container : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContent : {
    width: scale(200),
    height: moderateScale(200),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : 'red',
  },
  closeContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'green',
  }


});
