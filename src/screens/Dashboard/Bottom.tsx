import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ButtonMore} from '../../commons/features/ButtonMore';
import {Colors} from '../../res';
import {scale} from '../../utils/Scales';

console.disableYellowBox = true;

const bottomTabNavigator = createBottomTabNavigator(
  {
    Album: {
      screen: Album,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name='dashboard' size={scale(25)} color={tintColor}/>
        ),
      },
    },
    Library: {
      screen: Library,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name='exchange' size={25} color={tintColor}/>
        ),
      },
    },
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <ButtonMore/>, // Plus button component
      }),
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name='terminal' size={25} color={tintColor}/>
        ),
      },
    },
    Params: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name='user' size={25} color={tintColor}/>
        ),
      },
    },

  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: Colors.PRIMARY_TEXT, // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // TabBar background
      },
    },
  },
);
const NestedContainer = createAppContainer(bottomTabNavigator);

export default () => <NestedContainer/>;

function Album() {
  return <View>
    <Text style={{color: 'white'}}>Album</Text>
  </View>;
}

function Library() {
  return <View>
    <Text style={{color: 'white'}}>Library</Text>
  </View>;
}

function History() {
  return <View>
    <Text style={{color: 'white'}}>History</Text>
  </View>;
}
