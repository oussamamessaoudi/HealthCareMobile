import {Colors} from '../res';
import {Dashboard} from '../screens/Dashboard';
import {Login} from '../screens/Login';
import {Marketing} from '../screens/Marketing';
import Operations from '../screens/Operations';
import Stock from '../screens/Stock';
import Params from '../screens/Params';
import {IRouters} from './models';
import Home from '../screens/Home';
export const Routers: IRouters = {
  initialScreen: 'home',
  screens: {
    marketing: {screen: Marketing, displayName: 'Marketing', showHeader: false},
    login: {screen: Login, displayName: 'Login', showHeader: false},
    home: {screen: Home, displayName: 'Home', showHeader: false},
    dashboard: {screen: Dashboard, displayName: 'Dashboard', showHeader: true},
    operations: {
      screen: Operations,
      displayName: 'Operations',
      showHeader: true,
    },
    Stock: {
      screen: Stock,
      displayName: 'Stock',
      showHeader: true,
    },
    Params: {
      screen: Params,
      displayName: 'Stock',
      showHeader: true,
    },
  },
};
export const defaultValueRouter: any = {
  initialRouteName: 'home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.PRIMARY,
    },
    headerTintColor: Colors.PRIMARY_TEXT,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
