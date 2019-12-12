import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ButtonMore} from '../../commons/features/ButtonMore';
import {Colors} from '../../res';
import {scale} from '../../utils/Scales';
import {Dashboard} from '../Dashboard';
import Operations from '../Operations';
import Stock from '../Stock';
import Params from '../Params';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name="dashboard" size={scale(25)} color={tintColor} />
        ),
      },
    },
    Operations: {
      screen: Operations,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name="exchange" size={25} color={tintColor} />
        ),
      },
    },
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <ButtonMore />, // Plus button component
      }),
    },
    Stock: {
      screen: Stock,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name="terminal" size={25} color={tintColor} />
        ),
      },
    },
    Params: {
      screen: Params,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon name="user" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: Colors.SECONDARY, // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        backgroundColor: Colors.PRIMARY, // TabBar background
      },
    },
    lazy: true,
  },
);
const NestedContainer = createAppContainer(bottomTabNavigator);

export default NestedContainer;
