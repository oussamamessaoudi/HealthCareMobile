import {
  NavigationActions,
  NavigationContainerComponent,
  StackActions,
} from 'react-navigation';
import {Client, IClient} from './Client';
import {IConfig, IController} from './models';
import {Routers} from './Routers';

export default class Controller implements IController {
  readonly screens: any;
  readonly client: IClient;
  navigator: NavigationContainerComponent | null = null;

  private constructor(config: IConfig, screens: any) {
    this.screens = screens;
    this.client = new Client(config);
  }

  public static create(): Promise<IController> {
    const screens: any = Object.keys(Routers.screens).reduce(
      (previousValue: any, currentValue) => {
        const router = Routers.screens[currentValue];
        previousValue[currentValue] = {
          screen: router.screen,
          navigationOptions: () => ({
            title: router.displayName,
            headerShown: router.showHeader,
            headerBackTitle: null,
          }),
        };
        return previousValue;
      },
      {},
    );
    const controller = new Controller(
      {timeout: 0, urls: {content: '', passport: ''}},
      screens,
    );
    return new Promise(resolve => setTimeout(() => resolve(controller), 500));
  }

  setNavigator(nav: NavigationContainerComponent): void {
    this.navigator = nav;
  }
  navigate(routeName: string, params?: any): void {
    this.navigator!.dispatch(NavigationActions.navigate({routeName, params}));
  }
  reset(routeName: string, params?: any) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName, params})],
    });
    this.navigator!.dispatch(resetAction);
  }
}
