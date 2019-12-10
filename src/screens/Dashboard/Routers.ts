import {useMemo} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {Colors} from '../../res';
import {translate} from '../../res/strings';
import {scale} from '../../utils/Scales';
import Balance from './Balance';
import Earnings from './Earnings';

export default function() {
  return useMemo(() => {
    const tabs = createMaterialTopTabNavigator(
      {
        Gains: {
          screen: Earnings,
          navigationOptions: {title: translate('headers.gains')},
        },
        Balance: {
          screen: Balance,
          navigationOptions: {title: translate('headers.balance')},
        },
      },
      {
        tabBarOptions: {
          labelStyle: {
            fontSize: scale(12),
          },
          activeTintColor: Colors.PRIMARY_TEXT,
          style: {
            backgroundColor: Colors.PRIMARY,
          },
          indicatorStyle: {
            backgroundColor: Colors.SECONDARY,
          },
          upperCaseLabel: false,
        },
        lazy: true,
        swipeEnabled: true,
      },
    );
    return createAppContainer(tabs);
  }, []);
}
