import React, {useEffect, useMemo, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {setI18nConfig} from './res/strings';
import {ControllerContext} from './utils/Context';
import Controller from './utils/Controller';
import {IController} from './utils/models';
import {defaultValueRouter} from './utils/Routers';

export default () => {
  useMemo(() => setI18nConfig(), []);
  const [controller, setController] = useState<IController>();

  useEffect(() => {
    console.log('controller initialed');
    Controller.create().then(_controller => {
      console.log('controller created');
      setController(_controller);
      SplashScreen.hide();
    });
  }, []);

  const AppContainer: any = useMemo(() => {
    if (!controller) {
      return;
    }
    const {screens} = controller;
    const AppNavigator = createStackNavigator(screens, defaultValueRouter);
    return createAppContainer(AppNavigator);
  }, [controller]);

  if (!controller) {
    return null;
  }

  return (
    <ControllerContext.Provider value={controller}>
      <AppContainer
        ref={(nav: any) => {
          controller.setNavigator(nav);
        }}
      />
    </ControllerContext.Provider>
  );
};
