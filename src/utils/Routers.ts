import {IRouters} from './models';
import {Login} from '../screens/Login';
import {Marketing} from '../screens/Marketing';

export const Routers: IRouters = {
  initialScreen: 'marketing',
  screens: {
    marketing: Marketing,
    login: Login,
  },
};
