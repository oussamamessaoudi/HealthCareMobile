import {NavigationContainerComponent} from 'react-navigation';
import {IClient} from './Client';

export interface IScreen {
  navigation: {
    getParam: (key: string) => object;
  };
}

export interface IConfig {
  urls: {
    content: string;
  };
  timeout?: number;
}

export interface IController {
  setNavigator(nav: NavigationContainerComponent): void;
  navigate(routeName: string, p?: any): void;
  client: IClient;
  screens: any;
}

export interface IRouters {
  initialScreen: string;
  screens: IScreens;
}
export interface IScreens {
  [name: string]: {
    screen: any;
    displayName: string;
    showHeader: boolean;
  };
}
