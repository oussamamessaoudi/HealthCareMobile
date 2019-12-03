import {NavigationActions, NavigationContainerComponent} from 'react-navigation'
import {IConfig, IController} from './models'
import {Routers} from './Routers'

export default class Controller implements IController {
  readonly config: IConfig
  readonly screens: any
  navigator: NavigationContainerComponent | null = null

  private constructor(config: IConfig, screens: any) {
    this.config = config
    this.screens = screens
  }

  public static create(): Promise<IController> {
    const screens: any = Object.keys(Routers.screens).reduce(
      (previousValue: any, currentValue) => {
        const router = Routers.screens[currentValue]
        previousValue[currentValue] = {screen: router.screen, navigationOptions: () => ({
          title: router.displayName,
          headerShown : router.showHeader,
          headerBackTitle: null,
        })};
        return previousValue
      },
      {},
    )
    const controller = new Controller(
      {timeout: 0, urls: {content: ''}},
      screens,
    )
    return new Promise(resolve => setTimeout(() => resolve(controller), 500))
  }

  setNavigator(nav: NavigationContainerComponent | null): void {
    this.navigator = nav
  }
  navigate(routeName: string, params?: any): void {
    this.navigator?.dispatch(NavigationActions.navigate({ routeName , params}))
  }
}
