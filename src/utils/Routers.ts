import {Colors} from '../res';
import {Dashboard} from '../screens/Dashboard';
import {Login} from '../screens/Login';
import {Marketing} from '../screens/Marketing';
import {IRouters} from './models';

export const Routers: IRouters = {
  initialScreen: 'marketing',
  screens: {
    marketing: {screen: Marketing, displayName: 'Marketing', showHeader: false},
    login: {screen: Login, displayName: 'Login', showHeader: false},
    dashboard: {screen: Dashboard, displayName: 'Dashboard', showHeader: true},
  },
};
export const defaultValueRouter: any = {
  initialRouteName: 'marketing',
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
